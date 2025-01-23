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
          date="2022 - Dec 2025"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Science in Computer Science and Engineering
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            University of California, Merced
          </h4>
          <p>
            Courses: Algorithm Design, Data Structures, AI, Networking,
            Full-Stack Web & Mobile Development, Game Development, Computer
            Vision.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Aug 2023 - Present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            University of California, Merced
          </h4>
          <p>
            • Developed and launched MobileID, a virtual campus ID app with over
            5,000 users.
            <br />
            • Integrated Apple & Google Wallet for digital ID, reducing physical
            ID dependency by 40%.
            <br />
            • Designed an AI Virtual Assistant for real-time information,
            improving response accuracy by 350%.
            <br />
            • Built APIs in Next.js for multilingual Speech-to-Text and
            Text-to-Speech features.
            <br />
            • Engineered a dynamic vector database for real-time UC Merced data
            retrieval.
            <br />• Deployed Docker containers for improved scalability and
            reduced deployment time by 20%.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Mar 2021 - Mar 2024"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Engineer | Co-Founder
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            SocialTech Labs, Inc.
          </h4>
          <p>
            • Co-founded and led BestFriendsNetwork, a mental health app for
            teens with 10,000+ users.
            <br />
            • Developed the iOS client using SwiftUI, boosting user engagement
            by 25%.
            <br />
            • Built a high-performance REST API server in Go, integrating
            DynamoDB & Redis.
            <br />• Deployed AWS-hosted Kubernetes infrastructure, improving
            scalability & reliability.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Mar 2021 - Mar 2024"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">ZetOrder</h4>
          <p>
            • Built an iOS app in SwiftUI to train a custom LLM using AI-driven
            text-to-speech & speech recognition.
            <br />
            • Migrated a legacy web client from Angular to React, improving
            rendering speed by 50%.
            <br />
            • Built backend services in Go, implementing authentication,
            WebSockets, and large file migrations.
            <br />• Set up Google Cloud Firestore for secure data storage and
            authentication.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Web Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Merced, CA</h4>
          <p>
            • Developed a website for a NASA-partnered research association
            using HTML, CSS, and JavaScript.
            <br />• Enhanced user engagement through interactive elements and
            increased online visibility.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
