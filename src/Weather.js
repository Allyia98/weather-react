import React from "react";
import axios from 'axios';
import Loader from "react-loader-spinner";

export default function Weather(props) {

    function handleResponse(response){
        alert(`The weather in ${response.data.name} is ${response.data.main.temp}°C`)
    }
    let apiKey = "5dfec6742de51df1fd7da24d6310c8b4";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return(
        <Loader
        type="Puff"
        color="#00BFFF"
        height={1000}
        width={1000}
        timeout={3000} //3 seconds
        />
    );
}