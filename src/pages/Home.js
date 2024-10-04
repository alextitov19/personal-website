import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Alex</h2>
        <div className="prompt">
          <p>
            A Software Engineer with a passion for leveraging cutting-edge
            technology to innovate and create impactful solutions.
          </p>
          <LinkedInIcon
            onClick={() =>
              window.open("https://www.linkedin.com/in/alex-titov-b072451a9/")
            }
          />
          <GitHubIcon
            onClick={() => window.open("https://github.com/alextitov19")}
          />
          <a href="mailto:alextitov203@gmail.com">
            <EmailIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJS, Angular, HTML, CSS, Redux, React Native, NPM, BootStrap,
              MaterialUI, Flutter, ThreeJS
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              Machine Learning, REST API, NodeJS, ExpressJS, MongoDB, MySQL,
              GraphQL, Web Sockets, .NET, AWS S3, Docker, Kubernetes, Redis,
              NoSQL, Git
            </span>
          </li>
          <li className="item">
            <h2>Langauges</h2>
            <span>
              JavaScript, TypeScript, Python, Java, C#, Go, C++, Swift, Kotlin,
              C
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
