import { screen } from "@testing-library/react";
import { customRender } from "../../utils/testUtils";

import StoryIntro from "./StoryIntro";

it("Should render the story intro", () => {
  customRender(<StoryIntro text={"Once upon a time"} />);

  const paragraph1 = screen.getByText(/Once upon a time/i);

  expect(paragraph1).toBeInTheDocument();
});
