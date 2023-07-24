import "./App.css";
import Table from "./components/Table";
import HeaderBanner from "./components/headerBanner";

export default function App() {
  
  return (
    <div>
      <HeaderBanner titleText={"SuperMarket FIFO Report"} />
      <Table />
    </div>
  );
}
