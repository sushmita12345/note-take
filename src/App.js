import "./App.css";
import {LandingPage} from "./pages/LandingPage/LandingPage";
import {Route, Routes} from "react-router-dom";
import {Login} from "../src/pages/Login/Login";
import {Home} from "../src/pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  exact path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
