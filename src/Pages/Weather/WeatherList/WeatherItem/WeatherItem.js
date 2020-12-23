import React from "react";
//import "./WeatherItem.css";

export default function WeatherItem({ item }) {
  return (
    <div className="weather-item">
      {/*{Object.entries(item).map(([key, val]) => (
        <div className="entry" key={`${key}-${val}`}>
          <div>{key}</div>
          <div>{val}</div>
        </div>    
      ))}*/}
      <div className="entry">
        <div>Data Point: </div>
        <div>{item.DataPoint}</div>
      </div>
      <div className="entry">
        <div>Temperature: </div>
        <div>{item.Temperature}</div>
      </div>
      <div className="entry">
        <div>Wind: </div>
        <div>{item.Wind}</div>
      </div>
      <div className="entry">
        <div>Pressure: </div>
        <div>{item.Pressure}</div>
      </div>
    </div>
  );
}
