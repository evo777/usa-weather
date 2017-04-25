import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <form className="input-group">
          <input
            placeholder="Enter a city for a 5-day forecast"
            className="form-control" />
          <span className="input-group-btn">
            <button className="btn btn-primary">Search</button>
          </span>
        </form>
      </div>
    );
  }
}