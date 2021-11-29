import { useParams, useHistory, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { fetchMovieId } from "../../services";
import { ItemMovieDetalis } from "../../components/ItemMovieDetalis";
import { Button } from "react-bootstrap";
import { Tfrom } from "../../types";
import { IParams } from "../../types";

import "./MovieDetailsPage.scss";

interface ILocation {
  from: Tfrom;
}

export const MovieDetailsPage = () => {
  const [movieDetalis, setMovieDetalis] = useState(null);

  const history = useHistory();
  const location = useLocation<ILocation>();

  const toReturn = location.state?.from || { pathname: "/" };

  const { movieId } = useParams<IParams>();

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
