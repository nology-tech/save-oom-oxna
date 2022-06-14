import { screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { act } from "react-dom/test-utils";
import Button from "../../components/Button/Button";
import { customRender } from "../../utils/testUtils";
import Registration from "./Registration";

const userFnctn = () => {
  console.log("Updates user context ");
};
const userObj = {
  user: {
    name: "Jack",
    email: "Hello@gmail",
  },
  setUser: userFnctn,
};

it("Should render the Registration screen", async () => {
  createMemoryHistory();
  await act(async () =>
    customRender(<Registration />, true, { useContext: true, value: userObj })
  );
  const paragraph1 = screen.getByText(/This is the registration page/i);
  expect(paragraph1).toBeInTheDocument();
});

it("Should display the button with the text - Create your account", () => {
  customRender(<Button buttonText="Create your account" />, true, {
    useContext: true,
    value: userObj,
  });
  const paragraph1 = screen.getByText(/Create your account/i);
  expect(paragraph1).toBeInTheDocument();
});
