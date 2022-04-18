import "./App.css";
import {Route, Routes} from "react-router-dom";
import {LandingPage, Login, Home, Archive} from "./pages/index";

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
