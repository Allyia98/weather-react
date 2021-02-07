import React from "react";

export default function WeatherForecastPreview(props){
    let icon = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
    let description = props.data.weather[0].description;

    function hours(){
        let date = new Date(props.data.dt*1000)
        let hours = date.getHours()
        return`${hours}:00`;
    }

    function temperature(){
        let temperature = Math.round(props.data.main.temp)
        return `${temperature}°`;
    }

    function feels(){
        let feelsLike = Math.round(props.data.main.feels_like)
        return `Feels like ${feelsLike}°`;
    }
    return (
        <div className="WeatherForecastPreview col">
            {hours()} 
            <br />
            <img
              src={icon}
              class="rounded-circle"
              alt={description}
            /> 
            <br />
            {temperature()}
            <br />
            <small> {feels()} </small>
        </div>
    );
}