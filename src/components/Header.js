import React from "react";
import Navigation from "./Navigation";
import "../styles/Header.css"

function Header() {
  return (
    <header id="header" className="d-flex flex-column justify-content-center">
      <Navigation />
    </header>
  );
}

export default Header;
