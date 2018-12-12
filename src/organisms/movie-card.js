import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import MovieImage from "../atoms/movie-image";
import MovieTitle from "../atoms/movie-title";
import MovieGenres from "../atoms/movie-genres";

const Styles = styled.div`
  width: 230px;
  height: 380px;
  padding-right: 30px;
  display: flex;
  flex-direction: column;
`;

const MovieCard = ({ title, genres }) => (
  <Styles>
    <MovieImage src="https://placeimg.com/200/290/nature" />
    <MovieTitle>{title}</MovieTitle>
    <MovieGenres>{genres.join(", ")}</MovieGenres>
  </Styles>
);

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired
};

export default MovieCard;
