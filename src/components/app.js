import React, { Component } from 'react';

import SearchBar from '../containers/SearchBar';
import Weather from '../containers/Weather';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Weather />
      </div>
    );
  }
}
