import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

    renderWeather(cityData){
        const { lat, lon } = cityData.city.coord;

        const temps = cityData.list.map( (weather, idx) => {
            return {
                x: idx, 
                y: weather.main.temp - 275.15,
            }
        });
        const humidities = cityData.list.map( (weather, idx) => {
            return {
                x: idx, 
                y: weather.main.humidity
            }
        });
        const pressures = cityData.list.map( (weather, idx) => {
            return {
                x: idx, 
                y: weather.main.pressure
            }
        });        

        return(
            <tr key={ name }>
                <td className="row">
                    <GoogleMap lat={ lat } lon={ lon }/>
                </td>
                <td className="">
                    <Chart width={ 180 } height={ 150 } data={ temps } unit='°C' color='red'/>
                </td>
                <td className="">
                    <Chart width={ 180 } height={ 150 } data={ humidities } unit='%' color='blue'/>
                </td>
                <td className="">
                    <Chart width={ 180 } height={ 150 } data={ pressures } unit='hPa' color='gray'/>
                </td>
            </tr>
        );
    }
    render(){

        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Humidity</th>
                        <th>Pressure</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.weather.map(this.renderWeather) }
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);