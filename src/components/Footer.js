import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
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
      <p>&copy; 2024 alextitov.com</p>
    </div>
  );
}

export default Footer;
