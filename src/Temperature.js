import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

import "./Temperature.css";

export default function Temperature(props) {
  return (
    <div className="row">
      <div className="col-4">
        <ul className="high-low">
          <li id="high-temp"> High: {Math.round(props.data.high)}° </li>
          <li id="low-temp"> Low: {Math.round(props.data.low)}°</li>
        </ul>
      </div>

      <div className="col-4">
        <section className="header">
          <h1 id="current-city">{props.data.city}</h1>
          <p id="updated-date">
            Last updated: <FormattedDate date={props.data.date}/> <br /> <span id="date"></span>
          </p>
        </section>
        
        <section className="temperature">
          <WeatherTemperature celsius={props.data.temperature} feels={props.data.feels}/> 
        </section>
      </div>

      <div className="col-4">
        <ul className="additional-info">
          <li>
            {" "}
            <img
              src={props.data.iconUrl}
              id="icon"
              alt={props.data.description}
            />{" "}
          </li>
          <li className="text-capitalize" id="temp-description"> {props.data.description} </li>
          <li id="humidity"> Humidity: {props.data.humidity}%</li>
          <li id="wind"> Wind: {Math.round(props.data.wind)}km/hr</li>
          <li id="percipitation"></li>
        </ul>
      </div>
    </div>
  );
}
