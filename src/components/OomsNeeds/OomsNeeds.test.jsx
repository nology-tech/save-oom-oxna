import { screen } from "@testing-library/react";
import { customRender } from "../../utils/testUtils";
import OomsNeeds from "./OomsNeeds";

it("Should render the Ooms needs", () => {
  const { container } = customRender(<OomsNeeds />);
  expect(container).toMatchSnapshot();
});

it("Should contain the percentage ", () => {
  customRender(<OomsNeeds />);
  const item = screen.getByText(/%/i);
  expect(item).toBeInTheDocument();
});
