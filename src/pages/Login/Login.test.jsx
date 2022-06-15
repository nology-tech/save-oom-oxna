import { render, screen } from "@testing-library/react";
import Button from "../../components/Button/Button";

it("Should display the button with the text - log in", () => {
  render(<Button label="Log in" />);
  const paragraph1 = screen.getByText(/Log in/i);
  expect(paragraph1).toBeInTheDocument();
});
