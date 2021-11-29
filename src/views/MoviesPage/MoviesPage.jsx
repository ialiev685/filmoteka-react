import React, { useState, useEffect } from "react";
import { fetchSearchMovie } from "../../services";
import { ListMovies } from "../../components/ListMovies";
import { useLocation, useHistory } from "react-router-dom";
import { FormControl, InputGroup, Button } from "react-bootstrap";
import "./MoviesPage.scss";

export const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [searchName, setSearchName] = useState("");
  const [findMovies, setFindMovies] = useState(null);
  const [error, setError] = useState("");

  const location = useLocation();
  const history = useHistory();

  const queryFromUrl = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    if (!query) return;

    fetchSearchMovie(query)
      .then((response) => setFindMovies(response.results))
      .catch((error) => setError(error.message));
  }, [query]);

  useEffect(() => {
    if (!queryFromUrl) return;
    setQuery(queryFromUrl);
  }, [queryFromUrl]);

  const handleChange = (e) => {
    setSearchName(e.target.value.trim());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(searchName);

    history.push({ ...location, search: `query=${searchName}` });
    setSearchName("");
  };

  return (
    <div className="serach-movies">
      <form className="form-control" onSubmit={handleSubmit}>
        <InputGroup>
          <FormControl
            type="text"
            onChange={handleChange}
            autoFocus
            autoComplete="off"
            placeholder="Search movies"
            value={searchName}
            className="form-control__input"
            aria-describedby="basic-addon2"
          />

          <Button
            className="form-control__button"
            type="submit"
            variant="success"
            id="basic-addon2"
          >
            search
          </Button>
        </InputGroup>
      </form>
      {findMovies && <ListMovies listMovies={findMovies} />}
      {findMovies?.length === 0 && <p>Not found</p>}
      {error && <p>{error}</p>}
    </div>
  );
};
