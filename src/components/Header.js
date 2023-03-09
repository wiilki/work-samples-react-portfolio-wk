import React from "react";
import Navigation from "./Navigation";

function Header() {
  return (
    <header id="header" className="d-flex flex-column justify-content-center">
      <h1>My Portfolio</h1>
      <Navigation />
    </header>
  );
}

export default Header;
