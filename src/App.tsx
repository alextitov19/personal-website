import Header from "./Header";
import PacManDivider from "./PacManDivider";
import './App.css'
import WorkExperience from "./WorkExperience";
import Skills from "./Skills";

function App() {
  return <div>
    <Header />
    <PacManDivider />
    <div className="side-split">
      <WorkExperience />
      <Skills />
    </div>

  </div >
}

export default App;