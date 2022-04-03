import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function max() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function min() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = props.data.dt * 1000;
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div className="WeatherForecastDay">
      <div className="Forecast-day">{day()}</div>
      <WeatherIcon id={props[0].weather[0].icon} size={40} />
      <span className="Forecast-min-temp">{min()}</span> |{" "}
      <span className="Forecast-max-temp">{max()}</span>
    </div>
  );
}
