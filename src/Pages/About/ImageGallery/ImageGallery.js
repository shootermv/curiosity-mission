import React from "react";
import "./ImageGallery.css";
export default function ImageGallery() {
  return (
    <section className="img-gallery">
      <h2>Curiosity rover images from today</h2>
      <ul>
        {[1, 2, 3, 4, 5].map((num) => (
          <li key={num}>
            <figure>
              <img
                src="https://www.w3schools.com/tags/pic_trulli.jpg"
                alt="Trulli"
              />
            </figure>
          </li>
        ))}
        <button className="forward-button">&gt;</button>
      </ul>
    </section>
  );
}
