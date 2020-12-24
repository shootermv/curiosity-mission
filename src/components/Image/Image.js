import React from "react";
import "./Image.css";

export default function Image({ image }) {
  const {img_src: src, camera: {name: camera}, earth_date, rover: {name: vehicle}} = image;
  return (
    <figure className="img--wrap" >
      <img src={src} className="img" />
      <figcaption>
        <div>camera: {camera}</div>
        <div>date: {earth_date}</div>
        <div>vehicle: {vehicle}</div>
      </figcaption>
    </figure>
  );
}
