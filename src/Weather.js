import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, getWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    getWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      imgUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (weatherData.ready === true) {
    return (
      <div className="Weather">
        <form>
          <input type="search" placeholder="Enter city here..." />
          <input type="submit" value="Search" />
        </form>
        <h1>{props.defaultCity}</h1>
        <ul>
          <li>Last updated:</li>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
        </ul>
        <div className="row">
          <div className="col-6">
            <span className="temperature">{weatherData.temperature}</span>
            <span className="unit">°C</span>
            <img src={weatherData.imgUrl} alt={weatherData.description} />
          </div>
          <div className="col-6">
            <ul>
              <li className="text-capitalize">{weatherData.description}</li>
              <li>Wind: {weatherData.wind} m/s</li>
              <li>Humidity: {weatherData.humidity}%</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "6a119ce5ad60b9883a83a56308bcd89c";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
