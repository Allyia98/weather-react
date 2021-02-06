import React, { useState } from "react";
import axios from "axios";

import "./Forecast.css";

export default function WeatherForecast(props) {
  const[loaded, setLoaded] = useState(false);
  const[forecast, setForecast] = useState(null);

  function handleForecastResponse(response){
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded) {
    return (<footer>
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
            {Math.round(forecast.list[0].main.temp)}°
            <br />
            <small> Feels like {Math.round(forecast.list[0].main.feels_like)}° </small>
          </div>
          <div className="col">
            16:00 <br />
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              className="rounded-circle"
              alt="round"
            />
            <br />
            {Math.round(forecast.list[1].main.temp)}°
            <br />
            <small> Feels like {Math.round(forecast.list[1].main.feels_like)}° </small>
          </div>
          <div className="col">
            16:00 <br />
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              className="rounded-circle"
              alt="round"
            />
            <br />
            {Math.round(forecast.list[2].main.temp)}°
            <br />
            <small> Feels like {Math.round(forecast.list[2].main.feels_like)}° </small>
          </div>
          <div className="col">
            16:00 <br />
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              className="rounded-circle"
              alt="round"
            />
            <br />
            {Math.round(forecast.list[3].main.temp)}°
            <br />
            <small> Feels like {Math.round(forecast.list[3].main.feels_like)}° </small>
          </div>
        </div>
      </section>
    </footer>
    );
} else{
    let apiKey = `5dfec6742de51df1fd7da24d6310c8b4`;
    let url = `http://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);
  return null;  
  }
}
