import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components'

const Styles = styled.img`
	width: 200px;
	height: 290px;
`;

const MovieImage = ({ src, ...other }) => (
	<Styles {...other} src={src} alt="movie pic" />
);

MovieImage.propTypes = {
	src: PropTypes.string.isRequired
}

export default MovieImage;
