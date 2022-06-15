import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import GameInstructions from "./components/GameInstructions/GameInstructions";
import LevelSelectCardContainer from "./containers/LevelSelectCardContainer/LevelSelectCardContainer";
import UserContext from "./context/UserContext";
import AvatarCreation from "./pages/AvatarCreation/AvatarCreation";
import Dashboard from "./pages/DashBoard/Dashboard";
import LogIn from "./pages/LogIn/LogIn";
import Registration from "./pages/Registration/Registration";
import StatsPage from "./pages/StatsPage/StatsPage";
import StoryContainer from "./pages/StoryContainer/StoryContainer";
import SwingGamePlay from "./pages/SwingGamePlay/SwingGamePlay";
import "./styles/main.scss";

//TODO: navigate user out when not logged in

const App = () => {
  const user = useContext(UserContext);
  console.log("userContext in App", user);
  return (
    <Routes>
      {/* PUBLIC ROUTES */}
      <Route path="/login" element={<LogIn />} />
      <Route path="/registration" element={<Registration />} />

      {/* PROTECTED ROUTES */}
      <Route path="/swing-game" element={<SwingGamePlay />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/story-container" element={<StoryContainer />} />
      <Route path="/level-select" element={<LevelSelectCardContainer />} />
      <Route path="/stats-page" element={<StatsPage />} />
      <Route path="/avatar-creation" element={<AvatarCreation />} />

      {/* ISSUES */}
      {/* never used, is not a page component */}
      <Route path="/game-instructions" element={<GameInstructions />} />

      {/* REDIRECTS */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default App;
