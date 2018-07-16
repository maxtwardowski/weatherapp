import React from "react";

const celsiusconverter = 273.15;
const tempprecision = 3;
const hours = ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'];

var firstLetterToUpper = string => (
  string.charAt(0).toUpperCase() + string.slice(1)
)

const Tomorrow = props => {
  const temperatures = props.temperatures;
  const descriptions = props.descriptions;

  class HourlyForecast {
    constructor (index) {
      this.hour = hours[index];
      this.temperature = temperatures[index];
      this.description = descriptions[index];
    }
  }

  var hourlylist = [];

  for (let i = 0; i < 8; i++) {
    hourlylist.push(new HourlyForecast(i))
  }

  hourlylist = hourlylist.map((element) =>
    <li key={element.hour}>
      <p><b>{element.hour}:</b> {(element.temperature - celsiusconverter).toPrecision(tempprecision)} °C, {firstLetterToUpper(element.description)}</p>
    </li>
  )

  return (
    <ul>
      {hourlylist}
    </ul>
  )
}

export default Tomorrow;