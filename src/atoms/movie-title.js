import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components'

const Styles = styled.div`
  padding: 5px 0;
  color: #001b44;
  font-weight: 600;
`;

const MovieTitle = ({ children }) => (
  <Styles>
    {children}
  </Styles>
);

MovieTitle.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MovieTitle;
