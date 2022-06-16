import { screen } from "@testing-library/react";
import { customRender } from "../../utils/testUtils";
import Timer from "./Timer";

beforeAll(() => {
  jest.useFakeTimers();
  jest.spyOn(global, "setTimeout");
});

it("Should render the timer", () => {
  customRender(<Timer startTime={60} />);

  const timer = screen.getByRole("heading");

  expect(timer).toBeInTheDocument();
});
