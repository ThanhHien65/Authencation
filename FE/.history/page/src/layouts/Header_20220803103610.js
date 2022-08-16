import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div className="sideBarmenu">
        <ul>
          <li>
            <Link to="/">Backup overview</Link>
          </li>
          <li>
            <Link to="/monitor">monitor</Link>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
