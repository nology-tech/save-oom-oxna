import { screen } from "@testing-library/react";
import AvatarHeading from "./AvatarHeading";
import { customRender } from "../../utils/testUtils";

it("Should render the heading", () => {
  //1. Arrange
  customRender(<AvatarHeading />);

  //2. Act
  const heading = screen.getByRole("heading", { level: 1 });

  //3. Assert
  expect(heading).toBeInTheDocument();
});

it("Should render the heading text 'This a test'", () => {
  //1. Arrange
  customRender(<AvatarHeading avatarHeadingText={"This is a test"} />);

  //2. Act
  const headingText = screen.queryByText("This is a test");

  //3. Assert
  expect(headingText).toBeInTheDocument();
});
