import React from "react";
import { Link } from "react-router-dom";
import { VscServer, VscPreview, VscRadioTower } from "react-icons/vsc";
const Header = () => {
  return (
    <div>
      <div className="sideBarmenu">
        <ul>
          <li>
            <VscServer></VscServer>
            <Link to="/">Backup overview</Link>
          </li>
          <li>
            <VscPreview></VscPreview>
            <Link to="/monitor">monitor</Link>
          </li>
          <li>
            <VscRadioTower style={fontSize: '1rem'}></VscRadioTower>
            <Link to="/traffic">traffic</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
