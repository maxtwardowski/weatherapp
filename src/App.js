import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Interface from './Interface';
import Weather from './Weather';

import axios from 'axios';

const API_Key = '1e900e378611500f4cb61cad3659ff45';

class WeatherApp extends Component {

  state = {
    city: undefined,
    country: undefined,
    temperature: undefined,
    description: undefined,
    windspeed: undefined,
    pressure: undefined,
  }

  getForecast = (event) => {
    event.preventDefault();
    const city = event.target.elements.cityinput.value;
    const country = event.target.elements.countryinput.value;
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_Key}`)
    .then((results) => {
      this.setState({
        city: results.data.name,
        country: results.data.sys.country,
        temperature: results.data.main.temp,
        description: results.data.weather[0].description,
        windspeed: results.data.wind.speed,
        pressure: results.data.main.pressure
      })
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Interface getForecast={this.getForecast} />
        <Weather 
          city={this.state.city}
          country={this.state.country}
          temperature={this.state.temperature}
          description={this.state.description}
          windspeed={this.state.windspeed}
          pressure={this.state.pressure}
        />
        <Footer />
      </div>
    );
  }

}

export default WeatherApp;
