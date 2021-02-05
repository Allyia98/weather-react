import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature (props){
    const [unit, setUnit] = useState("celsius");
    
    function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }

    function fahrenheit() {
        return (props.celsius * 9) / 5 + 32;
    }

    function fahrenheitFeels(){
        return (props.feels *9) /5 + 32;
    }



    if(unit === "celsius") {
    return(
            <div className="WeatherTemperature">
            <span className="temp"> {Math.round(props.celsius)}°</span>
            <span className="unit"> 
              C |{" "}
            <a href="/"  onClick={showFahrenheit}>
              F
            </a>
          </span>
          <br />
           <small>
            <span id="feels-like"> Feels like {Math.round(props.feels)}°</span>
          </small>
          </div>
        );
    } else {
        return(
            <div className="WeatherTemperature">
            <span className="temp"> {Math.round(fahrenheit())}°</span>
            <span className="unit"> 
            <a href="/" onClick={showCelsius}>
              C
            </a>
            {" "}
            | F
          </span>
           <br />
           <small>
            <span id="feels-like"> Feels like {Math.round(fahrenheitFeels())}°</span>
          </small>
          </div>
        );
        
    }
}