import React from "react";
import Image from "./Image/Image";
import "./ImagesList.css";

export default function ImagesList({ images }) {
  return (
    <section className="images-list">
      {images.map((img) => (
        <Image key={img.id} image={img} />
      ))}
    </section>
  );
}
