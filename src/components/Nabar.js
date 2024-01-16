// Navbar.js
import React from "react";
import {Link, animateScroll as scroll} from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="home" spy={true} smooth={true}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true}>
            About
          </Link>
        </li>
        <li>
          <Link to="services" spy={true} smooth={true}>
            Services
          </Link>
        </li>
        <li>
          <Link to="portfolio" spy={true} smooth={true}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
