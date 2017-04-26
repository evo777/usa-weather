import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    //new google.maps is how we create an embedded gooogle maps
    new google.maps.Map(this.refs.map, { //google.maps.Map will take in a reference of an HTML element where we want to render the map to.
      zoom: 12, //Screen with of a city
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    return <div ref="map" />;
  }
}

export default GoogleMap;