import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  const apiKey = "6a119ce5ad60b9883a83a56308bcd89c";
  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showForecast);
  return (
    <div className="WeatherForecast">
      <div classNAme="row">
        <div className="col">
          <div className="Forecast-day">Thu</div>
          <WeatherIcon id="03d" size={40} />
          <span className="Forecast-min-temp">10°</span> |{" "}
          <span className="Forecast-max-temp">19°</span>
        </div>
      </div>
    </div>
  );
}
