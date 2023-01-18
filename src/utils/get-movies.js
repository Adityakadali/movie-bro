import axios from "axios";
export const getMovies = async (genreID, page) => {
  const { VITE_TMDB_API } = import.meta.env;
  const pageNumber = typeof page !== "undefined" ? page : 1;
  const { data } = await axios.get(
    "https://api.themoviedb.org/3/discover/movie",
    {
      params: {
        api_key: VITE_TMDB_API,
        with_genres: genreID,
        with_original_language: "en",
        page: pageNumber,
      },
    }
  );
  return { data, genreID };
};
