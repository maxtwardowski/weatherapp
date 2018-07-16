import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => (
  <div>
    <NavLink to="/">Live</NavLink>
    <NavLink to="/tomorrow">Tomorrow</NavLink>
    <NavLink to="/location">Location Info</NavLink>
  </div>
)

export default Navigation;