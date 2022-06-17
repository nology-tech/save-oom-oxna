import ButtonRoundContainer from "./ButtonRoundContainer";
import { customRender } from "../../utils/testUtils";

it("Should render the button", () => {
  const { container } = customRender(<ButtonRoundContainer />);

  expect(container).toMatchSnapshot();
});
