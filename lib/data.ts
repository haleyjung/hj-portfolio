import React from "react";
import { v4 } from "uuid";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import bookfaceGif from "@/public/bookface.webp";
import tagmeGif from "@/public/tagme.webp";

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
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
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
      "An iOS app that generates hashtags from user-uploaded photos using machine learning image analysis API and supports offline data access with Firebase.",
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
  {}
] as const;

export const skillsData = [
  { id: v4(), name: "TypeScript" },
  { id: v4(), name: "JavaScript" },
  { id: v4(), name: "React" },
  { id: v4(), name: "Redux" },
  { id: v4(), name: "React Native" },
  { id: v4(), name: "Next.js" },
  { id: v4(), name: "Tailwind CSS" },
  { id: v4(), name: "Node.js" },
  { id: v4(), name: "Express" },
  { id: v4(), name: "C#" },
  { id: v4(), name: ".NET" },
  { id: v4(), name: "Redis" },
  { id: v4(), name: "GraphQL" },
  { id: v4(), name: "PostgreSQL" },
  { id: v4(), name: "MongoDB" },
  { id: v4(), name: "Selenium" },
  { id: v4(), name: "Git" },
  { id: v4(), name: "Azure" },
  { id: v4(), name: "AWS" },
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

export const recentLearnings = ['Next.js', 'Golang'] as const;