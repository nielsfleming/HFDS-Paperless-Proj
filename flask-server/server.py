from flask import Flask

app = Flask(__name__)

# Members API route example
@app.route("/members")
def members():
    return {"members": ["Niels", "Mindy", "Jaimil"]}

if __name__ == "__main__":
    app.run(debug=True)