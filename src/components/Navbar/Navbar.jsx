import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import ".toggle.js";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <button className="navbar-toggler" aria-label="Toggle navigation">
        <span className="toggler-icon"></span>
        <span className="toggler-icon"></span>
        <span className="toggler-icon"></span>
      </button>
      <ul className="navbar-menu">
        <li className="nav-item">
          <Link className="link" to="/">
            HOME
          </Link>
        </li>
        <li className="nav-item">
          <Link className="link" to="/view">
            VIEW BOOKS
          </Link>
        </li>
        <li className="nav-item">
          <Link className="link" to="/rent">
            RENT A BOOK
          </Link>
        </li>
        <li className="nav-item">
          <Link className="link" to="signup">
            SIGN UP
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
