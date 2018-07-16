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
    live: {
      time: undefined,
      temperature: undefined,
      description: undefined,
      windspeed: undefined,
      pressure: undefined,
    }, 
    tomorrow: {
      temperatures: [],
      descriptions: [],
    },
    coordinates: {
      lat: undefined,
      lng: undefined,
    }
  }

  getData = event => {
    event.preventDefault();
    const city = event.target.elements.cityinput.value;
    const country = event.target.elements.countryinput.value;
    const API_Caller_current = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_Key}`;
    const API_Caller_tomorrow = `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_Key}`;

    axios.all([
      axios.get(API_Caller_current),
      axios.get(API_Caller_tomorrow),
    ])
    .then(axios.spread((results_current, results_tomorrow) => {
      var getTemperatures = () => {
        let temperatures = [];
        let i = 0;
        let current_date = new Date();
        while (true) {
          let forecast_date = new Date(results_tomorrow.data.list[i].dt_txt);
          if (forecast_date.getDate() > current_date.getDate() + 1)
            break;
          if (forecast_date.getDate() === current_date.getDate() + 1) {
            temperatures.push(results_tomorrow.data.list[i].main.temp);
          }
          i++;
        }
        return temperatures;
      }
      var getDescriptions = () => {
        let descriptions = [];
        let i = 0;
        let current_date = new Date();
        while (true) {
          let forecast_date = new Date(results_tomorrow.data.list[i].dt_txt);
          if (forecast_date.getDate() > current_date.getDate() + 1)
            break;
          if (forecast_date.getDate() === current_date.getDate() + 1) {
            descriptions.push(results_tomorrow.data.list[i].weather[0].description);
          }
          i++;
        }
        return descriptions;
      }

      this.setState({
        city: results_current.data.name,
        country: results_current.data.sys.country,
        live: {
          temperature: results_current.data.main.temp,
          description: results_current.data.weather[0].description,
          windspeed: results_current.data.wind.speed,
          pressure: results_current.data.main.pressure,
        },
        tomorrow: {
          temperatures: getTemperatures(),
          descriptions: getDescriptions(),
        },
        coordinates: {
          lat: results_current.data.coord.lat,
          lng: results_current.data.coord.lon,
        }
      })

    }))
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <Header />
        <Interface getData={this.getData} />
        <Weather 
          city={this.state.city}
          country={this.state.country}
          temperature={this.state.live.temperature}
          description={this.state.live.description}
          windspeed={this.state.live.windspeed}
          pressure={this.state.live.pressure}
          tomorrow_temperatures={this.state.tomorrow.temperatures}
          tomorrow_descriptions={this.state.tomorrow.descriptions}
          coordinates={this.state.coordinates}
        />
        <Footer />
      </div>
    );
  }

}

export default WeatherApp;
