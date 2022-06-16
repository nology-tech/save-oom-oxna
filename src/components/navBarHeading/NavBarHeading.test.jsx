import { screen } from "@testing-library/react";
import VectorLock from "../../assets/images/Vectorlock.png";
import { customRender } from "../../utils/testUtils";
import NavBarHeading from "./NavBarHeading";

it("Should render the navbar header", () => {
  const { container } = customRender(
    <NavBarHeading
      headingText="heading"
      headingImg={VectorLock}
      headingStyle={"nav-bar-header"}
      isLocked={true}
    />
  );
  expect(container).toMatchSnapshot();
});

it("Should contain the navbar heading", () => {
  customRender(<NavBarHeading headingText={"Heading"} />);
  const navHeading = screen.getByText(/Heading/i);
  expect(navHeading).toBeInTheDocument();
});
