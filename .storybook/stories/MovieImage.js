import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import MovieImage from "../../src/atoms/movie-image";

storiesOf("MovieImage", module)
  .addDecorator(withKnobs)
  .add("with placeholder image", () => (
    <MovieImage src={text("Image URL", "https://placeimg.com/200/290/nature")} />
  ));

