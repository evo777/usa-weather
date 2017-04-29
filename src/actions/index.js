import axios from 'axios';

const API_KEY = '4d95ca29c1b05ad405356a407a5a2c9a';
const ROOT_URL = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;

  //The url that is passed into axios.get is the api URL of openweathermap
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request //Returning the promise as the payload
  };
}