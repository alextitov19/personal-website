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
            A Software Engineer passionate about AI, full-stack development, and
            cloud technologies. I specialize in building high-performance
            applications, from mobile to backend systems.
          </p>

          {/* Resume Download Button */}
          <a href="/resume.pdf" download="Alex_Titov_Resume.pdf">
            <button className="resume-button">📄 Download My Resume</button>
          </a>

          {/* Social Media Icons */}
          <div className="social-icons">
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
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJS, Angular, Next.js, Tailwind, HTML, CSS, Redux, React
              Native, Bootstrap, MaterialUI, Flutter
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, REST API, GraphQL, Web Sockets, .NET, Go, PHP,
              Docker, Kubernetes, AWS Lambda, AWS S3, Redis, NoSQL, MySQL,
              MariaDB, OracleDB
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>
              JavaScript, TypeScript, Python, Java, Bash, C, C++, C#, Swift, Go,
              Kotlin, Dart
            </span>
          </li>
          <li className="item">
            <h2>Machine Learning & AI</h2>
            <span>
              OpenCV, Natural Language Processing (NLP), Speech Recognition,
              Computer Vision, AI Chatbots
            </span>
          </li>
          <li className="item">
            <h2>DevOps & Cloud</h2>
            <span>
              Amazon Web Services (AWS), Google Cloud, Docker, Kubernetes,
              Nginx, CI/CD, Git, Unix
            </span>
          </li>
          <li className="item">
            <h2>Projects</h2>
            <span>
              RezAI (AI-powered resume tool), Alynx (AI Virtual Assistant),
              ParkPals (iOS Dog Training App)
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
