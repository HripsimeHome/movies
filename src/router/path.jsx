import HomePage from "../pages/HomePage";
import ShowsPage from "../pages/ShowsPage";
import MoviesPage from "../pages/MoviesPage";
import GenresPage from "../pages/GenresPage";
import ErrorPage from "../pages/ErrorPage";

// Paths
export const homePagePath = "/";
export const showsPagePath = "shows";
export const moviesPagePath = "movies";
export const genresPagePath = "genres";

// Routes
export const routes = [
  {
    path: homePagePath,
    component: <HomePage />,
  },
  {
    path: showsPagePath,
    component: <ShowsPage />,
  },
  {
    path: moviesPagePath,
    component: <MoviesPage />,
  },
  {
    path: genresPagePath,
    component: <GenresPage />,
  },
  {
    path: "*",
    component: <ErrorPage />,
  },
];
