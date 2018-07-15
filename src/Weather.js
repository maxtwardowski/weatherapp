import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Current from "./ForecastPages/Current";
import Forecast from "./ForecastPages/Forecast";
import Page3 from "./ForecastPages/Page3";
import ErrorPage from "./ForecastPages/ErrorPage";

import Navigation from "./Navigation";

/*const celsiusconverter = 273.15;
const tempprecision = 3;

var firstLetterToUpper = (string) => (
  string.charAt(0).toUpperCase() + string.slice(1)
)*/

class Weather extends Component {
  render() {
    if (this.props.city) {
      return (
        <BrowserRouter>
          <div>
            <h3>Weather for {this.props.city}, {this.props.country}:</h3>
            <Navigation />
            <Switch>
              <Route path="/" 
                render={ () => <Current temperature={this.props.temperature} />} 
                exact />
              <Route path="/forecast" 
                render={ () => <Forecast windspeed={this.props.windspeed} />} 
                />
              <Route path="/page3" render={ () => <Page3 pressure={this.props.windspeed} />} />
              <Route component={ErrorPage} />
            </Switch>
          </div>
        </BrowserRouter>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}

export default Weather;

/*
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
*/