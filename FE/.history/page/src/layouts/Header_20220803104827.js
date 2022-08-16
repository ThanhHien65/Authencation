import React from "react";
import { Link } from "react-router-dom";
import { IconName } from "react-icons/vsc";
const Header = () => {
  return (
    <div>
      <div className="sideBarmenu">
        <ul>
          <li>
          VscServer <Link to="/">Backup overview</Link>
          </li>
          <li>
            <Link to="/monitor">monitor</Link>
          </li>
          <li>
            <Link to="/traffic">traffic</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
