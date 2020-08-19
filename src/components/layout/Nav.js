import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

function Nav(props) {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        {/* <h1 className="center blue-text"></h1> */}
        <span className="brand-logo">Todo's</span>
        <ul className="right">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default withRouter(Nav);
