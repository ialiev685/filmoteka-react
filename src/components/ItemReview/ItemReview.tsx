import React from "react";
import PropTypes from "prop-types";

interface IProps {
  author: string;
  content: string;
}

export const ItemReview = ({ author, content }: IProps) => {
  return (
    <li>
      <p>Author: {author}</p>
      <p>{content}</p>
    </li>
  );
};

ItemReview.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
};
