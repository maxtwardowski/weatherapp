import React from "react";

const date = new Date();
const today = date.getDay();

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const Forecast = (props) => (
  <p>{days[today]}</p>
)

export default Forecast;