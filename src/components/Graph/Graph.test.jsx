import { screen } from "@testing-library/react";
import Graph from "./Graph";
import { customRender } from "../../utils/testUtils";

it("Should render the Dropdown", () => {
  //1. Arrange
  customRender(<Graph />);

  //2. Act
  const graph = screen.getByRole("graph");

  //3. Assert
  expect(graph).toBeInTheDocument();
});
