import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, getWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    getWeatherData({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      imgId: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "6a119ce5ad60b9883a83a56308bcd89c";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleInput(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready === true) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            className="search"
            type="search"
            placeholder="Enter city here..."
            onChange={handleInput}
          />
          <input className="button" type="submit" value="Search" />
        </form>
        <CurrentWeather data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
