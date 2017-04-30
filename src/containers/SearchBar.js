import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();

    //Call action creator. We are using this.props.fetchWeather beause of fetchWeather was passed in in mapDispatchToProps.
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <div>
        <h1>5-Day USA City Weather Forecast</h1>
        <p>To receive a 5-day forecast of a USA city, enter the name of the city in the search box below:</p>
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input
            placeholder="Enter the name of a USA city"
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange} />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Search</button>
          </span>
        </form>
      </div>
    );
  }
}

//Links action with redux
function mapDispatchToProps(dispatch) {
  //Makes sure the action flows through the middleware and into the reducers
  return bindActionCreators({ fetchWeather }, dispatch);
}

//mapDispatchToProps needs to be the second argument. So, we use null to say that no state is being used.
export default connect(null, mapDispatchToProps)(SearchBar);
