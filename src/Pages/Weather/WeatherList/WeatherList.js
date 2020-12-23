import React from "react";
import WeatherItem from "./WeatherItem/WeatherItem";
import "./WeatherList.css";

export default function WeatherItemsList({ items }) {
  return (
    <section className="weather-items-list">
      {items.map((itm) => (
        <WeatherItem key={itm.DataPoint} item={itm} />
      ))}
    </section>
  );
}
