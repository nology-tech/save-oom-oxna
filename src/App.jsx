import { Navigate, Route, Routes } from "react-router-dom";
import GameInstructions from "./components/GameInstructions/GameInstructions";
import LevelSelectCardContainer from "./containers/LevelSelectCardContainer/LevelSelectCardContainer";
import Dashboard from "./pages/Dashboard/Dashboard";
import LogIn from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import StatsPage from "./pages/Stats/Stats";
import StoryContainer from "./pages/StoryContainer/StoryContainer";
import SwingGamePlay from "./pages/SwingGamePlay/SwingGamePlay";
import "./styles/main.scss";

//TODO: navigate user out when not logged in

const App = () => (
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

    {/* ISSUES */}
    {/* never used, is not a page component */}
    <Route path="/game-instructions" element={<GameInstructions />} />

    {/* REDIRECTS */}
    <Route path="*" element={<Navigate to="/login" replace />} />
  </Routes>
);

export default App;
