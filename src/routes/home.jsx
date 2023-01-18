import GenreCard from "../components/genre-card";
import { genres } from "../genres.json";

const Home = () => {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-4 py-6">
      {genres.map((genre) => (
        <GenreCard genre={genre} key={genre.id} />
      ))}
    </div>
  );
};

export default Home;
