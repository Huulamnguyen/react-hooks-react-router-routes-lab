import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => 
        <>
          <h2>Actor Name: {actor.name}</h2>
          {actor.movies.map(movie => <li>{movie}</li>)}
        </>)}
    </div>
)}

export default Actors;
