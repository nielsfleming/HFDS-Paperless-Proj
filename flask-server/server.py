from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Members API route example
@app.route("/members")
def members():
    return {"members": ["Niels", "Mindy", "Jaimil"]}

if __name__ == "__main__":
    app.run(debug=True)

from re import M
import pyodbc
import json
import os
from datetime import date, timedelta

@app.route("/data")
def loadTracker(resource):
    pwd = os.environ.get('CMSPASS') # password
    if not pwd:
        raise Exception("ENV VARIABLE CMS PASS IS NOT SET")
    conn = pyodbc.connect(f"DSN=CMSDAT;UID=JOEFURFARO;PWD={pwd};SYSTEM=S10138AG.alfield.martinrea.com;DBQ=CMSDAT CMSDAT;DFTPKGLIB=QGPL;LANGUAGEID=ENU;PKG=QGPL/DEFAULT(IBM),2,0,1,0,512;QRYSTGLMT=-1;")
    cursor = conn.cursor()

    def exec(cursor, query):
        cursor.execute(query)
        columns = [column[0] for column in cursor.description]
        results = []
        for row in cursor.fetchall():
            results.append(dict(zip(columns, row)))
        return results

    
    # required table definitions
    rout = exec(cursor, "SELECT METHDR.AOPART, METHDR.AODEPT, METHDR.AORESC, METHDR.AOSEQ#, METHDR.AORUNS, METHDR.AOUNIT, METHDR.AORTYP, METHDR.AO#MEN, METHDR.AO#MCH, METHDR.AOSETP FROM S6506D0B.CMSDAT.METHDR METHDR")
    mrpi = exec(cursor, "SELECT MRPI.YCPLNT, MRPI.YCPART, MRPI.YCTYPE, MRPI.YCSCHT, MRPI.YCQTYH, MRPI.YCHLDQ, MRPI.YCMRPQ, MRPI.YCMINQ, MRPI.YCMAXQ, MRPI.YCUNIT, MRPI.YCMLVL, MRPI.YCEXMG, MRPI.YCPLNR, MRPI.YCDATE, MRPI.YCLDAT, char(MRPI.YCLTIM) FROM S6506D0B.CMSDAT.MRPI MRPI WHERE (MRPI.YCPLNT='DFT')")
    prodStart = mrpi[0]['YCLDAT'] # date.today() - timedelta(days=2)
    prodEnd = date.today() + timedelta(days=5)
    MRPRuntime = mrpi[0]['00016']
    demdEnd = date.today() + timedelta(days=25) # The original num days is 25, but the new file said 60, Skanda said he chose 60 because he forgot how many days he used last time, smaller picked since larger makes longer CMS queries
    prod = exec(cursor, f"SELECT STKT.BYPART, STKT.BYSTOK, STKT.BYACTN, STKT.BYQTY, STKT.BYTDAT, STKT.BYSRC, STKT.BYJREF, STKT.BYIREF, STKT.BYSEQ#, STKT.BYREAS, STKT.BYDREF, STKT.BYTUNT, STKT.BYUSER, STKT.BYFSYY, STKT.BYFSPR, STKT.BYPLNT, char(STKT.BYSTIM) FROM S6506D0B.CMSDAT.STKT STKT WHERE (STKT.BYSDAT>='{prodStart}' And STKT.BYSDAT<='{prodEnd}') AND (STKT.BYPLNT='DFT') AND (STKT.BYSRC='PD') AND (STKT.BYSTIM>'{MRPRuntime}') AND (STKT.BYACTN='R') AND (STKT.BYTUNT='EA')")
    demd = exec(cursor, f"SELECT MRPDMD.DPPART, MRPDMD.DPDATE, MRPDMD.DPQTY, MRPDMD.DPSRC, MRPDMD.DPREF, MRPDMD.DPOERL, MRPDMD.DPPPRT, MRPDMD.DPPLNT, MRPDMD.DPSPLT, MRPDMD.DPTMZN FROM S6506D0B.CMSDAT.MRPDMD MRPDMD WHERE (MRPDMD.DPDATE<'{demdEnd}') AND (MRPDMD.DPSRC In ('ALC','OE','OSA')) ORDER BY DPPART, DPDATE")
    qohReady = exec(cursor, "SELECT STKB.BXPART, STKB.BXQTOH, STKB.BXUNIT, STKB.BXSTOK FROM S6506D0B.CMSDAT.STKB STKB WHERE (STKB.BXQTOH Not In (0)) AND (STKB.BXPLNT='DFT') AND (STKB.BXSTOK Not In ('DFTQ25','DFTXXX'))")

    qoh = {}
    for part in qohReady:
        key = part["BXPART"].strip()
        qoh[key] = qoh.get(key, 0) + part["BXQTOH"]

    # Part to resource map
    resources = {}
    for route in rout:
        resources["P" + route["AOPART"].strip()] = route["AORESC"].strip()

    ycmrpq = {}
    for p in mrpi:
        ycmrpq["P" + p["YCPART"].strip()] = p["YCMRPQ"]

    totalPd = {}
    byParts = set([p["BYPART"].strip() for p in prod])
    for part in byParts:
        totalPd["P"+part] = 0
    for p in prod:
        totalPd["P" + p["BYPART"].strip()] += p["BYQTY"]

    demd = [d for d in demd if ("P" + d["DPPART"].strip()) in resources and resources["P" + d["DPPART"].strip()] == resource]

    lastCUM = 0

    for i,d in enumerate(demd):
        d["resource"] = resources["P" + d["DPPART"].strip()]
        d["mrpQOH"] = ycmrpq["P" + d["DPPART"].strip()]
        d["afterMRP"] = totalPd.get("P" + d["DPPART"].strip(), 0)
        d["QOH"] = d["mrpQOH"] + d["afterMRP"] # "Total" column

        samePart = i != 0 and demd[i]["DPPART"].strip() == demd[i-1]["DPPART"].strip()
        if samePart:
            # Deduct from previous demand part's cumulative quantity
            d["CUM"] = lastCUM - d["DPQTY"]
        else:
            # New part! Subtract from current TOTAL
            d["CUM"] = d["QOH"] - d["DPQTY"]

        lastCUM = d["CUM"]
        d["part"] = d["DPPART"].strip()

    allParts = sorted(set([d["part"] for d in demd]))

    data = []

    allDates = set()

    for part in allParts:
        cur = {}
        quants = []
        dates = set([str(x["DPDATE"]) for x in demd if x["part"] == part])
        for d in sorted(dates):
            allDates.add(d)
            qohs = [x["CUM"] for x in demd if x["part"] == part and str(x["DPDATE"]) == d and x["CUM"] != None]
            minQOH = None if len(qohs) == 0 else min(qohs)
            if minQOH is None:
                continue
            quants.append({
                "Date": str(d),
                "MinQOH": float(minQOH) if minQOH is not None else None 
            })
        first = [x for x in demd if x["part"] == part][0]
        cur["PartNo"] = first["part"]
        cur["Quants"] = quants
        if len(quants) == 0:
            continue
        cur["QOH"] = float(qoh.get(part,0))# float(first["QOH"]) if first["QOH"] is not None else None 
        cur["Resource"] = first["resource"].strip()
        data.append(cur)

    for part in data:
        dates = [q["Date"] for q in part["Quants"]]
        for d in allDates:
            if d not in dates:
                part["Quants"].append({"Date": d, "MinQOH": None})
        part["Quants"] = sorted(part["Quants"], key=(lambda quant: quant["Date"]))

    conn.close()

    return data