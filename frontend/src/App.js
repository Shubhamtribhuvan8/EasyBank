import "./App.css";
import { ToastContainer } from "react-toastify";
import Routers from "./component/Router";
import NavBar from "./Navbar";
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <NavBar />
      <Routers />
    </div>
  );
}

export default App;
