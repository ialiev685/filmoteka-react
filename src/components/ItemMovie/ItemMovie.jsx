import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import "./ItemMovie.scss";

export const ItemMovie = ({ id, title }) => {
  const location = useLocation();
  return (
    <ListGroup.Item className="item-movie">
      <Link
        to={{ pathname: `/movies/${id}`, state: { from: location } }}
        className="item-movie__link"
      >
        {title}
      </Link>
    </ListGroup.Item>
  );
};

ItemMovie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
