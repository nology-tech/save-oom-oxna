import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import initialUser from "../context/InitialUserContext";
import UserContext from "../context/UserContext";

export const customRender = (
  ui,
  useRouting = true,
  contextOptions = { useContext: true, value: { user: initialUser } }
) => {
  // wrap components in routing and context if requested
  const routingUiResult = useRouting && wrapWithRouting(ui);
  const contextUiResult =
    contextOptions.useContext &&
    wrapWithContext(routingUiResult, contextOptions.value);

  // use RTL's render function to return the test component
  return render(contextUiResult);
};

const wrapWithRouting = (ui) => {
  return <Router>{ui}</Router>;
};

const wrapWithContext = (ui, value) => {
  return <UserContext.Provider value={value}>{ui}</UserContext.Provider>;
};
