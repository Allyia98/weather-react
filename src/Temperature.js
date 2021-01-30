import React, { useState } from "react";
import axios from "axios";

import "./Temperature.css";

export default function Temperature(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response){
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "http://openweathermap.org/img/wn/10d@2x.png",
      date: "Sunday, 08:00",
      high: response.data.main.temp_max,
      low: response.data.main.temp_min,
      feels: response.data.main.feels_like
    })
  }

  if(weatherData.ready) {
  return (
    <div className="row">
      <div className="col-4">
        <ul className="high-low">
          <li id="high-temp"> High: {weatherData.high}° </li>
          <li id="low-temp"> Low: {weatherData.low}°</li>
        </ul>
      </div>

      <div className="col-4">
        <section className="header">
          <h1 id="current-city">{weatherData.city}</h1>
          <p id="updated-date">
            Last updated: {weatherData.date} <br /> <span id="date"></span>
          </p>
        </section>

        <section className="temperature">
          <h1 id="curr-temp"> {Math.round(weatherData.temperature)}°C</h1> {/* check */}
          <small>
            <span id="feels-like"> Feels like {Math.round(weatherData.feels)}°</span>
          </small>
        </section>
      </div>

      <div className="col-4">
        <ul className="additional-info">
          <li>
            {" "}
            <img
              src={weatherData.iconUrl}
              id="icon"
              alt={weatherData.description}
            />{" "}
          </li>
          <li className="text-capitalize" id="temp-description"> {weatherData.description} </li>
          <li id="humidity"> Humidity: {weatherData.humidity}%</li>
          <li id="wind"> Wind: {Math.round(weatherData.wind)}km/hr</li>
          <li id="percipitation"></li>
        </ul>
      </div>
    </div>
  );
  } else {
      const apiKey = "5dfec6742de51df1fd7da24d6310c8b4";
      let apiUrl =  `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);

      return "Loading...";
  }




}
