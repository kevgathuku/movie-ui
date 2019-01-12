import React, { Component } from 'react';
import styled from 'styled-components';

import MovieCard from '../organisms/movie-card';

const Styles = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #cdecff;
`;

const movies = [
  {
    title: 'Jurassic World',
    genres: ['Science Fiction'],
  },
  {
    title: 'Gone Girl',
    genres: ['Drama', 'Thriller'],
  },
];

class App extends Component {
  render() {
    return (
      <Styles>
        {movies.map(movie => (
          <MovieCard
            imageSrc="https://placeimg.com/200/290/nature"
            key={movie.title}
            title={movie.title}
            genres={movie.genres}
          />
        ))}
      </Styles>
    );
  }
}

export default App;
