import axios from "axios";
export const getMovies = async (genreID) => {
  const { VITE_TMDB_API } = await import.meta.env;
  const { data } = await axios.get(
    "https://api.themoviedb.org/3/discover/movie",
    {
      params: {
        api_key: VITE_TMDB_API,
        with_genres: genreID,
        with_original_language: "en",
      },
    }
  );
  return data;
};
