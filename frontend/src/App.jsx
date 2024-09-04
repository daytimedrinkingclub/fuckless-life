import { HashRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import TermsPage from "./pages/TermsPage";
import ChooseMode from "./pages/ChooseMode";
import Header from "./components/Header";
import ConfessionBooth from "./pages/ConfessionBooth";
import FucklessChallenges from "./pages/FucklessChallenge";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/choose-mode" element={<ChooseMode />} />
        <Route path="/confession-booth" element={<ConfessionBooth />} />
        <Route path="/fuckless-challenges" element={<FucklessChallenges />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
