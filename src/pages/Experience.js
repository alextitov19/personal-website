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
      <div className="experience-header">
        <h1 className="experience-title">Professional Journey</h1>
        <p className="experience-subtitle">Building innovative solutions and driving impact</p>
      </div>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Aug 2022 - May 2026"
          iconStyle={{ background: "linear-gradient(135deg, #00d9ff 0%, #6366f1 100%)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            BS, Computer Science and Engineering
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            University of California, Merced
          </h4>
          <p>
            Relevant Courses: Data Structures and Algorithms, Artificial Intelligence, Networking,
            Full-Stack Web Development, Computer Vision, Software Engineering
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan 2025 - Present"
          iconStyle={{ background: "linear-gradient(135deg, #00d9ff 0%, #6366f1 100%)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">YsoDirty</h4>
          <p>
            • Spearheaded end-to-end development of a full-stack, cross-platform mobile car wash marketplace, enabling customers to book home-service car washes
            <br />
            • Developed the frontend using React Native with Expo, TypeScript, and NativeWind for iOS, Android, and Web platforms
            <br />
            • Engineered backend RESTful APIs in Go (Gin), integrating PostgreSQL (AWS RDS), AWS S3 for image storage, and Redis for caching and real-time chat functionality
            <br />
            • Designed and implemented an intelligent matching algorithm to pair customers with WashPros based on proximity, availability, and ratings
            <br />
            • Integrated third-party services including Stripe for payments, Checkr for background checks, Twilio for communications, and AWS SES with comprehensive webhook handling
            <br />
            • Built real-time messaging system using Redis and WebSockets with persistent chat storage in PostgreSQL
            <br />
            • Established robust CI/CD pipelines with GitHub Actions, Docker builds, and AWS Lambda deployments
            <br />
            • Managed scalable AWS infrastructure (EC2, ECR, EKS, RDS, SES, Route53), achieving 99.9% uptime and high reliability
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jun 2024 - Present"
          iconStyle={{ background: "linear-gradient(135deg, #00d9ff 0%, #6366f1 100%)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">ZetOrder</h4>
          <p>
            • Led development of an iOS application in SwiftUI to capture LLM training data through voice and text inputs
            <br />
            • Built scalable backend services in Go supporting real-time AI chat, JWT authentication, token refresh mechanisms, and secure large file uploads to AWS S3
            <br />
            • Designed and deployed MoneyMap, a comprehensive full-stack financial advisory platform with data pipelines connecting PostgreSQL to AI models
            <br />
            • Developed affiliate dashboard using React, TypeScript, Tailwind CSS, and Go for backend services
            <br />
            • Refactored legacy Angular codebase to React, achieving 50% improvement in page load times
            <br />
            • Integrated Firestore database and Google Authentication for secure user management
            <br />
            • Wrote comprehensive unit and integration tests using React Testing Library, Mocha, and Go testing frameworks; integrated with CI pipeline
            <br />
            • Dockerized and deployed microservices; implemented DevOps workflows using Git and Makefile automation scripts
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Aug 2023 - May 2025"
          iconStyle={{ background: "linear-gradient(135deg, #00d9ff 0%, #6366f1 100%)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            University of California, Merced
          </h4>
          <p>
            • Built and deployed MobileID, a PHP application serving 9,000+ students for secure dynamic barcode access control, reducing entry fraud by 95%
            <br />
            • Developed Alynx, an AI-powered chatbot using React, Tailwind CSS, Next.js, Node.js, and OpenAI API with multilingual vector search, text-to-speech, and speech-to-text capabilities
            <br />
            • Containerized applications using Docker and orchestrated with Kubernetes for scalable, fault-tolerant production deployments; maintained 99.9% backend uptime
            <br />
            • Created DCID digital campus ID system with seamless Apple Wallet and Google Wallet integration
            <br />
            • Implemented facial recognition check-in system using Python, OpenCV, and deep learning models, interfacing with OracleDB, MySQL, and PostgreSQL databases
            <br />
            • Integrated Google Maps SDK for real-time wayfinding and navigation in the mobile client application
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Feb 2020 - Nov 2022"
          iconStyle={{ background: "linear-gradient(135deg, #00d9ff 0%, #6366f1 100%)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Co-founder & CTO
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            SocialTech Labs, Inc.
          </h4>
          <p>
            • Co-founded and launched a teen-focused mental health social application addressing adolescent wellness needs
            <br />
            • Built iOS client using SwiftUI and developed backend REST API in Go (Gin) with JWT authentication, WebSocket support, and cloud image storage
            <br />
            • Architected and deployed scalable AWS infrastructure including EC2, EKS, ECR, DynamoDB, S3, and Route53 for high availability
            <br />
            • Implemented comprehensive unit testing, A/B testing frameworks, and CI/CD pipelines for streamlined deployment
            <br />
            • Recruited and led a technical team of 8 engineers and interns; managed App Store submission and release processes
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
