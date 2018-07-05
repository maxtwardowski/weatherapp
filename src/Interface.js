import React, { Component } from 'react';

class Interface extends Component {
  render() {
    return (
      <form onSubmit={this.props.getForecast}>
        <p><input type="text" name="cityinput" placeholder="City"/></p>
        <p><input type="text" name="countryinput" placeholder="Country"/></p>
        <button>Get forecast!</button>
      </form>
    );
  }
}

export default Interface;