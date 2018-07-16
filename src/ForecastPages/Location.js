import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class Location extends Component {
  
  render() {
    return (
      <div className="gmap" style={{ height: '50vh', width: '60vh' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg' }}
          center={this.props.coordinates}
          defaultZoom={11}
        >
        </GoogleMapReact>
      </div>
    );
  }
}

export default Location;
