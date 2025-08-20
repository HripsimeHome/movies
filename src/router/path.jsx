import SearchPage from "../pages/SearchPage";
import HomePage from "../pages/HomePage";
import ShowsPage from "../pages/ShowsPage";
import MoviesPage from "../pages/MoviesPage";
import GenresPage from "../pages/GenresPage";
import WatchLaterPage from "../pages/WatchLaterPage";
import ErrorPage from "../pages/ErrorPage";

// Paths
export const homePagePath = "/";
export const searchPagePath = "search";
export const showsPagePath = "shows";
export const moviesPagePath = "movies";
export const genresPagePath = "genres";
export const watchLaterPage = "watchLater";

// Routes
export const routes = [
  {
    path: homePagePath,
    component: <HomePage />,
  },
  {
    path: searchPagePath,
    component: <SearchPage />,
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
    path: watchLaterPage,
    component: <WatchLaterPage />,
  },
  {
    path: "*",
    component: <ErrorPage />,
  },
];
