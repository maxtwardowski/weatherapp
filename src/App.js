import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Interface from './Interface';
import Forecast from './Forecast';

const API_Key = '1e900e378611500f4cb61cad3659ff45';

class WeatherApp extends Component {

  getForecast = async (e) => {
    e.preventDefault();
    const city = e.target.elements.cityinput.value;
    const country = e.target.elements.countryinput.value;
    const apicaller = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_Key}`);
    const forecast_data = await apicaller.json();

    console.log(forecast_data);
  }

  render() {
    return (
      <div>
        <Header />
        <Interface getForecast={this.getForecast} />
        <Forecast />
        <Footer />
      </div>
    );
  }

}

export default WeatherApp;
