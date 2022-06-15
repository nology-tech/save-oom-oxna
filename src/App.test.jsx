import App from "./App";
import { customRender } from "./utils/testUtils";

it("should render the login page by default", () => {
  const { container } = customRender(<App />);

  expect(container).toMatchSnapshot();
});
