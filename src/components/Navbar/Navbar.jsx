import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <ul className="navbar-menu">
        <li>
          <Link className="link" to="/">
            HOME
          </Link>
        </li>
        <li>
          <Link className="link" to="/view">
            VIEW BOOKS
          </Link>
        </li>
        <li>
          <Link className="link" to="/rent">
            RENT A BOOK
          </Link>
        </li>
        <li>
          <Link className="link" to="signup">
            SIGN UP
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
