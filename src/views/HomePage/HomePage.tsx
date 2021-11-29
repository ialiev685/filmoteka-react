import React, { useState, useEffect } from "react";

import { fetchTrendingMovies } from "../../services/ApiMovies";
import { ListMovies } from "../../components/ListMovies";

export const HomePage = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchTrendingMovies()
      .then((response) => setTrendMovies(response.results))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div>
      <h1>Trending today</h1>

      {trendMovies && <ListMovies listMovies={trendMovies} />}
      {error && <p>{error}</p>}
    </div>
  );
};
