import React from "react";
import ProjectItem from "./ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1 className="projectTitle">My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => (
          <ProjectItem
            key={idx}
            id={idx}
            name={project.name}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
