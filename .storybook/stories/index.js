import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { Button } from "@storybook/react/demo";
import MovieImage from "../../src/atoms/MovieImage";

storiesOf("Button", module)
  .add("with text", () => <Button>Hello Button</Button>)
  .add("with some emoji", () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

const stories = storiesOf("MovieImage", module);

// Add the `withKnobs` decorator to add knobs support to your stories.
stories.addDecorator(withKnobs);

stories.add("with placeholder image", () => (
  <MovieImage src={text("Image URL", "https://placeimg.com/200/290/nature")} />
));
