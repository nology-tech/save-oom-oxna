import { customRender } from "../../utils/testUtils";
import GameEnd from "./GameEnd";

it("Should render the GameEnd page", () => {
  const { container } = customRender(<GameEnd />);

  expect(container).toMatchSnapshot();
});
