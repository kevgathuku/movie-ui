import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MovieImage from '../atoms/movie-image';
import MovieTitle from '../atoms/movie-title';
import MovieGenres from '../atoms/movie-genres';

const Styles = styled.div`
  width: 230px;
  height: 380px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
`;

const MovieCard = ({ title, genres, imageSrc }) => (
  <Styles>
    <MovieImage src={imageSrc} />
    <MovieTitle>{title}</MovieTitle>
    <MovieGenres>{genres.join(', ')}</MovieGenres>
  </Styles>
);

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default MovieCard;
