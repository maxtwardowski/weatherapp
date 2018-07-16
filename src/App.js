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
    current: {
      time: undefined,
      temperature: undefined,
      description: undefined,
      windspeed: undefined,
      pressure: undefined,
    }, 
    tomorrow: {
      temperatures: [],
      descriptions: [],
    }
  }

  getCurrentWeather = (event) => {
    event.preventDefault();
    const city = event.target.elements.cityinput.value;
    const country = event.target.elements.countryinput.value;
    const API_Caller = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_Key}`;
    axios.get(API_Caller).then((results) => {
      this.setState({
        city: results.data.name,
        country: results.data.sys.country,
        current: {
          temperature: results.data.main.temp,
          description: results.data.weather[0].description,
          windspeed: results.data.wind.speed,
          pressure: results.data.main.pressure
        }
      })
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Interface getCurrentWeather={this.getCurrentWeather} />
        <Weather 
          city={this.state.city}
          country={this.state.country}
          temperature={this.state.current.temperature}
          description={this.state.current.description}
          windspeed={this.state.current.windspeed}
          pressure={this.state.current.pressure}
        />
        <Footer />
      </div>
    );
  }

}

export default WeatherApp;
