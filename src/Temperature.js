import React, { useState } from "react";

export default function Temperature(props) {
  const [units, setUnits] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnits("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnits("celsius");
  }

  function calculateFahrenheit() {
    return Math.round((props.celsius * 9) / 5 + 32);
  }

  if (units === "celsius") {
    return (
      <div className="Temperature">
        <span className="temperature">{props.celsius}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="Temperature">
        <span className="temperature">{calculateFahrenheit()}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
