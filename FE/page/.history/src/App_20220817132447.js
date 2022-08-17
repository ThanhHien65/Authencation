import Header from "./layouts/Header";
import "./Assests/style.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Backup from "./components/Backup";
import Monitor from "./components/Monitor";
import Traffic from "./components/Traffic";
import Login from "./components/Login";
import { LoginStatus, board } from "./components/Globaldata";
import { RecoilRoot, useRecoilValue, useRecoilState } from "recoil";
function App() {
  document.title = "sign in";
  const [fail, setfail] = useRecoilState(LoginStatus);
  const [Showboard, setBoard] = useRecoilState(board);
  const dashboard = () => {
    return (
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" exact element={<Backup></Backup>}></Route>
          <Route path="/monitor" exact element={<Monitor></Monitor>}></Route>
          <Route path="/traffic" exact element={<Traffic></Traffic>}></Route>
        </Routes>
      </Router>
    );
  };
  return (
    <div className="App">
      <Login></Login>
      {Showboard === false ? "" : dashboard()}
    </div>
  );
}

export default App;
