import { customRender } from "../../utils/testUtils";
import SwingGamePlay from "./SwingGamePlay";

it("Should render the SwingGamePlay page", () => {
  const { container } = customRender(<SwingGamePlay />);

  expect(container).toMatchSnapshot();
});
