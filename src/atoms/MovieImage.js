import React, { Component } from "react";
import PropTypes from "prop-types";

class MovieImage extends Component {
	render() {
		return (
			<img
				src={this.props.src}
				alt="movie pic"
				className="movie-image"
			/>
		);
	}
}

MovieImage.propTypes = {
	src: PropTypes.string.isRequired
}

export default MovieImage;
