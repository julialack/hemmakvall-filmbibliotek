import React, { useState } from "react";
import { fetchMovies } from "../api/movieAPi"; // Importera API-funktionen
import MovieCard from "../components/MovieCard"; // Importera MovieCard-komponenten
import Searchbar from "../components/SearchBar"; // Importera Searchbar-komponenten
import "./Home.css"; 

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setError(null); // Återställ eventuella tidigare fel
    try {
      const movieList = await fetchMovies(searchTerm);
      setMovies(movieList);
    } catch (err) {
      setError("Kunde inte hämta filmer. Försök igen senare.");
    }
  };

  return (
    <div>
      <h1>Välkommen till Hemmakvälls Filmbibliotek 🍿</h1>
      <input
        type="text"
        placeholder="Sök filmer..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Sök</button>

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

