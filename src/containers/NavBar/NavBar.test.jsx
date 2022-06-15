import { customRender } from "../../utils/testUtils";
import "./NavBar";
import NavBar from "./NavBar";

it("Should render the navbar", () => {
  const { container } = customRender(<NavBar />);

  expect(container).toMatchSnapshot();
});
