import { customRender } from "../../utils/testUtils";
import SwingGame from "./SwingGame";

it("Should render the SwingGame page", () => {
  const { container } = customRender(<SwingGame />);

  expect(container).toMatchSnapshot();
});
