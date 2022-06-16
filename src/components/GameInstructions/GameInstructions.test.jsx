import { render, screen } from "@testing-library/react";
import GameInstructions from "./GameInstructions";

it("Should render the game instructions", () => {
  render(<GameInstructions />);

  const paragraph1 = screen.getByRole("text");

  expect(paragraph1).toBeInTheDocument();
});
