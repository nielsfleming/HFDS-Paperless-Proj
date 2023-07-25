import "./App.css";
import Table from "./components/Table";
import HeaderBanner from "./components/headerBanner";

export default function App() {
  const data = {
    partNumber: 123456,
    warehouse: "warehouse#1",
    bins: 12,
    quantity: 600,
  };

  return (
    <div>
      <HeaderBanner titleText={"SuperMarket FIFO Report"} />
      <Table {...data} />
    </div>
  );
}
