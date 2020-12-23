import React, { useState } from "react";
import useFetch from "use-http";
import { Pagination } from "../../components/Pagination/Pagination";
import "./WeatherPage.css";
import WeatherItemsList from "./WeatherList/WeatherList";
import data from "./sampleData.json";

function sortData(data, field) {
  return data.sort((a, b) => +a[field] > +b[field] ? 1 :-1);
}

export default function WeatherPage() {
  /* 
   im not using 'real' data here, 
   since i saw i manage to get allawys only to data points
   and i wanted to demonstrate sorting 
  */
  const [orderBy, setOrderBy] = useState("Temperature");

  return (
    <section className="weather-page">
      <header>
        <h1>Mars Weather</h1>

        <label>Sort By:</label>
        <select onChange={e => setOrderBy(e.target.value)} value={orderBy}>
          <option value="Temperature">Temperature</option>
          <option value="Wind">Wind</option>
          <option value="Pressure">Pressure</option>
        </select>
      </header>
      <div className="list-wrap">
        <WeatherItemsList items={sortData(data, orderBy)} />
      </div>
    </section>
  );
}
