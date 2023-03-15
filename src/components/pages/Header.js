import React from 'react';
import Navigation from './Navigation';
import "../styles/Home.css";
import "../styles/Navigation.css";

function Header({ currentPage, handlePageChange }) {
  return (
    <nav id="navbar" className="navbar nav-menu">
      <div className="navtitle">
        <h3>Will Kim</h3>
      </div>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
    </nav>
  );
}

export default Header;
