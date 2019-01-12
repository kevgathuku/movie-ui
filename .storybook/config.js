import { configure } from "@storybook/react";

function loadStories() {
	// You can require as many stories as you need.
	require("./stories/MovieImage.js");
	require("./stories/MovieCard.js");
}

configure(loadStories, module);
