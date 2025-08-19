import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";

// Paths
export const homePagePath = "/";

// Routes

export const routes = [
  {
    path: homePagePath,
    component: <HomePage />,
  },
  {
    path: "*",
    component: <ErrorPage />,
  },
];
