import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openaiClient from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const selectedLanguage = useSelector((state) => state.config.lang);
  const searchTextRef = useRef(null);
  const dispatch = useDispatch();

  const handleGptSearchClick = async () => {
    const searchText = searchTextRef.current.value;
    const gptQuery =
      "Act as a Movie Recommendation System and suggest some movies for the query: " +
      searchText +
      ". Only give me names of five movies, comma seperated like the example result given ahead." +
      "Example result: Gadar, Sholay, Don, Bahubali, Koi Mil Gaya";
    const gptResults = await openaiClient.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!gptResults.choices) {
      // TODO: Error handling
    }
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    // for each movie call the tmdb api and find results
    const promiseArray = gptMovies.map(movie => searchMovieTmdb(movie))

    // concurrent reads
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);

    dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}));

  };

  // search movie in tmdb based on string
  const searchMovieTmdb = async (movieName) => {
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
    const json = await data.json();
    return json.results;
  }

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="bg-black w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchTextRef}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[selectedLanguage].gptSearchHolder}
        ></input>
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[selectedLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
