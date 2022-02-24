import React from "react";

export default function Weather() {
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
          6°C
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
