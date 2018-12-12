import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components'

const Styles = styled.div`
  padding: 5px 0;
`;

const MovieGenres = ({ children }) => (
  <Styles>
    {children}
  </Styles>
);

MovieGenres.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MovieGenres;
