import { getMovies } from "../utils/get-movies";
import { Link, useLoaderData } from "react-router-dom";
import MovieCard from "../components/movie-card";
import { genres } from "../genres.json";

export const loader = async ({ params }) => {
  return getMovies(params.genreID, params.page);
};

export default function Movies() {
  const { data, genreID } = useLoaderData();
  const page = data.page;
  const movies = data.results;
  const genre = genres.filter((genre) => genre.id == genreID);

  return (
    <>
      <div className="flex items-center justify-between pb-4">
        {genre.map((genre) => (
          <h1
            key={genre.id}
            className="text-3xl font-bold tracking-wider text-green-200"
          >
            {genre.name}
          </h1>
        ))}

        <Link
          className="rounded bg-green-200 px-2 py-1 text-sm font-semibold text-slate-800 shadow hover:scale-105 hover:transition hover:ease-in-out"
          to={`/genres/${genreID}/${page + 1}`}
        >
          Next Page
        </Link>
      </div>
      <div className="flex flex-wrap gap-4">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </>
  );
}
