import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import AppleIcon from "@material-ui/icons/Apple";
import LinkIcon from "@material-ui/icons/Link";

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
      {id == 1 || id == 2 || id == 3 ? (
        <div style={{ textAlign: "center" }}>
          <AppleIcon onClick={() => window.open(project.link)} />
          {id == 1 ? (
            <div>
              <a
                onClick={() => {
                  navigate("/tos/parkpals");
                }}
              >
                <u>Terms of Service</u>
              </a>
              <a
                onClick={() => {
                  navigate("/privacy/parkpals");
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
        <div>
          {id == 0 ? (
            <LinkIcon onClick={() => window.open(project.link)} />
          ) : (
            <GitHubIcon onClick={() => window.open(project.link)} />
          )}
        </div>
      )}
    </div>
  );
}

export default ProjectDisplay;
