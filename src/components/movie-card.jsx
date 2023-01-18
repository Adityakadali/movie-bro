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
      <p className="text-white">
        Rating: {movie.vote_average}
        <span className="text-sm">⭐</span>
      </p>
      <p className="font-semibold text-white">{movie.original_title}</p>
    </div>
  );
};

export default MovieCard;
