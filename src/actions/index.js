import axios from 'axios';

const WEATHER_API_KEY = 'ee0098e80ea0c24f703c96584f5d6005';
const WEATHER_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${WEATHER_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type : FETCH_WEATHER,
    payload : request
  }
}