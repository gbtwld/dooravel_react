import React from "react";
import "../css/components/Header.css";
import Navigation from "./Navigation";

function Header() {
  return (
    <div className="header">
      <span className="header__title">Dooravel</span>
      <Navigation />
    </div>
  );
}

export default Header;
