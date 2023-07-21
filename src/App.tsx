import "./App.css";
import Table from "./components/Table";
import HeaderBanner from "./components/headerBanner";
import GetDateTime from "./components/getDateTime";

export default function App() {
  return (
    <div>
      <HeaderBanner titleText={"Header"} />
      <Table />
      <GetDateTime />
    </div>
  );
}
