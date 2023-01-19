const MovieCard = ({ movie }) => {
  const { VITE_TMDB_IMAGEURI: posterURI } = import.meta.env;

  return (
    <div className="w-32">
      <div className="overflow-hidden rounded">
        <img
          className="w-full"
          src={`${posterURI}${movie.poster_path}`}
          alt=""
        />
      </div>
      <div className="px-2">
        <p className="mt-2 font-semibold text-slate-50">
          {movie.vote_average} / 10
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
