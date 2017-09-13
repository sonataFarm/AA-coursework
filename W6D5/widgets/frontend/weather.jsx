import React from 'react';
const API_KEY = '9ddf7ba389c7d9c46d9af8ca8e96ce43';

class Weather extends React.Component {
  constructor() {
    super();

    this.state = {
      fetched: false,
      county: null,
      weatherMain: null,
      temp: null,
      windSpeed: null
    };

    this.getGeolocation = this.getGeolocation.bind(this);
    this.getWeatherData = this.getWeatherData.bind(this);
    this.updateWeather = this.updateWeather.bind(this);
    this.handleDataError = this.handleDataError.bind(this);
  }

  componentDidMount() {
    // this.getGeolocation()
    // .then
    //   (this.getWeatherData)
    // .then
    //   (this.updateWeather)
    // .catch
    //   (this.handleDataError);

    this.getAndUpdateWeather();
  }

  async getAndUpdateWeather() {
    try {
      let position = await this.getGeolocation();
      let data = await this.getWeatherData(position);
      this.updateWeather(data);
    } catch(err) {
      console.log(err);
    }
  }

  getGeolocation() {
    return new Promise((resolve, reject) => {
      let succeed = (position) => {
        resolve(position);
      }

      let fail = () => {
        reject();
      }

      navigator.geolocation.getCurrentPosition(succeed, fail);
    });
  }

  getWeatherData(position) {
    let coords = this.parseCoords(position);
    let queryURL = this.generateQueryURL(coords);
    let request = new XMLHttpRequest();
    request.open('GET', queryURL, true);

    return new Promise((resolve, reject) => {
      request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
          let data = JSON.parse(request.responseText);
          resolve(data);
        } else {
          reject();
        }
      }

      request.send();
    });
  }

  updateWeather(data) {
    let county = data.name;
    let weatherMain = data.weather[0].main;
    let temp = data.main.temp;
    let windSpeed = data.wind.speed;
    let fetched = true;

    this.setState({fetched, county, weatherMain, temp, windSpeed})
  }

  parseCoords(position) {
    return {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    }
  }

  generateQueryURL(coords) {
    let path = 'http://api.openweathermap.org/data/2.5/weather';

    let queryTerms = [
      `lat=${coords.latitude}`,
      `lon=${coords.longitude}`,
      'units=imperial',
      `appid=${API_KEY}`
    ];

    let queryString = '?' + queryTerms.join('&');

    return path + queryString;
  }

  handleDataError(msg) {
    console.log(msg)
  }

  render() {
    let content = null;
    if (this.state.fetched) {
      content = (
        <div>
          <div className="weather-row">County: { this.state.county }</div>
          <div className="weather-row">{ this.state.weatherMain }</div>
          <div className="weather-row">Temperature: { this.state.temp } F</div>
          <div className="weather-row">Wind Speed: { this.state.windSpeed } mph</div>
        </div>
      );
    } else {
      content = <div className="weather-row">Fetching weather data...</div>
    }

    return (
      <div className="weather-container">
        { content }
      </div>
    );
  }
}
// query the geolocation
  // navigator.gelocation.getCurrentPosition();

// get latitude and longitude
  // position.coords.latitude, .longitude

// send an API call to weather
// store in an object
// state:
  // county name - obj.name
  // weather main - obj.weather[0].main
  // temperature - obj.main.temp
  // wind speed - obj.wind.speed

  // api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&units=imperial&appid={API_KEY}

  // api.openweathermap.org/data/2.5/weather?lat=37.7562023&lon=-122.4426637&units=imperial&appid=9ddf7ba389c7d9c46d9af8ca8e96ce43
// set weather and update
export default Weather;
