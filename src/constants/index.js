import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  nisum,
  iomechs,
  carrent,
  jobit,
  tripguide,
  flutter,
  nestjs,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Flutter Developer",
    icon: flutter,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Redux And Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Nest JS",
    icon: nestjs,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
];

const experiences = [
  {
    title: "Associate Software Engineer",
    company_name: "IOMECHS",
    icon: iomechs,
    iconBg: "#00000",
    date: "June 2020 - Dec 2020",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Developing UI of the Mobile Application using React Native along with Redux and Redux observable.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "NISUM",
    icon: nisum,
    iconBg: "#E6DEDD",
    date: "DEC 2020 - NOW",
    points: [
      "Started as a JavaScript React Developer. Gradually transformed into a full stack developer and continuously learning about Backend and system designs and bringing ideas to Life.",
      "Successfully executed an internship training program, where I along with another colleague have trained a group of interns on React and redux and successfully launched a POC",
      "Have done multiple POC for clients",
      "Have been involved in remote interviews",
      "Have experience of working with remote teams",
      "Employee training for helping them understand the system design and have sessions where they can do hands on",
      "Have worked on Backend application developed using Nest JS and NX mono repo and a large scale Frontend application using React, Redux, React Query and webpack",
      "Document the coding practices, structures and flows creating Architecture diagrams for better understanding of the flow and systems",
      "Have effective communication with peers and take parts in code reviews and Sprint planning."
    ],
  },
];

const testimonials = [
 
];

const projects = [
  {
    name: "E-commerce Mobile App",
    description:
      "Cross platform Mobile E commerce app. Where user can get the list of products and can search products. It contains checkout page and product detailed page",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Go",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Food Ordering App",
    description:
      "A minimal food ordering app for user - Where they can search for food, add it to their cart, and proceed to checkout ",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Getx",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Node JS",
        color: "green-text-gradient",
      },
      {
        name: "Mongo DB",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
