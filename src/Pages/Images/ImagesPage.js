import React from "react";
import useFetch from "use-http";

export default function ImagesPage() {
  const url = process.env.REACT_APP_NASA_PHOTO_URL;
  const key = process.env.REACT_APP_NASA_KEY;
  let page = 1;
  const { data, loading, error } = useFetch(
    `${url}?earth_date=2020-07-14&api_key=${key}&page=${page}`,
    {},
    []
  );
  return <section>Images Page here {data?.photos.length}</section>;
}
