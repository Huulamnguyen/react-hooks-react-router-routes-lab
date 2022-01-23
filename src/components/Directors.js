import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
        {directors.map(director => 
            <>
              <h2>Director Name: {director.name}</h2>
              <h2>Movies: </h2>
              <ul>
              {director.movies.map(movie => <li>{movie}</li>)}
              </ul>
            </>
          )}
    </div>
)}

export default Directors;
