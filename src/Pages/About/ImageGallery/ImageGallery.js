import React, { useRef } from "react";
import useFetch from "use-http";
import { format } from "date-fns";
import { Loader } from "../../../components/Loader/Loader";
import "./ImageGallery.css";

export default function ImageGallery() {
  const url = process.env.REACT_APP_NASA_PHOTO_URL;
  const key = process.env.REACT_APP_NASA_KEY;
  // load only first page 25 images
  const { data, loading, error } = useFetch(
    `${url}?earth_date=${format(
      new Date("2020-07-14"),
      "yyyy-MM-dd"
    )}&api_key=${key}&page=${1}`,
    {},
    []
  );
  const ref = useRef(null);
  return (
    <section className="img-gallery">
      <button
        className="forward-button"
        onClick={() => {
          if (ref.current) {
            let width = ref.current.parentNode.offsetWidth;
            let currentScroll = ref.current.scrollLeft + width;
            ref.current.scroll({
              left: currentScroll,
              top: 0,
              behavior: "smooth",
            });
          }
        }}
      >
        &gt;
      </button>
      <h2>Curiosity rover images from today</h2>

      <ul ref={ref}>
        {error && <div className="error">Some error occurred</div>}
        {loading && <Loader />}
        {!loading &&
          data?.photos &&
          data?.photos.map((img) => (
            <li key={img.id}>
              <figure>
                <img src={img.img_src} alt="Trulli" />
              </figure>
            </li>
          ))}
      </ul>
    </section>
  );
}
