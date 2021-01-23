import React from "react";

import "./Forecast.css";

export default function Forecast() {
  return (
    <footer>
      <h5>Forecast:</h5>
      <section className="hourly-forecast">
        <div className="row weather-forecast" id="forecast">
          <div className="col">
            16:00 <br />
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              class="rounded-circle"
              alt="round"
            />
            <br />
            5°
            <br />
            <small> Feels like 6° </small>
          </div>
          <div className="col">
            16:00 <br />
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              className="rounded-circle"
              alt="round"
            />
            <br />
            5°
            <br />
            <small> Feels like 6° </small>
          </div>
          <div className="col">
            16:00 <br />
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              className="rounded-circle"
              alt="round"
            />
            <br />
            5°
            <br />
            <small> Feels like 6° </small>
          </div>
          <div className="col">
            16:00 <br />
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              className="rounded-circle"
              alt="round"
            />
            <br />
            5°
            <br />
            <small> Feels like 6° </small>
          </div>
        </div>
      </section>
    </footer>
  );
}
