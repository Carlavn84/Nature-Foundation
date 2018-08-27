import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google}
      initialCenter={{
        lat: 51.9156,
        lng: 4.4548
      }}
      style={{  width: 50+'%',}}
       zoom={14}>

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCZtsUY6MQ1y6cwNTymqaDaeRl-Knfg834")
})(MapContainer)
