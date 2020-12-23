import React from "react";
import useFetch from "use-http";
export default function WeatherPage() {
  const url = process.env.REACT_APP_NASA_WEATHER_URL;
  const key = process.env.REACT_APP_NASA_KEY;
  let page = 1;
  const { data, loading, error } = useFetch(
    `${url}/?api_key=${key}&feedtype=json&ver=1.0&page=${page}`,
    {},
    []
  );
  return <section>Weather Page here</section>;
}
