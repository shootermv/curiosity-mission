import React, { useState } from "react";
import useFetch from "use-http";
import { format } from "date-fns";
import DatePicker from "react-datepicker";

import { Loader } from "../../components/Loader/Loader";
import { Pagination } from "../../components/Pagination/Pagination";
import ImagesList from "./List/ImagesList";
import "./ImagesPage.css";

 
import "react-datepicker/dist/react-datepicker.css";

export default function ImagesPage() {
  const url = process.env.REACT_APP_NASA_PHOTO_URL;
  const key = process.env.REACT_APP_NASA_KEY;
  const [page, setPage] = useState(1);
  const [date, setDate] = useState(new Date('2020-07-14'));
 
  const {
    data,
    loading,
    error
  } = useFetch(`${url}?earth_date=${format(date, "yyyy-MM-dd")}&api_key=${key}&page=${page}`, {}, [
    page, date
  ]);

  return (
    <section className="images-page">
      <header>
        <h1>Mars Images By Date</h1>
        <label>Earth date:</label> <DatePicker selected={date} onChange={dat => setDate(dat)} />
      </header>
      <div className="list-wrap">
        {error && <div className="error">Some error occurred</div>}
        {loading && <Loader />}
        {!loading && <ImagesList images={data?.photos} />}
      </div>
      <Pagination
        currentPage={page}
        onPgClicked={(pg) => {
          setPage(pg);
        }}
      />
    </section>
  );
}
