import Header from "./layouts/Header";
import "./Assests/style.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Backup from "./components/Backup";
import Monitor from "./components/Monitor";
import Traffic from "./components/Traffic";
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" exact element={<}></Route>
          <Route path="/monitor" exact element={Monitor}></Route>
          <Route path="/traffic" exact element={Traffic}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
