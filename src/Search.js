import React from "react";

export default function Forecast() {
  return (
    <form id="search-form">
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter your city"
            className="form-control"
            autocomplete="off"
            id="city-input"
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
  );
}
