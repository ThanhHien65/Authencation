import Header from "./layouts/Header";
import "./Assests/style.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Backup from "./components/Backup";
import Monitor from "./components/Monitor";
import Traffic from "./components/Traffic";
import Login from "./components/Login";
import { RecoilRoot } from "recoil";
function App() {
  document.title = "Dashboard";

  return (
    <div className="App">
      <RecoilRoot>
        <Login></Login>
        {showboard === false ? "" : dashboard()}
      </RecoilRoot>
    </div>
  );
}

export default App;
