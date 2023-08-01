import "./App.css";
import Table, { TableProps } from "./components/Table";
import HeaderBanner from "./components/headerBanner";
import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("http://localhost:5000/members")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log("in data print");
        console.log(data);
      });
  }, []);

  const props: TableProps = {
    item: [
      {
        partNumber: 123456,
        warehouse: "warehouse#1",
        bins: 12,
        quantity: 600,
        fifoLocation: "G245",
      },
      {
        partNumber: 654321,
        warehouse: "warehouse#2",
        bins: 8,
        quantity: 400,
        fifoLocation: "G420",
      },
    ],
  };

  return (
    <div>
      <HeaderBanner titleText={"SuperMarket FIFO Report"} />
      <Table {...props} />
    </div>
  );
}
