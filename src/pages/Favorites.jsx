import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.list);

  return (
    <div>
      <h1>Mina Favoriter</h1>
      {favorites.length > 0 ? (
        <div>
          {favorites.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <p>Du har inga favoriter ännu.</p>
      )}
    </div>
  );
};

export default Favorites;
