import React from 'react';

const Interface = props => (
  <form onSubmit={props.getCurrentWeather}>
    <p><input type="text" name="cityinput" placeholder="City"/></p>
    <p><input type="text" name="countryinput" placeholder="Country"/></p>
    <button>Get forecast!</button>
  </form>
)

export default Interface;