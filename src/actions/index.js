import axios from 'axios';
import { WEATHER_KEY } from '../../keys';

const API_KEY = WEATHER_KEY;
const ROOT_URL = `https://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},br`;
    const request = axios.get(url);

    console.log('Request: ', request);

    return{
        type: FETCH_WEATHER,
        payload: request
    };
}