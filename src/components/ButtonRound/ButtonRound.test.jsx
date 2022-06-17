import { screen, fireEvent } from "@testing-library/react";
import ButtonRound from "./ButtonRound";
import { customRender } from "../../utils/testUtils";

it("Should render the ButtonRound component", () => {
  const { container } = customRender(<ButtonRound />);

  expect(container).toMatchSnapshot();
});

it("Should render the ButtonRound component with a tick", () => {
  const { container } = customRender(<ButtonRound isTick />);

  expect(container).toMatchSnapshot();
});

it("Should fire a function on click", () => {
  const handleClick = jest.fn();
  customRender(<ButtonRound onClick={handleClick} isTick />);
  fireEvent.click(screen.getByRole("button"));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
