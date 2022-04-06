import React from "react";
import { ReactSkycon, SkyconType } from "react-skycons-extended";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": SkyconType.CLEAR_DAY,
    "01n": SkyconType.CLEAR_NIGHT,
    "02d": SkyconType.PARTLY_CLOUDY_DAY,
    "02n": SkyconType.PARTLY_CLOUDY_NIGHT,
    "03d": SkyconType.CLOUDY,
    "03n": SkyconType.CLOUDY,
    "04d": SkyconType.CLOUDY,
    "04n": SkyconType.CLOUDY,
    "09d": SkyconType.SHOWERS_DAY,
    "09n": SkyconType.SHOWERS_NIGHT,
    "10d": SkyconType.RAIN,
    "10n": SkyconType.RAIN,
    "11d": SkyconType.THUNDER_SHOWERS_DAY,
    "11n": SkyconType.THUNDER_SHOWERS_NIGHT,
    "13d": SkyconType.SNOW_SHOWERS_DAY,
    "13n": SkyconType.SNOW_SHOWERS_NIGHT,
    "50d": SkyconType.FOG,
    "50n": SkyconType.FOG,
  };

  return (
    <ReactSkycon
      icon={codeMapping[props.id]}
      color={"#ff895d"}
      size={props.size}
      animate={true}
    />
  );
}
