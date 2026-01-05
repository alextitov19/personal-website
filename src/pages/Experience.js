import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import "../styles/Experience.css";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Aug 2022 - May 2026"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            BS, Computer Science and Engineering
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            University of California, Merced
          </h4>
          <p>
            Relevant Courses: Data Structures and Algorithms, AI, Networking,
            Full-Stack Web, Computer Vision, Software Engineering
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan 2025 - Current"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">YsoDirty</h4>
          <p>
            • Spearheaded end-to-end development of a full-stack, cross-platform
            mobile car wash marketplace, enabling customers to book home-service
            car washes.
            <br />
            • Developed the frontend using React Native with Expo, TypeScript,
            and NativeWind for iOS, Android, and Web.
            <br />
            • Engineered backend RESTful APIs in Go (Gin), integrating
            PostgreSQL (AWS RDS), AWS S3 for images, and Redis for caching and
            real-time chat.
            <br />
            • Designed and implemented a matching algorithm to pair customers
            with WashPros by proximity, availability, and ratings.
            <br />
            • Integrated Stripe, Checkr, Twilio, and AWS SES with webhook
            handling.
            <br />
            • Built real-time messaging with Redis and WebSockets; persisted
            chat to PostgreSQL.
            <br />
            • Established CI/CD with GitHub Actions, Docker builds, and AWS
            Lambda deployments.
            <br />
            • Managed AWS infrastructure (EC2, ECR, EKS, RDS, SES, Route53),
            achieving high reliability and 99.9% uptime.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="June 2024 - Current"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">ZetOrder</h4>
          <p>
            • Led development of an iOS app in SwiftUI to capture LLM training
            data via voice and text.
            <br />
            • Built backend services in Go supporting real-time AI chat,
            JWT auth, token refresh, and secure large file uploads to S3.
            <br />
            • Designed and deployed MoneyMap, a full-stack financial advisory
            platform; implemented data pipelines from PostgreSQL to AI models.
            <br />
            • Developed affiliate dashboard with React, TypeScript, Tailwind,
            and Go.
            <br />
            • Refactored Angular to React, improving load times by 50%.
            <br />
            • Integrated Firestore and Google Authentication.
            <br />
            • Wrote unit & integration tests with React Testing Library, Mocha,
            and Go test; integrated CI.
            <br />
            • Dockerized and deployed services; used Git and Makefile scripts
            for DevOps workflows.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Aug 2023 - May 2025"
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
            • Built and deployed MobileID, a PHP application used by 9,000+
            students for secure dynamic barcode access, reducing entry fraud by
            95%.
            <br />
            • Developed Alynx, an AI chatbot using React, Tailwind, Next.js,
            Node.js, and OpenAI API with multilingual vector search, TTS, and
            STT.
            <br />
            • Dockerized and deployed apps with Kubernetes for scalable,
            fault-tolerant production; ensured 99.9% backend uptime.
            <br />
            • Created DCID digital campus ID with Apple Wallet & Google Wallet
            integration.
            <br />
            • Implemented facial recognition check-in system using Python,
            OpenCV, and deep learning interfacing with OracleDB, MySQL, and
            PostgreSQL.
            <br />
            • Integrated Google Maps SDK for real-time wayfinding in the
            mobile client.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Feb 2020 - Nov 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Co-founder, CTO
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            SocialTech Labs, Inc.
          </h4>
          <p>
            • Developed and launched a teen-focused mental health social app.
            <br />
            • Built iOS client in SwiftUI and backend REST API in Go (Gin) with
            JWT, WebSockets, and image storage.
            <br />
            • Deployed scalable AWS infrastructure (EC2, EKS, ECR, DynamoDB,
            S3, Route53).
            <br />
            • Implemented unit testing, A/B tests, and CI/CD pipelines.
            <br />
            • Recruited and led a technical team of 8 interns; managed App
            Store releases.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
