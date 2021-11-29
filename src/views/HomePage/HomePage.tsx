import React, { useState, useEffect } from "react";

import { fetchTrendingMovies } from "../../services/ApiMovies";
import { ListMovies } from "../../components/ListMovies";
import "./HomePage.scss";

export const HomePage = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchTrendingMovies()
      .then((response) => setTrendMovies(response.results))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div className="list-movies">
      <h1>Trending today</h1>

      {trendMovies && <ListMovies listMovies={trendMovies} />}
      {error && <p>{error}</p>}
    </div>
  );
};
