import { screen } from "@testing-library/react";
import { customRender } from "../../utils/testUtils";
import NeedItem from "./NeedItem";

it("Should render the Ooms needs", () => {
  const { container } = customRender(<NeedItem />);
  expect(container).toMatchSnapshot();
});

it("Should contain the percentage ", () => {
  customRender(<NeedItem />);
  const item = screen.getByText(/%/i);
  expect(item).toBeInTheDocument();
});
