import React from "react";
import PropTypes from "prop-types";
import { ListGroup } from "react-bootstrap";
import { ItemMovie } from "../ItemMovie";

export const ListMovies = ({ listMovies }) => {
  return (
    <ListGroup className="list-movies">
      {listMovies.map((el) => (
        <ItemMovie key={el.id} id={el.id} title={el.title} />
      ))}
    </ListGroup>
  );
};

ListMovies.propTypes = {
  listMovies: PropTypes.array.isRequired,
};
