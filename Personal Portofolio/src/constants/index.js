import {
  css,
  html,
  javascript,
  react,
  tailwind,
  project1,
  project3,
  project2,
} from "../assets/images/index.js";
import { email, linkedin, phone } from "../assets/icons/index.js";
export const navLinks = [
  { href: "about", label: "About", link: "#about" },
  { href: "projects", label: "Projects", link: "#projects" },
  { href: "contact", label: "Contact", link: "#contact" },
  {
    link: "https://drive.google.com/file/d/1DN4o5lMQ9hbEjmLpsG1msl9Vj8xrEcWT/view?usp=sharing",
    label: "Resume",
    target: "_blank",
    isExternal: true,
    rel: "noopener noreferrer",
  },
];
export const skillsLinks = [
  {
    imgUrl: html,
  },
  {
    imgUrl: css,
  },
  {
    imgUrl: javascript,
  },
  {
    imgUrl: react,
  },
  {
    imgUrl: tailwind,
  },
];

export const projects = [
  {
    imgURL: project1,
    name: "Nike Homepage",
    label:
      "This project recreates the static and responsive home page of the Nike website, focusing on its iconic design and user experience. ",
    tools: [
      { tool: "React " },
      { tool: "Javascript" },
      { tool: "HTML" },
      { tool: "Tailwind CSS" },
    ],
    links: [
      {
        name: "View project",
        link: "https://nikeprototype.netlify.app/",
        rel: "noopener noreferrer",
        target: "_blank",
      },
      {
        name: "Source code",
        link: "https://github.com/Sameer817369/Front-End-Project/tree/main/Nike%20website",
        rel: "noopener noreferrer",
        target: "_blank",
      },
    ],
  },
  {
    imgURL: project2,
    name: "Graphics Shop",
    label:
      "This static website serves as the foundation for an online marketplace dedicated to graphics cards. It provides a user-friendly interface for customers to explore and purchase a wide range of high-performance GPUs.",
    tools: [{ tool: "HTML" }, { tool: "CSS" }],
    links: [
      {
        name: "View project",
        link: "https://graphicshop.netlify.app/",
        rel: "noopener noreferrer",
        target: "_blank",
      },
      {
        name: "Source code",
        link: "https://github.com/Sameer817369/Front-End-Project/tree/main/Home%20Page",
        rel: "noopener noreferrer",
        target: "_blank",
      },
    ],
  },
  {
    imgURL: project3,
    name: "To-Do-List app",
    label:
      "This to-do list application provides a user-friendly interface for managing tasks and staying organized. Users can create new lists, add tasks to those lists, and delete tasks ",
    tools: [
      { tool: "React" },
      { tool: "HTML" },
      { tool: "CSS" },
      { tool: "Javascript" },
    ],
    links: [
      {
        name: "View project",
        link: "https://todolistapp34.netlify.app/",
        rel: "noopener noreferrer",
        target: "_blank",
      },
      {
        name: "Source code",
        link: "https://github.com/Sameer817369/React-Projects/tree/main/my-react-projects",
        rel: "noopener noreferrer",
        target: "_blank",
      },
    ],
  },
];
export const contactLinks = [
  {
    imgURL: email,
    title: "Email",
    label: "Feel free to reach out to me for any inquiries or collaborations.",
    links: [
      {
        name: "parajulisameer2061@gmail.com",
        link: "mailto:parajulisameer2061@gmail.com",
      },
    ],
  },
  {
    imgURL: phone,
    title: "Phone",
    label: "You can contact me via phone during business hours.",
    links: [{ name: "+9861525921", link: "tel:+9861525921" }],
  },
  {
    imgURL: linkedin,
    title: "Linkedin",
    label:
      "Connect with me on LinkedIn to discuss job opportunities and professional connections.",
    links: [
      {
        name: "Sameer Parajuli",
        link: "https://www.linkedin.com/in/sameer-parajuli-bsc-hons-computing-47938331b/",
        target: "_blank",
        rel: "noopener noreferrer",
      },
    ],
  },
];

export const footerLinks = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Contact",
    link: "#contact",
  },
  {
    name: "Resume",
    link: "https://drive.google.com/file/d/1DN4o5lMQ9hbEjmLpsG1msl9Vj8xrEcWT/view?usp=sharing",
    target: "_blank",
    rel: "noopener noreferrer",
  },
];
