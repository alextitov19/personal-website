import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - 2026"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Science Degree in Computer Science and Engineering
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            University of California, Merced, CA
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Merced, CA</h4>
          <p>
            Engineered an AI Virtual Assistant, enhancing response accuracy, and
            developed custom APIs for multilingual support and real-time data
            extraction, optimizing user experience and deployment efficiency.
            Integrated navigation features and containerization, collaborating
            with IT for scalable hosting infrastructure.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - 2024"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer | Co-Founder
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            SocialTech Labs, Inc.
          </h4>
          <p>
            Co-Founded and led development at BestFriendsNetwork, a non-profit
            mental health app, achieving significant user growth. Engineered an
            intuitive iOS client interface, resulting in increased user
            engagement and satisfaction. Developed a high-performance
            Golang-based REST API server, integrating DynamoDB and Redis for
            enhanced data persistence and responsiveness. Orchestrated
            deployment on AWS Kubernetes for improved scalability and system
            reliability.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Web Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Merced, CA</h4>
          <p>
            Developed a dynamic website for a NASA-partnered research
            association using HTML5 and CSS, contributing to increased user
            engagement and online visibility. Enhanced functionality and
            versatility with JavaScript, resulting in a more engaging online
            experience and increased user interactions.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
