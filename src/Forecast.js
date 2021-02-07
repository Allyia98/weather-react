import React, { useState } from "react";
import WeatherForecastPreview from "./WeatherForecastPreview";
import axios from "axios";

import "./Forecast.css";

export default function WeatherForecast(props) {
  const[loaded, setLoaded] = useState(false);
  const[forecast, setForecast] = useState(null);

  function handleForecastResponse(response){
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (<footer>
      <h5>Forecast:</h5>
      <section className="hourly-forecast">
        <div className="row weather-forecast" id="forecast">
          {forecast.list.slice(0, 5).map(function(forecastItem){
            return<WeatherForecastPreview data={forecastItem}/>;
          })}
        </div>
      </section>
    </footer>
    );
} else{
    let apiKey = `5dfec6742de51df1fd7da24d6310c8b4`;
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);
  return null;  
  }
}
