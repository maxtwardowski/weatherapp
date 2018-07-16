import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Current from "./ForecastPages/Current";
import Tomorrow from "./ForecastPages/Tomorrow";
import Page3 from "./ForecastPages/Page3";
import ErrorPage from "./ForecastPages/ErrorPage";

import Navigation from "./Navigation";

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
                render={ () => <Current
                    city={this.props.city}
                    country={this.props.country}
                    temperature={this.props.temperature} 
                    description={this.props.description}
                    windspeed={this.props.windspeed}
                    pressure={this.props.pressure}
                  />
                } 
                exact />
              <Route path="/tomorrow" 
                render={ () => <Tomorrow windspeed={this.props.windspeed} />} 
                />
              <Route path="/page3" render={ () => <Page3 pressure={this.props.pressure} />} />
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