import { customRender } from "../../utils/testUtils";
import LevelSelect from "./LevelSelect";

it("Should render the LevelSelect page", () => {
  const { container } = customRender(<LevelSelect />);

  expect(container).toMatchSnapshot();
});
