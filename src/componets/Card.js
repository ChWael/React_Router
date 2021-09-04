import React from "react";
import { Link } from "react-router-dom";
import Movie from "./Movie";



function Card({ show }) {
  const rate = [];
  const rest = [];
  rate.length = show.rate;
  rest.length = 5 - show.rate;

  return (
    <div className="show-card">
      <Link to = { `/Overview/${show.id}` } key = {show.id} > <img className="Pic" src = {show.img} alt="Show" /> </Link>
      <div className="show-info">
        <h5> {show.title} </h5>
        {rate
          .fill(<i style={{ color: "black" }} class="fas fa-star"></i>)
          .concat(rest.fill(<i class="far fa-star"></i>))}
        <div className="description">
          <h5> {show.description} </h5>
        </div>
      </div>
    </div>
  );
}

export default Card;
