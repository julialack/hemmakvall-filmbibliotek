import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/favoritesSlice";
import "./MovieCard.css"; // Importera CSS-filen


const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.list);
  const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);

  return (
    <div className="movie-card">
      <h3>{movie.Title}</h3>
      <img src={movie.Poster} alt={movie.Title} />
      {isFavorite ? (
        <button onClick={() => dispatch(removeFavorite(movie.imdbID))}>
          ❌ Ta bort från favoriter
        </button>
      ) : (
        <button onClick={() => dispatch(addFavorite(movie))}>
          ⭐ Lägg till i favoriter
        </button>
      )}
    </div>
  );
};

export default MovieCard;
