import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <nav className="navbar navbar-dark  navbar-expand-sm App-nav  ">
            <ul className="navbar-nav    ">
              <li className="nav-item ">
                <NavLink to={"/"} className="  nav-link">
                  <i className="fa fa-home"> Home</i>
                </NavLink>
              </li>

              <li className="nav-item ">
                <NavLink className="nav-link " to="/login">
                  <i className="fa fa-sign-in"> Login</i>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
