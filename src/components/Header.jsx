import React, { useEffect, useState } from "react";
import tmdbApi from "../api/tmdbApi";
const Header = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    tmdbApi.moviePopular().then((response) => setMovies(response.results));
  }, []);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <header className="w-full h-[550px] lg:h-[700px]">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] lg:h-[700px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="my-4">
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
              Play
            </button>
            <button className="border  border-gray-300 py-2 px-5 ml-4">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Released: {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[50%] lg:max-w-[60%] xl:max-w-[50%] text-gray-200">
            {truncateString(movie?.overview, 250)}
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
