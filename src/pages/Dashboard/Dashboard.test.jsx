import { customRender } from "../../utils/testUtils";
import Dashboard from "./Dashboard";

it("Should render the Dashboard page", () => {
  const { container } = customRender(<Dashboard />);

  expect(container).toMatchSnapshot();
});
