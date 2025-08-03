import "./App.css";
import Navbar from "./component/Navbar";
import Textman from "./component/Textman";
import About from "./component/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("lightmode");

  const toggleMode = () => {
    if (mode === "lightmode") {
      setMode("darkmode");
      document.body.style.backgroundColor = "#0c1b33";
    } else {
      setMode("lightmode");
      document.body.style.backgroundColor = "#abbdd9";
    }
  };
  return (
    <Router>
      <Navbar logo="Text Manipulator" mode={mode} toggleMode={toggleMode} />
      <Routes>
        <Route
          index
          element={<Textman mode={mode} toggleMode={toggleMode} />}
        />
        <Route
          Exact
          path="/Textman"
          element={<Textman mode={mode} toggleMode={toggleMode} />}
        />
        <Route Exact path="/About" element={<About mode={mode} />} />
      </Routes>
    </Router>
  );
}

export default App;
