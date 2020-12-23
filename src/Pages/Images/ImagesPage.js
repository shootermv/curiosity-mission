import React, { useState, useEffect } from "react";
import useFetch from "use-http";
import { Loader } from "../../components/Loader/Loader";
import { Pagination } from "../../components/Pagination/Pagination";
import "./ImagesPage.css";
import ImagesList from "./List/ImagesList";

export default function ImagesPage() {
  const url = process.env.REACT_APP_NASA_PHOTO_URL;
  const key = process.env.REACT_APP_NASA_KEY;
  const [page, setPage] = useState(1);
  //const [date, setDate] = useState(1);
  const { data, loading, error, get } = useFetch(
    `${url}?earth_date=2020-07-14&api_key=${key}&page=${page}`,
    {},
    [page]
  );

  return <div className="images-page">
    <header>
    here will come filter
    </header>
    {error && <div className="error">Some error occurred</div>}
    {loading && <Loader/>}
    {!loading &&  <ImagesList images={data?.photos}/>}
    <Pagination currentPage={page} onPgClicked={pg => {setPage(pg)}}/>
  </div>;
}
