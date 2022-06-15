import { customRender } from "../../utils/testUtils";
import StatsPage from "./Stats";

it("Should render the Stats page", () => {
  const { container } = customRender(<StatsPage />);

  expect(container).toMatchSnapshot();
});
