import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestions = () => {
  const gpt = useSelector((state) => state.gpt);
  const { movieResults, movieNames } = gpt;
  if (!movieNames) {
    return;
  }

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-50">
      <div>
      {movieNames.map((movie, i) => (
        <MovieList key={movie} title={movie} movies={movieResults[i]} />
      ))}
      </div>
    </div>
  );
};

export default GPTMovieSuggestions;
