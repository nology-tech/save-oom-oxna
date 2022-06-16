import { screen } from "@testing-library/react";
import GameInstructions from "./GameInstructions";
import { customRender } from "../../utils/testUtils";

it("Should render the game instructions", () => {
  customRender(<GameInstructions />);

  const paragraph1 = screen.getByRole("text");

  expect(paragraph1).toBeInTheDocument();
});
