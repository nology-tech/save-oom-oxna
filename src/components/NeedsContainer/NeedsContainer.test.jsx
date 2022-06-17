import { customRender } from "../../utils/testUtils";
import NeedsContainer from "./NeedsContainer";

it("Should render the Ooms need container", () => {
  const { container } = customRender(<NeedsContainer />);
  expect(container).toMatchSnapshot();
});
