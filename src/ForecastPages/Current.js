import React from "react";

const celsiusconverter = 273.15;
const tempprecision = 3;

var firstLetterToUpper = (string) => (
  string.charAt(0).toUpperCase() + string.slice(1)
)

const Current = (props) => (
  <div>
    <ul>
      <li><p>Temperature: {(props.temperature - celsiusconverter).toPrecision(tempprecision)} °C</p></li>
      <li><p>Description: {firstLetterToUpper(props.description)}</p></li>
      <li><p>Windspeed: {props.windspeed} m/s</p></li>
      <li><p>Pressure: {props.pressure} hPa</p></li>
    </ul>
  </div>
)

export default Current;