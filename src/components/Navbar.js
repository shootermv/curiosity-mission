import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <section>
        <h1>Assignment</h1>

        <div className="navContent">
          <div className="navLinks">
            <Link to="/">About</Link>
            <Link to="/weather">Weather</Link>
            <Link to="/images">Images</Link>
          </div>
        </div>
      </section>
    </nav>
  );
};
