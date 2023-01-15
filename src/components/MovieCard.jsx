const MovieCard = ({ genre }) => {
  return (
    <div
      className="relative overflow-hidden rounded shadow transition ease-in-out 
                hover:scale-105 hover:transition hover:ease-in-out"
      key={genre.id}
    >
      <img className="w-40" src={genre.image} alt={genre.name} />
      <div className="absolute inset-0 grid place-content-center bg-slate-900/60">
        <p className="text-center font-mono text-xl font-bold text-white">
          {genre.name}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
