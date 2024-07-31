import "./App.css";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";

import MovieCard from "./components/MovieCard";

const apiUrl = process.env.REACT_APP_API_URL;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("alpha");
  }, []);

  return (
    <div className="app">
      <h1>Movie Scout</h1>
      <div className="search">
        <input
          type="text"
          value={searchTitle}
          placeholder="Search for movies"
          onChange={(e) => setSearchTitle(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") searchMovies(searchTitle);
          }}
          required
        />
        <FaSearch
          className="text-lg text-[#ff512f] cursor-pointer hover:text-[#dd2476]"
          onClick={() => searchMovies(searchTitle)}
        />
      </div>

      <div className="container">
        {movies !== undefined && movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.imdbID} film={movie} />)
        ) : (
          <div className="empty">
            <h2>No Movies found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
