import axios from 'axios';

const API_KEY = '4d95ca29c1b05ad405356a407a5a2c9a';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  var url = `${ROOT_URL}?q={city},us`;

  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}