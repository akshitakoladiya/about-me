import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiMui,
  SiNodedotjs,
  SiGraphql,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiDocker,
  SiGit,
  SiPostman,
  SiJira,
  SiNestjs,
  SiStripe,
  SiFastify,
  SiTrello,
  SiFormik,
  SiBootstrap,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { navigation } from "./navigation";

export interface Profile {
  name: string,
  designation: string,
  location: string,
  email: string,
  phone: string,
  resume: string,
  github: string,
  linkedin: string,
  experience: string,
  description: string,
  technologies: string[],
}

export interface Statistic {
  id: number;
  value: number;
  suffix: string;
  label: string;
}

export interface Skill {
  name: string;
  icon: React.ElementType;
  level: "Expert" | "Advanced" | "Intermediate";
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Experience {
  id: number;
  company: string;
  client?: string;
  role: string;
  location: string;
  employmentType: string;
  start: string;
  end: string;
  summary: string[];
  achievements: string[];
  technologies: string[];
}

const profile: Profile = {
  name: "Akshita Koladiya",
  designation: "Senior Full Stack Developer",
  location: "Stuttgart, Germany",
  email: "akshitakoladiya9697@gmail.com",
  phone: "+49 15567435775",
  resume: "/resume/Akshita-Koladiya-CV.pdf",
  github: "https://github.com/akshitakoladiya",
  linkedin: "https://linkedin.com/in/akshita-koladiya-b28977140",
  experience: "8+ Years",
  description: "Building enterprise software using React, Next.js, Node.js and GraphQL.",
  technologies: [
    "Javascript", "Typescript", "React", "Next.js", "Node.js", "Nest.js",
    "GraphQL", "MongoDB", "React Native", "Firebase", "Express.js"
  ],
}

const statistics: Statistic[] = [
  {
    id: 1,
    value: 8,
    suffix: "+",
    label: "Years Experience",
  },
  {
    id: 2,
    value: 6,
    suffix: "+",
    label: "Enterprise Projects",
  },
  {
    id: 3,
    value: 1000,
    suffix: "+",
    label: "Orders / Day",
  },
  {
    id: 4,
    value: 450,
    suffix: "+",
    label: "Healthcare Workflows",
  },
]

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact, level: "Expert" },
      { name: "React Native", icon: SiReact, level: "Expert" },
      { name: "Next.js", icon: SiNextdotjs, level: "Expert" },
      { name: "TypeScript", icon: SiTypescript, level: "Advanced" },
      { name: "Material UI", icon: SiMui, level: "Advanced" },
      { name: "Bootstape 5", icon: SiBootstrap, level: "Advanced" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, level: "Expert" },
      { name: "GraphQL", icon: SiGraphql, level: "Expert" },
      { name: "Nest.js", icon: SiNestjs, level: "Advanced" },
      { name: "Express", icon: SiExpress, level: "Advanced" },
      { name: "Fastify", icon: SiFastify, level: "Advanced" },
    ],
  },
  {
    title: "Database & Cloud",
    skills: [
      { name: "MongoDB", icon: SiMongodb, level: "Expert" },
      { name: "Firebase", icon: SiFirebase, level: "Expert" },
      { name: "SQL", icon: TbSql, level: "Advanced" },
      { name: "Docker", icon: SiDocker, level: "Intermediate" },
      { name: "AWS", icon: FaAws, level: "Intermediate" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: SiGit, level: "Expert" },
      { name: "Postman", icon: SiPostman, level: "Expert" },
      { name: "Stripe", icon: SiStripe, level: "Expert" },
      { name: "Jira", icon: SiJira, level: "Expert" },
      { name: "Trello", icon: SiTrello, level: "Advanced" },
      { name: "Form.io", icon: SiFormik, level: "Advanced" },
    ],
  },
];

const experiences: Experience[] = [
  {
    id: 1,
    company: "Xebia IT Architects India Private Limited",
    client: "Axis Bank",
    role: "Senior Consultant",
    location: "Remote",
    employmentType: "Full-time",
    start: "Apr 2023",
    end: "Dec 2025",
    summary: ["As a senior consultant at Xebia for Axis Bank's MSME portal, I led frontend modernization using React microfrontend architecture. I redesigned the dashboard with reusable and responsive components, established coding standards through code reviews and pair programming, and worked closely with a team of four developers. We delivered the solution within 1.5 months and reduced production bugs by about 90% while significantly improving maintainability, scalability, and user experience."],
    achievements: [
      "Built React + Next.js banking platform.", "Implemented real-time workflows.", "Worked in Agile environment."
    ],
    technologies: [
      "React", "Next.js", "Node.js", "Redux-saga", "TypeScript"
    ],
  },
  {
    id: 2,
    company: "ScaleTeam Technologies Pvt. Ltd.",
    role: "Senior Full Stack Engineer",
    location: "Surat, Gujarat, India - Onsite",
    employmentType: "Full-time",
    start: "Jun 2017",
    end: "Mar 2023",
    summary: [
      "At ScaleTeam Technologies, I progressed from a Trainee Developer to a Senior Full Stack Engineer, contributing to the development of enterprise web applications across digital marketing, business automation, healthcare, logistics, ERP, and collaboration platforms. Over nearly six years, I gained extensive experience building scalable, secure, and user-focused applications while working in Agile teams throughout the complete software development lifecycle.",
      "I played a key role in developing and enhancing flagship products including ShipMyShopping, GrowKarma, FollowUp2.0, and Nexusz. These platforms empowered businesses through marketing automation, customer engagement, workflow management, and enterprise collaboration. Working closely with product managers, designers, QA engineers, and stakeholders, I transformed business requirements into reliable, production-ready solutions that improved operational efficiency and user experience.",
      "My responsibilities spanned both frontend and backend development, where I designed responsive user interfaces using React.js, developed scalable backend services with Node.js and Express.js, built RESTful APIs, integrated third-party services, implemented secure authentication and role-based authorization, and optimized application performance. I also contributed to architecture discussions, code reviews, deployment processes, and mentoring junior developers, ensuring high-quality software delivery and maintainable codebases.",

    ],
    achievements: [
      "Developed modern, scalable full-stack web applications using React.js, Node.js, TypeScript, React Native, MongoDB, and GraphQL.",
      "Delivered enterprise products including LynxCare, ShipMyShoppings, GrowKarma, FollowUp2.0, and Nexusz.",
      "Built responsive dashboards, reusable UI components, and intuitive user experiences.",
      "Designed and integrated secure RESTful APIs and third-party services.",
      "Implemented authentication, authorization, and role-based access control.",
      "Improved application performance, scalability, and maintainability through clean architecture and reusable components.",
      "Collaborated with cross-functional teams in Agile environments, participating in sprint planning, code reviews, testing, deployment, and production support.",
      "Mentored junior developers and contributed to maintaining high engineering standards and best practices.",
      "Best Performer Employee Award",
    ],
    technologies: [
      "JavaScript",
      "TypeScript",
      "React Native",
      "React.js",
      "Node.js",
      "Meteor.js",
      "Next.js",
      "Nest.js",
      "MongoDB",
      "GraphQL",
      "Firebase",
      "JWT Authentication",
      "Redux Toolkit",
      "REST APIs",
      "Material UI",
      "AWS S3",
      "Git",
      "Agile methodology",
      "Payment getway",
    ],
  },
];

export const footer = {
  quickLinks: navigation,
  contact: {
    email: "akshitakoladiya9697@gmail.com",
    location: "Stuttgart, Germany",
  },
};

export interface portfolio {
  profile: Profile;
  statistics: Statistic[];
  skills: SkillCategory[],
  experience: Experience[],
}

export const portfolioData: portfolio = {
  profile: profile,
  statistics: statistics,
  skills: skillCategories,
  experience: experiences,
};