import React, { Component } from 'react';

const celsiusconverter = 273.15;
const tempprecision = 3;

var firstLetterToUpper = (string) => (
  string.charAt(0).toUpperCase() + string.slice(1)
)

class Forecast extends Component {
  render() {
    if (this.props.city) {
      return (
        <div>
          <h3>Forecast for {this.props.city}, {this.props.country}:</h3>
          <ul>
            <li><p>Temperature: {(this.props.temperature - celsiusconverter).toPrecision(tempprecision)} °C</p></li>
            <li><p>Description: {firstLetterToUpper(this.props.description)}</p></li>
            <li><p>Windspeed: {this.props.windspeed} m/s</p></li>
            <li><p>Pressure: {this.props.pressure} hPa</p></li>
          </ul>
        </div>
      );
    } else {
      return (
        <div></div>
      )
    }
  }
}

export default Forecast;