import React, {useState} from "react";
import useFetch from "use-http";
import { Pagination } from "../../components/Pagination/Pagination";
import "./WeatherPage.css";
import WeatherItemsList from "./WeatherList/WeatherList";
import data from "./smapleData.json"

function sortData(data, filter) {
   return data;
}

export default function WeatherPage() {
  const url = process.env.REACT_APP_NASA_WEATHER_URL;
  const key = process.env.REACT_APP_NASA_KEY;
  const [currentFilter, setCurrentFilter] = useState("All");
  /*const { data, loading, error } = useFetch(
    `${url}?api_key=${key}&feedtype=json&ver=1.0`,
    {},
    []
  );*/
  return (
    <div className="weather-page">
      <header>
        <h1>Mars Weather</h1>

        <label>Sort By:</label>
        <select>
          <option value="All">All</option>
          <option value="Temperature">Temperature</option>
          <option value="Wind">Wind</option>
          <option value="Wind">Pressure</option>
        </select>
      </header>
      <div className="list-wrap">
        {/*error && <div className="error">Some error occurred</div>*/}
        {/*loading && <Loader />*/}
        <WeatherItemsList items={sortData(data, currentFilter)} />
       </div>

    </div>
  );
}
