import Header from "./layouts/Header";
import "./Assests/style.css";
import { BrowserRouter as Router, Route, Routes, LinkNavigate } from "react-router-dom";
import Backup from "./components/Backup";
import Monitor from "./components/Monitor";
import Traffic from "./components/Traffic";
import Login from "./components/Login";
function App() {
  document.title = "Dashboard";
  return (
    <div className="App">
      {/* <Login></Login>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" exact element={<Backup></Backup>}></Route>
          <Route path="/monitor" exact element={<Monitor></Monitor>}></Route>
          <Route path="/traffic" exact element={<Traffic></Traffic>}></Route>
        </Routes>
      </Router> */}
      <Router>
        <Routes>
          <Route index path="/" exact element={<Login></Login>}></Route>
          <Route path="/backup" exact element={<Backup></Backup>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
