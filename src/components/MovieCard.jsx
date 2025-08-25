import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/favoritesSlice";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.list);
  const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);

  return (
    <div className="movie-card">
      <h3>{movie.Title}</h3>
      <img src={movie.Poster} alt={movie.Title} />
      <div className="movie-card-actions">
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
    </div>
  );
};

export default MovieCard;