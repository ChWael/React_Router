import React from "react";
import Card from "./Card";


const Movie = ({ movie, search, rating }) => {
  return (
    <div className="Movie">
      {movie
        .filter(
          (el) =>
            el.title.toLowerCase().includes(search.toLowerCase().trim()) &&
            el.rate >= rating
        )
        .map((show, i) => (
          <Card key={i} show={show} />
        ))}
    </div>
  );
};

export default Movie;
