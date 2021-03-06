import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCast } from "../../services";
import { ItemCast } from "../ItemCast";
import "./Cast.scss";
import { IParams } from "../../types";

export const Cast = () => {
  const { movieId } = useParams<IParams>();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchCast(movieId).then((response) => setCast(response.cast));
  }, [movieId]);
  return (
    <ul className="list-cast">
      {cast &&
        cast.map(({ cast_id, character, name, profile_path }) => (
          <ItemCast
            key={cast_id}
            character={character}
            name={name}
            profile={profile_path}
          />
        ))}
    </ul>
  );
};
