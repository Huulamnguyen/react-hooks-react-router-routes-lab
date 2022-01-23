import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
        {movies.map(movie =>
        <>
          <h2>Title: {movie.title}</h2>
            <h3>Time: {movie.time}</h3>
            <h3>Genres:</h3>
            <ul>
              {movie.genres.map(genre => <li>{genre}</li>)}
            </ul>
        </>
        )}
      </div>    
  );
}

export default Movies;
