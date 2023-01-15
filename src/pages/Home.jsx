import MovieCard from "../components/MovieCard";
import { genres } from "../genres.json";
const Home = () => {
  return (
    <div className="flex flex-wrap justify-between gap-4">
      {genres.map((genre) => (
        <MovieCard genre={genre} />
      ))}
    </div>
  );
};

export default Home;
