import React from "react";
import "./App.css";

export default function Weather(props) {
  if (props.city !== "") {
    return (
      <div className="details">
        <h3>The weather in {props.city}</h3>
        <ul>
          <li>
            <img src={props.icon} alt="" />
            <li> {props.description}</li>
            <li>Temp: {props.temperature}°C </li>
            <li>Humiditiy: {props.humiditiy}</li>
            <li>Wind: {props.wind}km/h</li>
          </li>
        </ul>
      </div>
    );
  } else {
    return "";
  }
}
