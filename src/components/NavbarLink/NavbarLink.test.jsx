import { customRender } from "../../utils/testUtils";
import NavbarLink from "./NavbarLink";

it("Should render the navbar link", () => {
  const { container } = customRender(<NavbarLink text="heading" to="/test" />);
  expect(container).toMatchSnapshot();
});
