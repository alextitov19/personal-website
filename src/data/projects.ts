import type { Project } from "@/types";
import bfn from "@/assets/bfn.png";
import parkpals from "@/assets/parkpals.png";
import algo from "@/assets/algo.png";
import yso from "@/assets/yso.png";
import alynx from "@/assets/alynx.png";

export const projects: Project[] = [
  {
    slug: "yso-dirty",
    name: "Yso Dirty",
    image: yso,
    blurb:
      "Cross-platform mobile car-wash marketplace pairing customers with mobile WashPros via a proximity-aware matching engine.",
    skills: [
      "React Native",
      "Expo",
      "TypeScript",
      "NativeWind",
      "Go (Gin)",
      "PostgreSQL",
      "AWS (RDS, S3, EC2, EKS, ECR, SES, Route53)",
      "Redis",
      "WebSockets",
      "Stripe",
      "Checkr",
      "Twilio",
      "GitHub Actions",
      "Docker",
      "CI/CD",
    ],
    primaryLink: { kind: "web", url: "https://ysodirty.io" },
  },
  {
    slug: "alynx",
    name: "Alynx",
    image: alynx,
    blurb:
      "AI virtual assistant for UC Merced — multilingual vector search, text-to-speech, and speech-to-text built atop OpenAI and a custom RAG pipeline.",
    skills: [
      "NLP",
      "Vector Search",
      "Text Generation",
      "NER",
      "Sentiment Analysis",
      "API Design",
      "Scalability",
      "CI/CD",
      "Privacy",
    ],
    primaryLink: { kind: "web", url: "https://alynx.ucmerced.edu" },
  },
  {
    slug: "algoninja",
    name: "AlgoNinja",
    image: algo,
    blurb:
      "iOS app for mastering data structures and algorithms with curated problem sets, solutions, and a streak system.",
    skills: [
      "SwiftUI",
      "MongoDB",
      "Node.js",
      "Express",
      "AWS EC2",
      "AWS S3",
      "JWT",
      "REST API",
      "Dynamic Programming",
      "UI/UX",
    ],
    primaryLink: {
      kind: "appstore",
      url: "https://apps.apple.com/us/app/algoninja/id6639586961",
    },
    legal: { tosSlug: "algoninja", privacySlug: "algoninja" },
  },
  {
    slug: "parkpals",
    name: "ParkPals",
    image: parkpals,
    blurb:
      "iOS app helping dog owners discover, train, and socialize with their pets — with curated training plans and a community feed.",
    skills: [
      "SwiftUI",
      "MongoDB",
      "Node.js",
      "Express",
      "AWS EC2",
      "AWS S3",
      "JWT",
      "REST API",
      "UI/UX",
    ],
    primaryLink: {
      kind: "appstore",
      url: "https://apps.apple.com/us/app/parkpals/id6479857155",
    },
    legal: { tosSlug: "parkpals", privacySlug: "parkpals" },
  },
  {
    slug: "best-friends-network",
    name: "Best Friends Network",
    image: bfn,
    blurb:
      "Teen-focused mental-health social app — built with a SwiftUI client, Go services, and an event-driven AWS backend.",
    skills: [
      "SwiftUI",
      "DynamoDB",
      "Go",
      "Kubernetes",
      "Docker",
      "Redis",
      "AWS EKS",
      "AWS ECR",
      "AWS S3",
      "AWS Lambda",
      "JWT",
      "REST API",
      "WebSockets",
      "APNs",
    ],
    primaryLink: {
      kind: "appstore",
      url: "https://apps.apple.com/us/app/best-friends-network/id1573517037",
    },
  },
];

export const findProject = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);
