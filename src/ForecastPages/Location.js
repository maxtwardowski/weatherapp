import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Location extends Component {
  static defaultProps = {
    center: {
      lat: 51.76,
      lng: 19.46
    },
    zoom: 11
  };

  render() {
    return (
      <div class="gmap" style={{ height: '50vh', width: '50vh' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={51.759445}
            lng={19.457216}
            text={'Kreyser Avrora'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Location;
