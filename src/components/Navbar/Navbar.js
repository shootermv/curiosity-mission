import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="top-nav">
      <div className="navLinks">
        <NavLink exact to="/">About</NavLink>
        <NavLink to="/weather">Weather</NavLink>
        <NavLink to="/images">Images</NavLink>
      </div>
    </nav>
  );
};
