import { Link } from "react-router-dom";

const MovieCard = ({ genre }) => {
  return (
    <Link
      className="relative cursor-pointer overflow-hidden rounded shadow transition ease-in-out
                hover:scale-105 hover:transition hover:ease-in-out"
      to={`genres/${genre.id}`}
    >
      <img className="w-40" src={genre.image} alt={genre.name} />
      <div className="absolute inset-0 grid place-content-center bg-slate-900/60">
        <p className="text-center font-mono text-xl font-bold text-slate-100">
          {genre.name}
        </p>
      </div>
    </Link>
  );
};

export default MovieCard;
