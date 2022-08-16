import Header from "./layouts/Header";
import "./Assests/style.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Backup from "./components/Backup";
import Monitor from "./components/Monitor";
import Traffic from "./components/Traffic";
Traffic;
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes></Routes>
      </Router>
    </div>
  );
}

export default App;
