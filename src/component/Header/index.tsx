import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-title">Sample Header</div>
        <div className="tab-items-container">
          <Link className="tab-item" to="/firstTab">
            First tab
          </Link>
          <Link className="tab-item" to="/secondTab">
            Second tab
          </Link>
          <Link className="tab-item" to="/thirdTab">
            Third tab
          </Link>
          <Link className="tab-item" to="/fourthTab">
            Fourth tab
          </Link>
        </div>
        <div className="divider" />
      </div>
    );
  }
}

export default Header;
