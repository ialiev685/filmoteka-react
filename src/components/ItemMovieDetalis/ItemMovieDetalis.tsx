import React from "react";

import { Cast } from "../Cast";
import { Reviews } from "../Reviews";
import { Link, Route, useRouteMatch } from "react-router-dom";
import { Tfrom } from "../../types";
import "./ItemMovieDetalis.scss";

import PropTypes from "prop-types";

interface IGenres {
  name: string;
}

interface IMovieDetalis {
  title: string;
  overview: string;
  popularity: number;
  genres: IGenres[];
  poster_path: string;
}

interface IProps {
  movieDetalis: IMovieDetalis;
  toReturn: Tfrom;
}

export const ItemMovieDetalis = ({ movieDetalis, toReturn }: IProps) => {
  const { title, overview, popularity, genres, poster_path } = movieDetalis;

  const { url, path } = useRouteMatch();

  return (
    <div className="movie-detalis">
      <div className="movie-detalis__wrapper">
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={title}
          className="movie-detalis__poster"
        />
        <ul className="movie-detalis__discription">
          <li>
            <h1>{title}</h1>
            <p>User Score: {Math.ceil(popularity)}</p>
          </li>
          <li>
            <h2>Overview</h2>
            <p>{overview}</p>
          </li>
          <li>
            <h2>Genres</h2>
            <ul className="movie-detalis__genres">
              {genres &&
                genres.map((el, index) => <li key={index}>{el.name}</li>)}
            </ul>
          </li>
        </ul>
      </div>
      <div className="movie-detalis__additionally">
        <h3>Additional information</h3>
        <ul className="movie-detalis__list-additionally">
          <li className="movie-detalis__item">
            <Link
              to={{ pathname: `${url}/cast`, state: { from: toReturn } }}
              className="movie-detalis__link"
            >
              Cast
            </Link>
          </li>
          <li className="movie-detalis__item">
            <Link
              to={{ pathname: `${url}/reviews`, state: { from: toReturn } }}
              className="movie-detalis__link"
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <Route path={`${path}/cast`}>
          <Cast />
        </Route>
        <Route path={`${path}/reviews`}>
          <Reviews />
        </Route>
      </div>
    </div>
  );
};

ItemMovieDetalis.propTypes = {
  movieDetalis: PropTypes.shape({
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    popularity: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
    poster_path: PropTypes.string,
  }),
};
