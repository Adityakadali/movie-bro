import MovieCard from "../components/movie-card";
import { genres } from "../genres.json";

const Home = () => {
  return (
    <main className="container mx-auto py-4">
      <div className="flex flex-wrap gap-x-6 gap-y-4">
        {genres.map((genre) => (
          <MovieCard genre={genre} />
        ))}
      </div>
    </main>
  );
};

export default Home;
