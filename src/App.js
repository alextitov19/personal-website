import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
function App() {
  const reload = () => window.location.reload();

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route
            path="/project/parkpals/privacy"
            onEnter={reload}
            element={<PrivacyPolicy />}
          />
          <Route
            path="/project/parkpals/tos"
            onEnter={reload}
            element={<TermsOfService />}
          />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
