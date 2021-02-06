import React from "react";
import Search from "./Search";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container"> 
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <Search defaultCity="Tokyo"/>
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
