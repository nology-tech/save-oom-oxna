import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import GameEnd from "./pages/GameEnd/GameEnd";
import LevelSelect from "./pages/LevelSelect/LevelSelect";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import StatsPage from "./pages/Stats/Stats";
import StoryContainer from "./pages/StoryContainer/StoryContainer";
import SwingGame from "./pages/SwingGame/SwingGame";
import SwingGameInstructions from "./pages/SwingGameInstructions/SwingGameInstructions";
import "./styles/main.scss";

//TODO: navigate user out when not logged in

const App = () => (
  <Routes>
    {/* PUBLIC ROUTES */}
    <Route path="/login" element={<Login />} />
    <Route path="/registration" element={<Registration />} />

    {/* PROTECTED ROUTES */}
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/swing-game" element={<LevelSelect gameName="Swing Game" />} />
    <Route path="/swing-game/play" element={<SwingGame />} />
    <Route path="/story-container" element={<StoryContainer />} />
    <Route path="/stats-page" element={<StatsPage />} />

    {/* ISSUES */}
    {/* never used, is not a page component */}
    <Route path="/game-instructions" element={<SwingGameInstructions />} />

    <Route path="/end-game" element={<GameEnd />} />

    {/* REDIRECTS */}
    <Route path="*" element={<Navigate to="/login" replace />} />
  </Routes>
);

export default App;
