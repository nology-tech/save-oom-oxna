import { customRender } from "../../utils/testUtils";
import Registration from "./Registration";

it("Should render the Registration page", () => {
  const { container } = customRender(<Registration />);

  expect(container).toMatchSnapshot();
});
