import React from "react";
import Image from "../../../components/Image";
import "./ImagesList.css";

export default function ImagesList({ images }) {
  if (images.length === 0) return <div className="error">Looks Like This Page Does Not Exist...</div>
  return (
    <section className="images-list">
      {images.map((img) => (
        <Image key={img.id} image={img} />
      ))}
    </section>
  );
}
