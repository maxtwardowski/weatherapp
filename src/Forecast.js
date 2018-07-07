import React, { Component } from 'react';

const celsiusconverter = 273.15;

class Forecast extends Component {
  render() {
    if (this.props.city) {
      return (
        <div>
          <h3>Forecast for {this.props.city}, {this.props.country}:</h3>
          <p>Temperature: {(this.props.temperature - celsiusconverter).toPrecision(3)} °C</p>
          <p>Description: {this.props.description}</p>
          <p>Windspeed: {this.props.windspeed} m/s</p>
          <p>Pressure: {this.props.pressure} hPa</p>
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