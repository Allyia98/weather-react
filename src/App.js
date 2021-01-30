import React from "react";
import Search from "./Search";
import Temperature from "./Temperature";
import Forecast from "./Forecast";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container"> 
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <p className="units">
            <a href="foo" id="celcius-link" class="celActive">
              {" "}
              °C{" "}
            </a>{" "}
            |
            <a href="foo" id="fahrenheit-link" class="fahActive">
              {" "}
              °F{" "}
            </a>
            <a href="foo" id="curr-location" class="">
              {" "}
              📍{" "}
            </a>
          </p>
          <Search />
          <br />
          <Temperature defaultCity="Toronto"/>
          <Forecast />
        </div>
        <small className="source-code">
          <a href="https://github.com/Allyia98/weather-react" target="_blank" rel="noreferrer">
            {" "}
            Open Source Code
          </a>{" "}
          by Allyia Rahim
        </small>
      </div>
      </div>
    </div>
  );
}
