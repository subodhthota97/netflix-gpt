import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/**
       * Main Container for main video section
       *  - Video background
       *  - Video Title
       * Secondary Container
       *  - Movie List * n rows
       *    - cards of movies * n
       *
       */}
    </div>
  );
};

export default Browse;
