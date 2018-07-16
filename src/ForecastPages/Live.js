import React from "react";

const celsiusconverter = 273.15;
const tempprecision = 3;

var firstLetterToUpper = (string) => (
  string.charAt(0).toUpperCase() + string.slice(1)
)

const Live = (props) => (
  <div>
    <ul>
      <li>
        <p><b>Temperature:</b> {(props.temperature - celsiusconverter).toPrecision(tempprecision)} °C</p>
      </li>
      <li>
        <p><b>Description:</b> {firstLetterToUpper(props.description)}</p>
      </li>
      <li>
        <p><b>Windspeed:</b> {props.windspeed} m/s</p>
      </li>
      <li>
        <p><b>Pressure:</b> {props.pressure} hPa</p>
      </li>
    </ul>
  </div>
)

export default Live;