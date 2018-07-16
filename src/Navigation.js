import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => (
  <div>
    <NavLink to="/">Current</NavLink>
    <NavLink to="/tomorrow">Tomorrow</NavLink>
    <NavLink to="/page3">Page3</NavLink>
  </div>
)

export default Navigation;