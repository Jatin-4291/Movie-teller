import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Stars from "./hoverStars";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <Stars color="red" maxRating={10} onSetRating={setMovieRating} />
      <p>this movie is {movieRating} rated </p>
    </div>
  );
}
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
