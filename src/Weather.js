import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  function handleResponse(response) {
    console.log(response.data.main.temp);
  }

  const apiKey = "6a119ce5ad60b9883a83a56308bcd89c";
  let city = "Vienna";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="Weather">
      <form>
        <input type="search" placeholder="Enter city here..." />
        <input type="submit" value="Search" />
      </form>
      <h1>Vienna</h1>
      <ul>
        <li>Last updated:</li>
        <li>Sunday, 19:01</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <span className="temperature">6</span>
          <span className="unit">°C</span>
          <img src="http://openweathermap.org/img/wn/02n@2x.png" alt="cloudy" />
        </div>
        <div className="col-6">
          <ul>
            <li>Few clouds</li>
            <li>Wind: 0 m/s</li>
            <li>Humidity: 52%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
