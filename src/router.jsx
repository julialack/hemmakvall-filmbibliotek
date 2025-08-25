import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home"; // Startsidan
import MovieDetails from "./pages/MovieDetails"; // Filmsida
import Favorites from "./pages/Favorites"; // Favoritsida
import Layout from "./components/layout"; // Wrapper med navbar

// Här definieras alla routes (vägar)
const router = createBrowserRouter([
  {
    path: "/", // Startsidan
    element: <Layout />, // Layout innehåller navbar + aktuell sida
    children: [
      { path: "/", element: <Home /> }, // Home-sidan
      { path: "/movie/:id", element: <MovieDetails /> }, // Detaljsida för en film
      { path: "/favorites", element: <Favorites /> }, // Favoriter-sidan
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
