import { screen } from "@testing-library/react";
import App from "./App";
import { customRender } from "./utils/testUtils";

it("should render the login page by default", () => {
  customRender(<App />);

  const heading = screen.getByRole("heading");
  expect(heading).toHaveTextContent("Welcome!");
});
