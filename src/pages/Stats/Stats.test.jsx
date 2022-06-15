import { screen } from "@testing-library/react";
import StatsPage from "./StatsPage";
import { customRender } from "../../utils/testUtils";

it("Should render the StatsPage screen", () => {
  customRender(<StatsPage />);

  const heading = screen.getByText(/Stats for/i);

  expect(heading).toBeInTheDocument();
});
