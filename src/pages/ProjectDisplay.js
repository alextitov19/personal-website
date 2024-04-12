import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import AppleIcon from "@material-ui/icons/Apple";

import "../styles/ProjectDisplay.css";
function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  const navigate = useNavigate();

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      {id < 2 ? (
        <div style={{ textAlign: "center" }}>
          <AppleIcon onClick={() => window.open(project.link)} />
          {id == 0 ? (
            <div>
              <a
                onClick={() => {
                  navigate("/parkpals/tos");
                }}
              >
                <u>Terms of Service</u>
              </a>
              <a
                onClick={() => {
                  navigate("/parkpals/privacy");
                }}
              >
                <u>Privacy Policy</u>
              </a>
            </div>
          ) : (
            <div />
          )}
        </div>
      ) : (
        <GitHubIcon onClick={() => window.open(project.link)} />
      )}
    </div>
  );
}

export default ProjectDisplay;
