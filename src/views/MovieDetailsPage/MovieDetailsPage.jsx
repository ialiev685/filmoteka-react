import { useParams, useHistory, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { fetchMovieId } from "../../services";
import { ItemMovieDetalis } from "../../components/ItemMovieDetalis";
import { Button } from "react-bootstrap";

import "./MovieDetailsPage.scss";

export const MovieDetailsPage = () => {
  const [movieDetalis, setMovieDetalis] = useState(null);

  const history = useHistory();
  const location = useLocation();

  const toReturn = location.state?.from || { pathname: "/" };

  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieId(movieId).then((response) => setMovieDetalis(response));
  }, [movieId]);

  const goBack = () => {
    history.push(toReturn);
  };

  return (
    <>
      <Button
        variant="primary"
        type="button"
        onClick={goBack}
        className="button-return"
      >
        Go back
      </Button>
      {movieDetalis && (
        <ItemMovieDetalis movieDetalis={movieDetalis} toReturn={toReturn} />
      )}
    </>
  );
};
