import React from "react";
import "./Image.css";

export default function Image ({image}) {
  return <img src={image.img_src} className="img"/>;
}