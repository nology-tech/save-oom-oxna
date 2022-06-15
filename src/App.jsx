import { Navigate, Route, Routes } from "react-router-dom";
import GameInstructions from "./components/GameInstructions/GameInstructions";
import Dashboard from "./pages/Dashboard/Dashboard";
import LevelSelect from "./pages/LevelSelect/LevelSelect";
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
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/swing-game" element={<SwingGamePlay />} />
    <Route path="/story-container" element={<StoryContainer />} />
    <Route path="/level-select" element={<LevelSelect />} />
    <Route path="/stats-page" element={<StatsPage />} />

    {/* ISSUES */}
    {/* never used, is not a page component */}
    <Route path="/game-instructions" element={<GameInstructions />} />

    {/* REDIRECTS */}
    <Route path="*" element={<Navigate to="/login" replace />} />
  </Routes>
);

export default App;
