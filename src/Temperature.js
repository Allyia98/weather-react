import React from "react";
import FormattedDate from "./FormattedDate";

import "./Temperature.css";

export default function Temperature(props) {
  return (
    <div className="row">
      <div className="col-4">
        <ul className="high-low">
          <li id="high-temp"> High: {props.data.high}° </li>
          <li id="low-temp"> Low: {props.data.low}°</li>
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
          <h1 id="curr-temp"> {Math.round(props.data.temperature)}°C</h1> {/* check */}
          <small>
            <span id="feels-like"> Feels like {Math.round(props.data.feels)}°</span>
          </small>
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
