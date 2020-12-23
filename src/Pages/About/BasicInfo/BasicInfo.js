import React from "react";
import { Link } from "react-router-dom";
import "./BasicInfo.css";
export default function BasicInfo() {
  return (
      <section className="basic-info">
        <h1>About the Mission</h1>
        <article>
          <figure>
            <img
              src="https://www.w3schools.com/tags/pic_trulli.jpg"
              alt="Trulli"
            />
            <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
          </figure>

          <div className="text">
            <div className="text-wrap">
              Trulli,safsafs - Trulli, Puglia, Italy. uglia, Italuglia,
              Italuglia, Italuglia, Ital Fig.1 dddd- Tasvafrulli, Puglia, Italy.
              uglia, Ital Trulli,Trulli, Puglia, Italy. uglia, Ital uglia, Ital
              uglia, Ital Fig.1 Trulli, Puglia, Italy.uglia, Italuglia,
              Italvuglia, Ital Trulli Trxcccc ulli, Puglia, Italy.uglia, Italv
              vuglia, Ital Fig.1 Trulli, Puglia, Italy. uglia, Italuglia,
              Italuglia, Italuglia, Ital ia, Italuglia, Ital uglia, Italuglia,
              Ital Trulli, -cxx Trulli, Puglia, Italy. uglia, Italuglia,
              Italuglia, Ital uglia, Italuglia, Ital Fig.1 - Trulli, Puglia,
              Italy. uglia, Italuglia, Italuglia, Ital Trulli, - Trulli, Puglia,
              Italy. uglia, Italuglia, Italuglia, Ital Fig.1 - Trulli, Puglia,
              Italy. uglia, Italuglia, Italuglia, Italuglia, Italuglia,
              Italuglia, Ital
            </div>
            <div className="links-wrap">
              <Link to="/weather">Weather</Link>
              <Link to="/images">Images</Link>
            </div>
          </div>
        </article>
      </section>
  );
}
