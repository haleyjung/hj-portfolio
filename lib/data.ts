import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import bookfaceGif from "@/public/bookface.png";
import tagmeGif from "@/public/tagme.png";
import { v4 } from "uuid";

export const links = [
  {
    name: "👋",
    hash: "#intro",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    id: v4(),
    title: "BookFace",
    description:
      "A social cataloging site with Firebase OAuth, live search, event hosting, group video chat, and personalized user pages with reading statistics.",
    imageUrl: bookfaceGif,
    githubUrl: "https://github.com/MarianTLibrarian/BookFace",
    tags: [
      {
        id: v4(),
        stack: "React"
      },
      {
        id: v4(),
        stack: "NodeJS"
      },
      {
        id: v4(),
        stack: "Firebase"
      },
      {
        id: v4(),
        stack: "Material UI"
      },
      {
        id: v4(),
        stack: "Socket.io"
      },
    ],
  },
  {
    id: v4(),
    title: "TagMe",
    description:
      "An iOS app that generates hashtags from user-uploaded photos using machine learning image analysis API and supporting offline data access.",
    imageUrl: tagmeGif,
    githubUrl: "https://github.com/haleyjung/TagMe",
    tags: [
      {
        id: v4(),
        stack: "React Native"
      },
      {
        id: v4(),
        stack: "Expo"
      },
      {
        id: v4(),
        stack: "styled-components"
      },
      {
        id: v4(),
        stack: "Firebase"
      }
    ],
  }
] as const;

export const experiencesData = [
  {
    id: v4(),
    title: "BA in Visual and Critical Studies",
    location: "SAIC, Chicago",
    description:
      "With an interest in Arts Business and Administration, I organized various events and exhibitions, each time finding myself instinctively drawn to building a website. I vividly recall crafting and deploying my first masterpiece in Grade 6 using Dreamweaver and Adobe Flash: a sharks database website with animated fishes. Little did I realize that this early passion would shape my career, blending my love for the arts with the boundless possibilities of the digital realm.",
    icon: React.createElement(LuGraduationCap),
    date: "2017",
    tags: [
      {
        id: v4(),
        trait: "Creativity"
      },
      {
        id: v4(),
        trait: "Self-motivated"
      },
      {
        id: v4(),
        trait: "Passionate"
      },
    ],
  },
  {
    id: v4(),
    title: "Intern ➡️ Manager",
    location: "Almine Rech Gallery, New York",
    description:
      "I spearheaded implementing new technologies to streamline product management workflows, encompassing database migration, web development, and API integrations for emails and QR code functionalities. Wearing multiple hats, I managed a diverse portfolio of products and projects, overseeing all aspects from defining objectives, planning, documenting, resource allocation to stakeholder collaboration, and quality assurance. When I was offered a senior leadership position, it propelled me to ponder where I see myself in the next 5 years, and I decided to pursue what I had been imagining - software engineering.",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2022",
    tags: [
      {
        id: v4(),
        trait: "Product management"
      },
      {
        id: v4(),
        trait: "Strategic-minded"
      },
      {
        id: v4(),
        trait: "Adaptability"
      },
      {
        id: v4(),
        trait: "Prioritization"
      },
      {
        id: v4(),
        trait: "Communication"
      },
    ],
  },
  {
    id: v4(),
    title: "Web Developer",
    location: "PnC, Remote - Korea",
    description:
      "While employed full-time at the gallery during the day, I dedicated my evenings to web development, collaborating remotely with a B2B company in Korea. Taking the lead on early branding initiatives following a change in company ownership and a significant shift in business direction, I piloted the overhaul of the design system, from logo to website and technical documentation. I also developed reusable, modular UI components in React with JavaScrip for future application, playing a role in reshaping the company's digital footprint.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
    tags: [
      {
        id: v4(),
        trait: "Goal-oriented"
      },
      {
        id: v4(),
        trait: "Time management"
      },
      {
        id: v4(),
        trait: "Teamwork"
      },
    ],
  },
  {
    id: v4(),
    title: "Software Engineering Bootcamp",
    location: "Hack Reactor, Remote - New York",
    description:
      "After concluding my tenure as a web developer at PnC, I successfully cleared a technical assessment to secure admission into Hack Reactor, a full-time software engineering bootcamp operating from Monday to Saturday. Subsequently departing from my role at the gallery, I completed an intensive 12-week bootcamp, focusing on full-stack development with React and React Native, alongside essential topics on data structures and algorithms.",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2022",
    tags: [
      {
        id: v4(),
        trait: "Proactive"
      },
      {
        id: v4(),
        trait: "Resilience"
      },
      {
        id: v4(),
        trait: "Learning agility"
      },
    ],
  },
  {
    id: v4(),
    title: "Software Engineer",
    location: "Strategic, Remote - New York",
    description:
      "Shortly after graduating, I embarked on a new journey as a full-stack software engineer at a financial services company. Within my first 3 months, I designed and developed a test automation framework solution, resulting in a 95% reduction in testing and deployment time and saving over $10k in monthly cost previously spent on external tools. Collaborating with cross-functional teams, I contributed to the development and testing of various in-house React applications in both JavaScript and TypeScript, as well as backend APIs in NodeJS and C#. These projects included solutions for credit analysis, real-time presentations, and interactive voice response systems.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2024",
    tags: [
      {
        id: v4(),
        trait: "Problem-solving"
      },
      {
        id: v4(),
        trait: "Result-oriented"
      },
      {
        id: v4(),
        trait: "Collaboration"
      },
      {
        id: v4(),
        trait: "Self-starter"
      }
    ],
  },
] as const;

export const skillsData = [
  { id: v4(), name: "HTML" },
  { id: v4(), name: "CSS" },
  { id: v4(), name: "JavaScript" },
  { id: v4(), name: "TypeScript" },
  { id: v4(), name: "React" },
  { id: v4(), name: "Next.js" },
  { id: v4(), name: "Node.js" },
  { id: v4(), name: "Redux" },
  { id: v4(), name: "React Native" },
  { id: v4(), name: "C#" },
  { id: v4(), name: "Tailwind" },
  { id: v4(), name: "Express" },
  { id: v4(), name: "Redis" },
  { id: v4(), name: "GraphQL" },
  { id: v4(), name: "MongoDB" },
  { id: v4(), name: "PostgreSQL" },
  { id: v4(), name: "Git" },
  { id: v4(), name: "Azure" },
  { id: v4(), name: "AWS" },
  { id: v4(), name: "CI/CD" },
] as const;

export const haleyActivities = {
  A: 'drinking coffee ☕',
  B: 'walking my dog 🐶',
  C: 'playing video games 🎮',
  D: 'scuba diving 🤿'
} as const;

export const heartEmojis = [
  '❤️', '💖', '💝', '🫶', '💗', '💜', '💓', '💞', '💛', '💘'
] as const;

export const recentLearnings = ['Next.js', 'three.js'] as const;