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
          date="Aug 2022 - Dec 2025"
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
          date="Jan 2025 - Present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Machine Learning Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            MERT Lab, University of California, Merced
          </h4>
          <p>
            • Built an IoT system with Raspberry Pi, collecting real-time data
            from weather, soil, and water sensors.
            <br />
            • Developed a data pipeline using MQTT, WebSockets, and REST APIs,
            storing data in a Dockerized PostgreSQL database.
            <br />
            • Engineered a Node.js backend with Express and async streaming for
            low-latency processing.
            <br />
            • Applied ARIMA, LSTM, Isolation Forest, and DBSCAN for forecasting
            and anomaly detection.
            <br />
            • Visualized trends in a D3.js + Chart.js dashboard with real-time
            analytics.
            <br />
            • Deployed containerized services with Docker, Kubernetes, and Nginx
            for high availability.
            <br />
            • Used TensorFlow and Scikit-learn to enhance predictive modeling
            and cut response time by 35%.
            <br />• Optimized features and model accuracy using Pandas, NumPy,
            and SciPy.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="June 2024 - Present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">ZetOrder</h4>
          <p>
            • Built an iOS app in SwiftUI to collect data for training a custom
            LLM, with AI-generated customer profiles, TTS, and STT.
            <br />
            • Set up Google Cloud Firestore for mobile data storage and Google
            authentication.
            <br />
            • Rebuilt legacy frontend from Angular to React, increasing render
            speed by 50%.
            <br />• Developed a backend in Go from scratch with auth,
            WebSockets, token management, and large file handling.
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
            • Launched MobileID with 5,000+ users, enabling secure digital ID on
            mobile devices.
            <br />
            • Integrated Apple & Google Wallet via DCID, reducing physical ID
            use by 40%.
            <br />
            • Built an AI Assistant with OpenAI integration, improving info
            delivery speed and accuracy.
            <br />
            • Added multilingual STT and TTS via custom Next.js APIs.
            <br />
            • Created a real-time vector database to retrieve UC Merced data.
            <br />
            • Embedded Google Maps SDK for campus navigation.
            <br />
            • Deployed Docker containers for scalable services, cutting deploy
            time by 20%.
            <br />
            • Ensured 99.9% uptime and fast query performance via backend
            optimization (PHP, OracleDB, MySQL).
            <br />• Contributed to agile development across infrastructure and
            backend.
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
            • Co-founded BestFriendsNetwork, a mental health app with 10,000+
            users in six months.
            <br />
            • Built the iOS app in SwiftUI, increasing engagement by 25% and
            satisfaction by 15%.
            <br />
            • Created a fast REST API in Go, backed by DynamoDB and Redis on
            AWS.
            <br />• Deployed infrastructure using Docker and Kubernetes,
            improving uptime and scalability by 40%.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
