import { customRender } from "../../utils/testUtils";
import SwingGamePlay from "./SwingGamePlay";

beforeAll(() => {
  jest.useFakeTimers();
  jest.spyOn(global, "setTimeout");
});

it("Should render the SwingGamePlay page", () => {
  const { container } = customRender(<SwingGamePlay />);

  expect(container).toMatchSnapshot();
});
