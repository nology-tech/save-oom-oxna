import { customRender } from "../../utils/testUtils";
import StoryContainer from "./StoryContainer";

it("Should render the StoryContainer page", () => {
  const { container } = customRender(<StoryContainer />);

  expect(container).toMatchSnapshot();
});
