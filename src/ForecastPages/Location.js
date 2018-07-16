import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const API_Key = 'AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg';

class Location extends Component {
  render() {
    return (
      <div className="gmap" style={{ height: '50vh', width: '60vh' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_Key }}
          center={this.props.coordinates}
          defaultZoom={11}
        >
        </GoogleMapReact>
      </div>
    );
  }
}

export default Location;
