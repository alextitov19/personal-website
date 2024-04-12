import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/project/parkpals/privacy" element={<PrivacyPolicy />} />
          <Route path="/project/parkpals/tos" element={<TermsOfService />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/parkpals/privacy">
            <Navigate to="/project/parkpals/privacy" />
          </Route>
          <Route path="/parkpals/tos">
            <Navigate to="/project/parkpals/tos" />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
