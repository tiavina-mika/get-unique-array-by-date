import { uniqBy } from "lodash";
import moment from "moment";
import "./styles.css";

const lots = [
  {
    objectId: "EZidK4yMF7",
    dlc: 1652227200000,
    orderSupplierItem: "BENOIT 2403"
  },
  {
    objectId: "9zapu8HQ8j",
    dlc: 1653955200000,
    orderSupplierItem: "BENOIT 2403"
  },
  {
    objectId: "L4gmWix2hL",
    dlc: 1652486400000,
    orderSupplierItem: "BENOIT 2403"
  },
  {
    objectId: "Bk65l0o1hA",
    dlc: 1652832000000,
    orderSupplierItem: "BENOIT 2403"
  },
  {
    objectId: "NXlyO9C8ct",
    dlc: 1653609600000,
    orderSupplierItem: "BENOIT 2403"
  },
  {
    objectId: "HLMTznxl86",
    dlc: 1652486400000,
    orderSupplierItem: "AMANDES TAMARI 40GR TEST"
  }
];
const lotsByDate = lots.map((l) => ({
  ...l,
  formattedDlc: moment(l.dlc).utc().format("DD/MM/YYYY")
}));

const uniqByDLC = uniqBy(lotsByDate, "dlc");

console.table("lotsByDate", lotsByDate);
console.table("uniqByDLC", uniqByDLC);

const App = () => {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
};

export default App;
