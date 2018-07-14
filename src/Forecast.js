import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Page1 from "./ForecastPages/Page1";
import Page2 from "./ForecastPages/Page2";
import Page3 from "./ForecastPages/Page3";
import ErrorPage from "./ForecastPages/ErrorPage";

import Navigation from "./Navigation";

const celsiusconverter = 273.15;
const tempprecision = 3;

var firstLetterToUpper = (string) => (
  string.charAt(0).toUpperCase() + string.slice(1)
)

class Forecast extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Page1} exact />
            <Route path="/page2" component={Page2} />
            <Route path="/page3" component={Page3} />
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default Forecast;

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