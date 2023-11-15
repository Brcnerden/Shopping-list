import "bootstrap/dist/css/bootstrap.min.css";
import Markets from "./component/Dropdown/Dropdown";
import List from "./component/List";
import { ConfettiButton } from "./component/ConfettiButton/ConfettiButton";

function App() {
  return (
    <>
      <div className="d-flex gap-3">
        <Markets />
        <List />
        <ConfettiButton />
      </div>
    </>
  );
}

export default App;
