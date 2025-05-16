import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../api/movieAPi"; // Importera API-funktionen

const MovieDetails = () => {
  const { id } = useParams(); // Hämta filmens ID från URL:en
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      setError(null); // Återställ tidigare fel
      try {
        const movieData = await fetchMovieDetails(id);
        setMovie(movieData);
      } catch (err) {
        setError("Kunde inte hämta filminfo. Försök igen senare.");
      }
    };

    getMovieDetails();
  }, [id]); // Hämta filminfo när id ändras

  if (error) {
    return <p>{error}</p>;
  }

  if (!movie) {
    return <p>Laddar film...</p>;
  }

  return (
    <div>
      <h1>{movie.Title}</h1>
      <p>{movie.Year}</p>
      <p>{movie.Genre}</p>
      <p>{movie.Plot}</p>
      <img src={movie.Poster} alt={movie.Title} />
    </div>
  );
};

export default MovieDetails;
