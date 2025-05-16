const API_KEY = "3d31a2ee";  // Ersätt med din faktiska API-nyckel
const BASE_URL = "http://www.omdbapi.com/";

export const fetchMovies = async (searchTerm) => {
  try {
    const response = await fetch(`${BASE_URL}?s=${searchTerm}&apikey=${API_KEY}`);
    const data = await response.json();
    if (data.Response === "True") {
      return data.Search; // Returnera lista med filmer
    } else {
      throw new Error(data.Error); // Hantera fel om API:t returnerar ett fel
    }
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await fetch(`${BASE_URL}?i=${movieId}&apikey=${API_KEY}`);
    const data = await response.json();
    if (data.Response === "True") {
      return data; // Returnera detaljerad filminfo
    } else {
      throw new Error(data.Error);
    }
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};
