import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';
import _ from 'lodash';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const cityList = cityData.list;
    const temperature = _.map(cityList.map(weather => weather.main.temp), (temp) => temp * 9/5 - 459.67);
    const humidity = cityList.map(weather => weather.main.humidity);
    const pressure = cityList.map(weather => weather.main.pressure);
    const { lon, lat } = cityData.city.coord;
    return (
      <tr key={ name }>
        <td><GoogleMap lon={ lon } lat={ lat }/></td>
        <td><Chart data={ temperature } color="orange" units="F"/></td>
        <td><Chart data={ humidity } color="blue" units="hPa"/></td>
        <td><Chart data={ pressure } color="red" units="%"/></td>
      </tr>
    )
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
        <tr>
          <th>City</th>
          <th>Temperature (F)</th>
          <th>Pressure (hPa)</th>
          <th>Humidity (%)</th>
        </tr>
        </thead>
        <tbody>
        { this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }) {
  return { weather }
}

export default connect(mapStateToProps)(WeatherList);