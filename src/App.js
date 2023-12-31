import React, { useEffect, useState } from "react";
// 338fa8b

import SearchIcon from "./search.svg";
import "./App.css";
import { MovieCard } from "./MovieCard";
const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=338fa8b";
export const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState([]);
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("spiderman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="search for movies"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img src={SearchIcon} alt="search" onClick={() => searchMovies(search)} />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};
