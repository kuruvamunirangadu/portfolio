import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  meta,
  starbucks,
  shopify,
  java,
  python,
  mysql,
  firebase,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI Solutions Engineer",
    icon: creator,
  },
  {
    title: "Fullstack Product Developer",
    icon: web,
  },
  {
    title: "Machine Learning & Deep Learning",
    icon: backend,
  },
  {
    title: "Model Deployment & Automation",
    icon: mobile,
  },
];

const technologies = [
  { name: "Python", icon: python },
  { name: "JavaScript", icon: javascript },
  { name: "React", icon: reactjs },
  { name: "Node.js", icon: nodejs },
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Three.js", icon: threejs },
  { name: "MongoDB", icon: mongodb },
  { name: "PostgreSQL / MySQL", icon: mysql },
  { name: "Firebase", icon: firebase },
  { name: "Docker", icon: docker },
  { name: "Git", icon: git },
  { name: "Java", icon: java },
];

const experiences = [
  {
    title: "Content Writing Intern",
    company_name: "ADM Education & Welfare Society",
    icon: meta,
    iconBg: "#0B0418",
    date: "Oct 2024 – Jan 2025",
    points: [
      "Produced impact-driven stories, posters, and campaign assets to spotlight social initiatives across digital channels.",
      "Collaborated with outreach teams to align messaging and champion community welfare programs.",
      "Boosted engagement by adapting narratives for diverse audiences and platforms.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Krislynx LLP",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "Jan 2024 – Present",
    points: [
      "Spearheading TradeSphere Global, a unified web portal that streamlines cross-border trade workflows.",
      "Delivered responsive, secure React and Node.js modules while coordinating across front-end and back-end squads.",
      "Interpreted complex trade datasets and built Power BI dashboards to surface insights inside the platform.",
    ],
  },
  {
    title: "UI/UX Developer",
    company_name: "Krislynx LLP",
    icon: shopify,
    iconBg: "#23263A",
    date: "Jun 2025 – Present",
    points: [
      "Designed and delivered a student-parent portal that centralizes performance, attendance, and behavioural insights.",
      "Authored wireframes, prototypes, and responsive design systems tailored to both mobile and desktop users.",
      "Partnered with cross-functional stakeholders to iterate on usability tests and ship production-ready interfaces.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Jamuna Foundation",
    icon: meta,
    iconBg: "#1d1836",
    date: "Sep 2025",
    points: [
      "Built a suite of community-focused web tools: campaign landing pages, donation calculators, and resource hubs.",
      "Implemented educational quiz platforms leveraging React, Node.js, and PostgreSQL for secure data flows.",
      "Enabled volunteers to manage content pipelines and program updates through automation-ready workflows.",
    ],
  },
];

const activities = [
  {
    role: "Core Soft Skills",
    organization: "Team Dynamics & Delivery",
    points: [
      "Project management, public relations, and leadership refined through cross-functional initiatives.",
      "Effective communication, critical thinking, and digital marketing for campaign-focused storytelling.",
    ],
  },
  {
    role: "Languages",
    organization: "Multilingual Collaboration",
    points: [
      "Telugu (Fluent) · English (Fluent) · Hindi (Intermediate) · Korean (Basic).",
      "Adaptable communicator able to switch contexts across teams, clients, and global stakeholders.",
    ],
  },
  {
    role: "Interests",
    organization: "Growth & Exploration",
    points: [
      "Problem solving, adaptability, analytical thinking, continuous learning, and creative prototyping.",
      "Designing intelligent systems that blend research, community impact, and entrepreneurial vision.",
    ],
  },
];

const certifications = [
  {
    name: "Integrated M.Tech (CSE)",
    issuer: "Vellore Institute of Technology – AP Campus",
    date: "2022 – 2027",
    description: "Computer Science & Technology program focused on AI-driven engineering, research, and entrepreneurial innovation.",
  },
  {
    name: "Intermediate (Mathematics, Physics, Chemistry)",
    issuer: "Dr. B.R. Ambedkar Junior College, Kurnool",
    date: "2020 – 2022",
    description: "Secured 90.4% aggregate while building foundations in analytical reasoning and problem solving.",
  },
  {
    name: "Secondary School Certificate (SSC)",
    issuer: "APR School, Kurnool",
    date: "2014 – 2020",
    description: "Graduated with a perfect 10 CGPA, leading campus initiatives and cultivating leadership skills early on.",
  },
  {
    name: "Power BI Certification",
    issuer: "Professional Upskilling",
    date: "2024",
    description: "Leveraged Power BI to deliver interactive dashboards and trade analytics for enterprise-grade platforms.",
  },
];

const projects = [
  {
    name: "AI Portfolio Platform",
    description:
      "Interactive personal site showcasing AI-first storytelling with 3D visuals, motion design, and content automation hooks.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "threejs", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: "/Logo1.png",
    source_code_link: "https://github.com/kuruvamunirangadu/kuruvamunirangadu",
  },
  {
    name: "SizeFit AI",
    description:
      "E-commerce size prediction pipeline blending deep learning, ONNX Runtime, and customer feedback loops to boost fit accuracy.",
    tags: [
      { name: "machine-learning", color: "blue-text-gradient" },
      { name: "onnx", color: "green-text-gradient" },
      { name: "nodejs", color: "pink-text-gradient" },
    ],
    image: "/compresser.png",
    source_code_link: "https://github.com/kuruvamunirangadu/sizefit-ai",
  },
  {
    name: "Virtual Try-On Avatar Platform",
    description:
      "Full-stack virtual dressing room using Next.js, FastAPI, and physics-based draping to deliver personalized fit scores.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "fastapi", color: "green-text-gradient" },
      { name: "ai", color: "pink-text-gradient" },
    ],
    image: "/manacuston.png",
    source_code_link: "https://github.com/kuruvamunirangadu/avatar",
  },
  {
    name: "Multi-Task Emotion & Safety Classification",
    description:
      "Production-grade NLP pipeline covering 11 emotions, VAD regression, safety detection, and style-aware intent recognition.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "transformers", color: "green-text-gradient" },
      { name: "docker", color: "pink-text-gradient" },
    ],
    image: "/ser.png",
    source_code_link: "https://github.com/kuruvamunirangadu/miyraa",
  },
  {
    name: "Solar Tracking System",
    description:
      "Computer-vision guided automation that dynamically adjusts solar panels using light intensity analysis and motion tracking.",
    tags: [
      { name: "computer-vision", color: "blue-text-gradient" },
      { name: "opencv", color: "green-text-gradient" },
      { name: "automation", color: "pink-text-gradient" },
    ],
    image: "/Logo2.png",
    source_code_link: "https://github.com/kuruvamunirangadu",
  },
  {
    name: "Smart Traffic Controlling System",
    description:
      "Sensor-powered traffic control that adapts signal timing in real time to reduce congestion and improve road safety.",
    tags: [
      { name: "iot", color: "blue-text-gradient" },
      { name: "automation", color: "green-text-gradient" },
      { name: "python", color: "pink-text-gradient" },
    ],
    image: "/parkplaza.png",
    source_code_link: "https://github.com/kuruvamunirangadu",
  },
  {
    name: "Voice Emotion Recognition",
    description:
      "Machine learning pipeline that analyses real-world audio with MFCC features to classify emotional states in real time.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "ml", color: "green-text-gradient" },
      { name: "audio-processing", color: "pink-text-gradient" },
    ],
    image: "/myasistent.png",
    source_code_link: "https://github.com/kuruvamunirangadu",
  },
  {
    name: "Animal Detection System",
    description:
      "Deep-learning solution supporting wildlife monitoring and collision prevention with edge-friendly deployments.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "computer-vision", color: "green-text-gradient" },
      { name: "edge-ai", color: "pink-text-gradient" },
    ],
    image: "/fire and gas.png",
    source_code_link: "https://github.com/kuruvamunirangadu/Animal-detection-system-using-deep-learning",
  },
  {
    name: "AI Shopping E-Commerce Application",
    description:
      "Spring Boot and Thymeleaf commerce platform with AI-powered customer support, payments, and full order lifecycle management.",
    tags: [
      { name: "springboot", color: "blue-text-gradient" },
      { name: "ai", color: "green-text-gradient" },
      { name: "mysql", color: "pink-text-gradient" },
    ],
    image: "/springboot.png",
    source_code_link: "https://github.com/kuruvamunirangadu/AI-Shopping-E-Commerce-Application",
  },
  {
    name: "Jamuna Foundation Web Suite",
    description:
      "Community-first web apps including donation calculators, campaign landing pages, and volunteer resource hubs.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "postgresql", color: "pink-text-gradient" },
    ],
    image: "/parkplaza.png",
    source_code_link: "https://github.com/kuruvamunirangadu/JamunaFoundationWebDev",
  },
  {
    name: "Educational Quiz Platform",
    description:
      "Fullstack quizzes for learning and engagement featuring adaptive content, insights dashboards, and mobile-ready UX.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "express", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
    ],
    image: "/Logo2.png",
    source_code_link: "https://github.com/kuruvamunirangadu/educational-quiz-platform",
  },
  {
    name: "my-ai-assistant",
    description:
      "Voice-enabled assistant that combines speech recognition, OpenAI APIs, and task automation for everyday productivity.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "openai", color: "green-text-gradient" },
      { name: "automation", color: "pink-text-gradient" },
    ],
    image: "/myasistent.png",
    source_code_link: "https://github.com/kuruvamunirangadu/my-ai-assistant",
  },
  {
    name: "miyraa",
    description:
      "Emotion classification toolkit with ONNX exports, static quantization flows, and lightweight CI for rapid experimentation.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "onnx", color: "green-text-gradient" },
      { name: "devops", color: "pink-text-gradient" },
    ],
    image: "/Logo2.png",
    source_code_link: "https://github.com/kuruvamunirangadu/miyraa",
  },
];

export { services, technologies, experiences, activities, certifications, projects };
