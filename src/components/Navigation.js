import React from "react";
import { Link } from "react-router-dom";
import "../css/components/Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/usa">
        USA
      </Link>
    </div>
  );
}

export default Navigation;
