import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Error Pages
import ErrorPage from "./error-page";
// routes
import Root from "./routes/root";
import Home from "./routes/home";
import Movies, { loader as movieLoader } from "./routes/movies";

// router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "genres/:genreID/:page",
        loader: movieLoader,
        element: <Movies />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
