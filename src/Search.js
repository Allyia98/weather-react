import React, { useState } from "react";
import Temperature from "./Temperature";
import axios from "axios";

import"./Search.css";

export default function Forecast(props) {
  const[city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response){
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "http://openweathermap.org/img/wn/10d@2x.png",
      date: new Date(response.data.dt * 1000),
      high: response.data.main.temp_max,
      low: response.data.main.temp_min,
      feels: response.data.main.feels_like
    });
  }

  function handleSubmit(event){
    event.preventDefault();
    //search for a city
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search(){
      const apiKey = "5dfec6742de51df1fd7da24d6310c8b4";
      let apiUrl =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);
  }

if(weatherData.ready) {
  return (
    <div className="Weather"> 
    <form id="search-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter your city"
            className = "form-control"
            autocomplete="off"
            id="city-input"
            onChange={handleCityChange}
          />
        </div>

        <div className="col-3">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary w-100"
            id="search-btn"
          />
        </div>
      </div>
    </form>
    <br />
    <Temperature data={weatherData} />
   </div>
   );
 
  } else {
    search();
    return "Loading...";
  }
}
