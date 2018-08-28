import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    return (
      <div className="map">
      <Map google={this.props.google}
      initialCenter={{
        lat: 51.9156,
        lng: 4.4548
      }}
      style={{ width: 50+'%', margin: 0, padding: 0 }}
       zoom={14}>

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />


      </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCZtsUY6MQ1y6cwNTymqaDaeRl-Knfg834")
})(MapContainer)
