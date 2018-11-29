import React from "react";
import { storiesOf } from "@storybook/react";
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

storiesOf("MovieImage", module).add("with placeholder image", () => (
	<MovieImage />
));
