import React, { useState } from "react";
import { fetchMovies } from "../api/movieAPi";
import MovieCard from "../components/MovieCard";
import Searchbar from "../components/SearchBar";
import "./Home.css";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setError(null);
    try {
      const movieList = await fetchMovies(searchTerm);
      setMovies(movieList);
    } catch (err) {
      setError("Kunde inte hämta filmer. Försök igen senare.");
    }
  };

  return (
    <div className="main-content">
      <h1>Välkommen till Hemmakvälls Filmbibliotek 🍿</h1>
      <Searchbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
      {error && <p>{error}</p>}
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;