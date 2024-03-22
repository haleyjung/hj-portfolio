import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import bookfaceGif from "@/public/bookface.gif";
import tagmeGif from "@/public/tagme.gif";

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
    id: 1,
    title: "BookFace",
    description:
      "I worked as a full stack developer and PM on this social cataloging site, and built a real time group video chat and user's personalized pages with data visualization.",
    imageUrl: bookfaceGif,
    githubUrl: "https://github.com/MarianTLibrarian/BookFace",
    tags: [
      {
        id: 1,
        stack: "React"
      },
      {
        id: 2,
        stack: "NodeJS"
      },
      {
        id: 3,
        stack: "Firebase"
      },
      {
        id: 4,
        stack: "Material UI"
      },
      {
        id: 5,
        stack: "Socket.io"
      },
    ],
  },
  {
    id: 2,
    title: "TagMe",
    description:
      "An iOS application that generates hashtags from photos by using Google Cloud Vision API's machine learning image analysis.",
    imageUrl: tagmeGif,
    githubUrl: "https://github.com/haleyjung/TagMe",
    tags: [
      {
        id: 1,
        stack: "React Native"
      },
      {
        id: 2,
        stack: "Expo"
      },
      {
        id: 3,
        stack: "styled-components"
      },
      {
        id: 4,
        stack: "Firebase"
      }
    ],
  }
] as const;

export const experiencesData = [
  {
    id: 1,
    title: "BA in Visual and Critical Studies",
    location: "SAIC, Chicago",
    description:
      "With an interest in Arts Business and Administration, I organized various events and exhibitions, each time finding myself instinctively drawn to building a website. I vividly recall crafting and deploying my first masterpiece in Grade 6 using Dreamweaver and Adobe Flash: a sharks database website with animated fishes. Little did I realize that this early passion would shape my career, blending my love for the arts with the boundless possibilities of the digital realm.",
    icon: React.createElement(LuGraduationCap),
    date: "2017",
    tags: [
      {
        id: 1,
        trait: "Creativity"
      },
      {
        id: 2,
        trait: "Self-motivated"
      },
      {
        id: 2,
        trait: "Passionate"
      },
    ],
  },
  {
    id: 2,
    title: "Intern ➡️ Manager",
    location: "Almine Rech Gallery, New York",
    description:
      "I spearheaded implementing new technologies to streamline product management workflows, encompassing database migration, web development, and API integrations for emails and QR code functionalities. Wearing multiple hats, I managed a diverse portfolio of products and projects, overseeing all aspects from defining objectives, planning, documenting, resource allocation to stakeholder collaboration, and quality assurance. When I was offered a senior leadership position, it propelled me to ponder where I see myself in the next 5 years, and I decided to pursue what I had been imagining - software engineering.",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2022",
    tags: [
      {
        id: 1,
        trait: "Product management"
      },
      {
        id: 2,
        trait: "Strategic-mided"
      },
      {
        id: 3,
        trait: "Adaptability"
      },
      {
        id: 4,
        trait: "Prioritization"
      },
      {
        id: 4,
        trait: "Communication"
      },
    ],
  },
  {
    id: 3,
    title: "Web Developer",
    location: "PnC, Remote - Korea",
    description:
      "While employed full-time at the gallery during the day, I dedicated my evenings to web development, collaborating remotely with a B2B company in Korea. Taking the lead on early branding initiatives following a change in company ownership and a significant shift in business direction, I piloted the overhaul of the design system, from logo to website and technical documentation. I also developed reusable, modular UI components in React with JavaScrip for future application, playing a role in reshaping the company's digital footprint.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
    tags: [
      {
        id: 1,
        trait: "Goal-oriented"
      },
      {
        id: 2,
        trait: "Time management"
      },
      {
        id: 3,
        trait: "Teamwork"
      },
    ],
  },
  {
    id: 4,
    title: "Software Engineering Bootcamp",
    location: "Hack Reactor, Remote - New York",
    description:
      "After concluding my tenure as a web developer at PnC, I successfully cleared a technical assessment to secure admission into Hack Reactor, a full-time software engineering bootcamp operating from Monday to Saturday. Subsequently departing from my role at the gallery, I completed an intensive 12-week bootcamp, focusing on full-stack development with React and React Native, alongside essential topics on data structures and algorithms.",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2022",
    tags: [
      {
        id: 1,
        trait: "Proactive"
      },
      {
        id: 2,
        trait: "Resilience"
      },
      {
        id: 3,
        trait: "Learning agility"
      },
    ],
  },
  {
    id: 5,
    title: "Software Engineer",
    location: "Strategic, Remote - New York",
    description:
      "Shortly after graduating, I embarked on a new journey as a full-stack software engineer at a financial services company. Within my first 3 months, I designed and developed a test automation framework solution, resulting in a 95% reduction in testing and deployment time and saving over $10k in monthly cost previously spent on external tools. Collaborating with cross-functional teams, I contributed to the development and testing of various in-house React applications in both JavaScript and TypeScript, as well as backend APIs in NodeJS and C#. These projects included solutions for credit analysis, real-time presentations, and interactive voice response systems.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2024",
    tags: [
      {
        id: 1,
        trait: "Problem-solving"
      },
      {
        id: 2,
        trait: "Result-oriented"
      },
      {
        id: 3,
        trait: "Collaboration"
      },
      {
        id: 4,
        trait: "Self-starter"
      }
    ],
  },
] as const;

export const skillsData = [
  { id: 1, name: "HTML" },
  { id: 2, name: "CSS" },
  { id: 3, name: "JavaScript" },
  { id: 4, name: "TypeScript" },
  { id: 5, name: "React" },
  { id: 6, name: "Next.js" },
  { id: 7, name: "Node.js" },
  { id: 8, name: "Redux" },
  { id: 9, name: "React Native" },
  { id: 10, name: "C#" },
  { id: 11, name: "Tailwind" },
  { id: 12, name: "Express" },
  { id: 13, name: "Redis" },
  { id: 14, name: "GraphQL" },
  { id: 15, name: "MongoDB" },
  { id: 16, name: "PostgreSQL" },
  { id: 17, name: "Git" },
  { id: 18, name: "Azure" },
  { id: 19, name: "AWS" },
  { id: 20, name: "CI/CD" },
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