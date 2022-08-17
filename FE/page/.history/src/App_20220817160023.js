import Header from "./layouts/Header";
import "./Assests/style.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Backup from "./components/Backup";
import Monitor from "./components/Monitor";
import Traffic from "./components/Traffic";
import Login from "./components/Login";
import { LoginStatus, board, TokenStatus } from "./components/Globaldata";
import { RecoilRoot, useRecoilValue, useRecoilState } from "recoil";
function App() {
  document.title = "Sign In";
  const [fail, setfail] = useRecoilState(LoginStatus);
  const [Showboard, setBoard] = useRecoilState(board);
  const [erroCode, setCode] = useRecoilState(TokenStatus);
  const axios = require("axios");
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
  if (localStorage.getItem("AccessToken")) {
    window.onload = () => {
      const token = localStorage.getItem("AccessToken");
      const instance = axios.create({
        baseURL: "http://localhost:5000",
        timeout: 1000,
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      instance
        .get("/token")
        .then((response) => {
          setfail(!fail);
          setBoard(!Showboard);
        })
        .catch((err) => {
          localStorage.removeItem("AccessToken");
          console.log("aaaa");
          setfail(!fail);
          setBoard(!Showboard);
          setCode(erroCode);
        });
    };
  }
  return (
    <div className="App">
      {Showboard === false ? "" : dashboard()}
      {fail === false ? "" : <Login></Login>}
    </div>
  );
}

export default App;
