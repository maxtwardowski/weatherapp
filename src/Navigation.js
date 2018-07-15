import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => (
  <div>
    <NavLink to="/">Current</NavLink>
    <NavLink to="/forecast">5-days forecast</NavLink>
    <NavLink to="/page3">Page3</NavLink>
  </div>
)

export default Navigation;