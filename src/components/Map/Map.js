import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker.tsx';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 39.768603,
      lng: -104.980644
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '34.5vh', width: '47.5vw' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDL9M28-im0-26MDH2MGpukuOgzS-hbdWU' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={39.768603}
            lng={-104.980644}
            text="Denver Acorn"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;