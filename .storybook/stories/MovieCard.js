import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import MovieCard from '../../src/organisms/movie-card';

// import global body styles. Required for correct font style
import '../../src/index.css';

storiesOf('MovieCard', module)
  .addDecorator(withKnobs)
  .add('with placeholder image', () => (
    <MovieCard
      imageSrc={text('Image URL', 'https://placeimg.com/200/290/nature')}
      genres={['Drama', 'Thriller']}
      title={text('Title', 'Gone Girl')}
    />
  ));
