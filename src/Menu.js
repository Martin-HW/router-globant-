import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink exact to="/" activeClass="active">
            Home
          </NavLink>
          <NavLink exact to="/uno" activeClass="active">
            Project One
          </NavLink>
          <NavLink exact to="/dos" activeClass="active">
            Project Two
          </NavLink>
          <NavLink exact to="/tres" activeClass="active">
            Project Three
          </NavLink>
          <NavLink exact to="no-existe" activeClass="active">
            Error 404
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
