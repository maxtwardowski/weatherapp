import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Interface from './Interface';
import Forecast from './Forecast';

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

  getForecast = async (event) => {
    event.preventDefault();
    const city = event.target.elements.cityinput.value;
    const country = event.target.elements.countryinput.value;
    const apicaller = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_Key}`);
    const forecast_data = await apicaller.json();
    this.setState({
      city: forecast_data.name,
      country: forecast_data.sys.country,
      temperature: forecast_data.main.temp,
      description: forecast_data.weather[0].description,
      windspeed: forecast_data.wind.speed,
      pressure: forecast_data.main.pressure
    });
    console.log(forecast_data);
  }

  render() {
    return (
      <div>
        <Header />
        <Interface getForecast={this.getForecast} />
        <Forecast 
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
