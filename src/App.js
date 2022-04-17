import "./App.css";
import {LandingPage} from "./pages/LandingPage/LandingPage";
import {Route, Routes} from "react-router-dom";
import {Login} from "../src/pages/Login/Login";
import {Home} from "../src/pages/Home/Home";
import {Archive} from "../src/pages/Archive/Archive";

function App() {
  return (
    <div className="App">
      

      <Routes>
        <Route  exact path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </div>
  );
}

export default App;
