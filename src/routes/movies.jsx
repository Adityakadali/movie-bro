import { getMovies } from "../utils/get-movies";
import { Link, useLoaderData } from "react-router-dom";
import MovieCard from "../components/movie-card";

export const loader = async ({ params }) => {
  return getMovies(params.genreID, params.page);
};

export default function Movies() {
  const { data, genreID } = useLoaderData();
  const page = data.page;
  const movies = data.results;

  return (
    <>
      <div className="flex flex-wrap gap-4">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
      <Link
        className="rounded bg-slate-50 px-2 py-1"
        to={`/genres/${genreID}/${page + 1}`}
      >
        Page {page}
      </Link>
    </>
  );
}
