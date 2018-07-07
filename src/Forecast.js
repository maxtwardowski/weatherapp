import React, { Component } from 'react';

class Forecast extends Component {
  render () {
    return (
      <div>
        <h3>Forecast for {this.props.city}, {this.props.country}:</h3>
      </div>
    );
  }
}

export default Forecast;