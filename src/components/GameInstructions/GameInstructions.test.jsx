import { customRender } from "../../utils/testUtils";
import GameInstructions from "./GameInstructions";

it("Should render the game instructions", () => {
  const { container } = customRender(<GameInstructions />);

  expect(container).toMatchSnapshot();
});
