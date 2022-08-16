import React from "react";
import { Link } from "react-router-dom";
import { VscServer, VscPreview, VscRadioTower } from "react-icons/vsc";
const Header = () => {
  const ChangeColor = (e) => {
    const 
    console.log(e.target);
  };
  return (
    <div className="sideBarmenu">
      <ul>
        <li onClick={ChangeColor}>
          <VscServer
            style={{ fontSize: "3rem", paddingRight: "1rem" }}
          ></VscServer>
          <Link to="/">Backup overview</Link>
        </li>
        <li onClick={ChangeColor}>
          <VscPreview
            style={{ fontSize: "3rem", paddingRight: "1rem" }}
          ></VscPreview>
          <Link to="/monitor">monitor</Link>
        </li>
        <li onClick={ChangeColor}>
          <VscRadioTower
            style={{ fontSize: "3rem", paddingRight: "1rem" }}
          ></VscRadioTower>
          <Link to="/traffic">traffic</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
