import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
