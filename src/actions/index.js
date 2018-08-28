import axios from 'axios';
import weather_key from '../../keys';

const API_KEY = weather_key;
const ROOT_URL = `https://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},br`;
    const request = axios.get(url);

    return{
        type: FETCH_WEATHER,
        payload: request
    };
}