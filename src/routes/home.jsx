import MovieCard from "../components/movie-card";
import { genres } from "../genres.json";

const Home = () => {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-4 py-6">
      {genres.map((genre) => (
        <MovieCard genre={genre} key={genre.id} />
      ))}
    </div>
  );
};

export default Home;
