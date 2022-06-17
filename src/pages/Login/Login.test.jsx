import { customRender } from "../../utils/testUtils";
import Login from "./Login";

it("Should render the Login page", () => {
  const { container } = customRender(<Login />);

  expect(container).toMatchSnapshot();
});
