import React from "react";

import "./Temperature.css";

export default function Temperature() {
  return (
    <div className="row">
      <div className="col-4">
        <ul className="high-low">
          <li id="high-temp"> High: 10° </li>
          <li id="low-temp"> Low: 5°</li>
        </ul>
      </div>

      <div className="col-4">
        <section className="header">
          <h1 id="current-city">Toronto</h1>
          <p id="updated-date">
            Last updated: Sunday, 18:05 <br /> <span id="date"></span>
          </p>
        </section>

        <section className="temperature">
          <h1 id="curr-temp"> 12°C</h1>
          <small>
            <span id="feels-like"> Feels like 10°</span>
          </small>
        </section>
      </div>

      <div className="col-4">
        <ul className="additional-info">
          <li>
            {" "}
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              id="icon"
            />{" "}
          </li>
          <li id="temp-description"> Rain </li>
          <li id="humidity"> Humidity: 10%</li>
          <li id="wind"> Wind: 5km/hr</li>
          <li id="percipitation"></li>
        </ul>
      </div>
    </div>
  );
}
