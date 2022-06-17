import { customRender } from "../../utils/testUtils";
import Button from "./Button";

it("Should render the button", () => {
  const { container } = customRender(<Button label="Click me" />);

  expect(container).toMatchSnapshot();
});

it("Should render the secondary button", () => {
  const { container } = customRender(<Button label="Click me" isSecondary />);

  expect(container).toMatchSnapshot();
});
