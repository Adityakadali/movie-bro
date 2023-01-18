import { getMovies } from "../utils/get-movies";
import { useLoaderData } from "react-router-dom";

export const loader = async ({ params }) => {
  return getMovies(params.genreID);
};

export default function Movies() {
  const movies = useLoaderData();

  return <h1>Movie </h1>;
}
