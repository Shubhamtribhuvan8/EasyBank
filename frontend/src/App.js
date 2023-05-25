import "./App.css";
import { ToastContainer } from "react-toastify";
import Routers from "./component/Router";
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routers />
    </div>
  );
}

export default App;
