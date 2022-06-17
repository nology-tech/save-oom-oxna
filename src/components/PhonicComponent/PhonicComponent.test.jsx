import { screen } from "@testing-library/react";
import { customRender } from "../../utils/testUtils";
import PhonicComponent from "./PhonicComponent";

it("Should render the heading text 's'", () => {
  //1. Arrange
  customRender(<PhonicComponent phonicText={"s"} />);

  //2. Act
  const headingText = screen.queryByText("s");

  //3. Assert
  expect(headingText).toBeInTheDocument();
});

it("Should render the phonic header", () => {
  const { container } = customRender(<PhonicComponent phonicText={"test"} />);
  expect(container).toMatchSnapshot();
});

it("Should contain the phonic heading", () => {
  customRender(<PhonicComponent phonicText={"test"} />);
  const phonicHeading = screen.getByText(/test/i);
  expect(phonicHeading).toBeInTheDocument();
});
