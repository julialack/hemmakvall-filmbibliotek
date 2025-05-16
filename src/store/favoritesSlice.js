import { createSlice } from "@reduxjs/toolkit";

const loadFavoritesFromLocalStorage = () => {
  const storedFavorites = localStorage.getItem("favorites");
  return storedFavorites ? JSON.parse(storedFavorites) : [];
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    list: loadFavoritesFromLocalStorage(),
  },
  reducers: {
    addFavorite: (state, action) => {
      state.list.push(action.payload);
      localStorage.setItem("favorites", JSON.stringify(state.list));
    },
    removeFavorite: (state, action) => {
      state.list = state.list.filter((movie) => movie.imdbID !== action.payload);
      localStorage.setItem("favorites", JSON.stringify(state.list));
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
