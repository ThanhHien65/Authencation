import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Backup from "./Backup";
import Monitor from "./Monitor";
import Traffic from "./Traffic";
import Header from "../layouts/Header";
const Dashboard = () => {
  return (
    <div>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" exact element={<Backup></Backup>}></Route>
          <Route path="/monitor" exact element={<Monitor></Monitor>}></Route>
          <Route path="/traffic" exact element={<Traffic></Traffic>}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default Dashboard;
