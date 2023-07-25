import "./App.css";
import Table, { TableProps } from "./components/Table";
import HeaderBanner from "./components/headerBanner";

export default function App() {
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
