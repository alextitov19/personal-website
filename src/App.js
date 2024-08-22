import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
import ParkPalsPrivacyPolicy from "./pages/ParkPalsPrivacyPolicy";
import ParkpalsTermsOfService from "./pages/ParkPalsTermsOfService";
import AlgoNinjaPrivacyPolicy from "./pages/AlgoNinjaPrivacyPolicy";
import AlgoNinjaTermsOfService from "./pages/AlgoNinjaTermsOfService";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/privacy/parkpals" element={<ParkPalsPrivacyPolicy />} />
          <Route path="/tos/parkpals" element={<ParkpalsTermsOfService />} />
          <Route
            path="/privacy/algoninja"
            element={<AlgoNinjaPrivacyPolicy />}
          />
          <Route path="/tos/algoninja" element={<AlgoNinjaTermsOfService />} />
          <Route
            path="/privacy/algoninja"
            element={<AlgoNinjaPrivacyPolicy />}
          />
          <Route path="/tos/algoninja" element={<AlgoNinjaTermsOfService />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
