import "bootstrap/dist/css/bootstrap.min.css";
import Markets from "./component/Dropdown";
import List from "./component/List";

function App() {
  return (
    <>
      <div className="d-flex gap-3">
        <Markets />
        <List />
      </div>
    </>
  );
}

export default App;
