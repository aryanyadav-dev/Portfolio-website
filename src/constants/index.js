import {
  tcet,
  startup,
  opensource,
  vercel,
  blockchain,
  postal,
  space,
  llm,
  linklace,
  sih,
  tis,
} from "../assets";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillHtml5,
} from "react-icons/ai";

import {
  SiDjango,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiCplusplus,
  SiC,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiArduino,
  SiWeb3Dotjs,
  SiTwilio,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiKotlin,
  SiSwift,
  SiTensorflow,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiVercel,
  SiTypescript,
  SiSpringboot,
  SiNodedotjs,
  SiOpencv,
  SiDocker,
  SiSqlite,
  SiChartdotjs,
  SiStreamlit,
  SiGooglemaps,
  SiGraphql,
  SiPrisma,
  SiKeras,
  SiHibernate,
  SiJquery,
} from "react-icons/si";

import {
  FaAws,
} from "react-icons/fa";

import {
  IoMdFlask
} from "react-icons/io";

import {DiCss3, DiDocker, DiJava, DiSqllite} from "react-icons/di";

export const resumeLink = "https://drive.google.com/file/d/1nCpbwdgbjqqxTsbnhi3DXu7eO3Hqt_ur/view?usp=sharing";
export const repoLink = "https://github.com/aryanyadav-dev/Portfolio";

export const callToAction = "https://www.linkedin.com/in/-aryanyadav/";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "certifications", 
    title: "Certifications",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

export const educationList = [
  {
    id: "education-1",
    icon: tcet,
    title: "Thakur College of Engineering and Technology",
    degree: "Bachelor of Technology",
    content1: "Major: Computer Engineering",
    content2: "Minor: Artificial Intelligence",
  },
  {
    id: "education-2",
    icon: tis,
    title: "Thakur International School",
    degree: "ICSE",
    content1: "Scored 92% and passed Grade X",
  },
];

export const achievements = [
  {
    id: "a-1",
    icon: sih,
    event: "Smart India Hackathon",
    position: "Honourable Mention",
    content1: "Team Lead for Team Cheatcode",
    content2: "Top 10 winner in the Internal Hackathon and qualified for National Round",
    github: "https://github.com/aryanyadav-dev/AI-Postal-Service",
  },
];


export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: DiJava,
        name: "Java",
      },
      {
        id: "pl-2",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-3",
        icon: SiCplusplus,
        name: "C++",
      },
      {
        id: "pl-4",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-5",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "pl-6",
        icon: SiJavascript,
        name: "Javascript",
      },
      {
        id: "pl-7",
        icon: SiC,
        name: "C",
      },
      {
        id: "pl-10",
        icon: SiTypescript,
        name: "TypeScript",
      },
      {
        id: "pl-11",
        icon: SiSolidity,
        name: "Solidity",
      }
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-2",
        icon: SiTensorflow,
        name: "Tensorflow",
      },
      {
        id: "f-1",
        icon: SiDjango,
        name: "Django",
      },
      {
        id: "f-3",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-4",
        icon: SiNextdotjs,
        name: "NextJS",
      },
      {
        id: "f-5",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "f-6",
        icon: SiExpress,
        name: "ExpressJS",
      },
      {
        id: "f-7",
        icon: SiSpringboot,
        name: "Spring Boot",
      },
      {
        id: "f-8",
        icon: SiNodedotjs,
        name: "NodeJS",
      },
      {
        id: "f-8",
        icon: IoMdFlask,
        name: "Flask",
      }
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiFirebase,
        name: "Firebase",
      },
      {
        id: "t-2",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-3",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-4",
        icon: SiMongodb,
        name: "MongoDB",
      },
      {
        id: "t-5",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-6",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-7",
        icon: DiDocker,
        name: "Docker",
      },
      {
        id: "t-8",
        icon: FaAws,
        name: "AWS",
      },
      {
        id: "t-9",
        icon: SiVercel,
        name: "Vercel",
      },
      {
        id: "t-10",
        icon: SiGooglecloud,
        name: "Google Cloud",
      },
      {
        id: "t-10",
        icon: SiArduino,
        name: "Arduino",
      },
      {
        id: "t-10",
        icon: SiOpenai,
        name: "OpenAI",
      },
    ],
  },
];

export const experiences = [
  
];

export const certifications = [
  {
    id: 1,
    title: "AWS Cloud Practitioner",
    institution: "Amazon Web Services",
    link: "https://www.credly.com/badges/45f97ca5-145d-4125-80da-0522a0c9b91e/public_url",
  },
  {
    id: 2,
    title: "Postman API Fundamentals Student Expert",
    institution: "Postman",
    link: "https://badgr.com/public/assertions/Ld-5DVqMQICNUrpwAE4XWA",
  },
  {
    id: 3,
    title: "Google Cloud Skill Certifications",
    institution: "Google Cloud",
    link: "https://www.cloudskillsboost.google/public_profiles/8a6b862a-e747-41c8-add6-bcaccf8019d6",
  },
];

export const projects = [
  {
    id: "project-1",
    title: "LLM Aggregator",
    github: "https://github.com/aryanyadav-dev/LLM-aggregator",
    image: llm,
    content:
      "Developed a Flask-based web app integrating GPT-4, LLaMa, Claude, Bard, Gemini, and GPT-2 for response generation. Features include sentiment analysis, voice input processing, real-time database management, OAuth 2.0 email notifications, and caching for performance optimization.",
    stack: [
      {
        id: "icon-1",
        icon: SiNextdotjs,
        name: "NextJS"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
      {
        id: "icon-3",
        icon: SiOpenai,
        name: "OpenAI"
      },
      {
        id: "icon-4",
        icon: SiSqlite,
        name: "SQLite"
      },
      {
        id: "icon-5",
        icon: SiTypescript,
        name: "Typescript"
      },
      {
        id: "icon-6",
        icon: FaAws,
        name: "AWS"
      },
      {
        id: "icon-8",
        icon: SiVercel,
        name: "Vercel"
      },
    ],
  },
  {
    id: "project-2",
    title: "ScrapeFlow - Workflow SaaS App",
    github:"https://github.com/aryanyadav-dev/scrapeflow-SaaS",
    image: linklace,
    content:
      "Built a Full Stack SaaS App that lets users build web scrapers visually using Workflow Builder powered by AI with a credential and scheduling system. This application allows users to create modify and delete workflows through a drag drop interface with integration of AI which streamlines the scraping process.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "ReactJS"
      },
      {
        id: "icon-2",
        icon: SiNextdotjs,
        name: "NextJS"
      },
      {
        id: "icon-3",
        icon: SiTypescript,
        name: "TypeScript"
      },
      {
        id: "icon-4",
        icon: SiJavascript,
        name: "JavaScript"
      },
      {
        id: "icon-5",
        icon: SiMongodb,
        name: "MongoDB"
      },
      {
        id: "icon-6",
        icon: DiCss3,
        name: "CSS"
      },
      {
        id: "icon-7",
        icon: SiPrisma,
        name: "Prisma"
      }
    ],
  },
  {
    id: "project-3",
    title: "BlockVerse - Blockchain Trading App",
    github: "https://github.com/aryanyadav-dev/BlockVerse-app",
    image: blockchain,
    content:
      "Developed a Web 3.0 application  integrating styled components for styling, Metamask for authentication, Thirdweb SDK for creating and minting cryptocurrency tokens, and Sanity.io with GROQ for data storage and retrieval. Implement token send/receive functionality on the Blockchain",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-3",
        icon: SiNextdotjs,
        name: "NextJS"
      },
      {
        id: "icon-4",
        icon: SiJavascript,
        name: "JavaScript"
      },
      {
        id: "icon-5",
        icon: DiCss3,
        name: "CSS"
      },
      {
        id: "icon-6",
        icon: SiFirebase,
        name: "Firebase"
      },
      {
        id: "icon-6",
        icon: SiWeb3Dotjs,
        name: "Web3JS"
      },
      {
        id: "icon-7",
        icon: SiChartdotjs,
        name: "ChartJS"
      },
    ],
  },
  {
    id: "project-4",
    title: "AI Postal Management System",
    github: "https://github.com/aryanyadav-dev/AI-Postal-Service",
    image: postal,
    content:
      "For Smart India Hackathon, we addressed postal service delivery challenges by correcting wrong addresses using a scanning mechanism and natural language processing. We also implemented features like green routing and carbon footprint tracking to enhance sustainability.",
    stack: [
      {
        id: "icon-1",
        icon: AiFillHtml5,
        name: "HTML"
      },
      {
        id: "icon-2",
        icon: DiCss3,
        name: "CSS"
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "JavaScript"
      },
      {
        id: "icon-4",
        icon: SiMysql,
        name: "SQL"
      },
      {
        id: "icon-5",
        icon: SiPython,
        name: "Python"
      },
      {
        id: "icon-6",
        icon: IoMdFlask,
        name: "Flask"
      },
      {
        id: "icon-7",
        icon: SiTensorflow,
        name: "Tensorflow"
      },
      {
        id: "icon-8",
        icon: SiOpencv,
        name: "OpenCV"
      },
      {
        id: "icon-9",
        icon: SiTwilio,
        name: "Twilio"
      },
    ],
  },
  {
    id: "project-5",
    title: "Filmmaking Post-Production Workflow Manager",
    github:"https://github.com/aryanyadav-dev/post-prod-filmmaking-workflow",
    image: startup,
    content:
      "Built a comprehensive platform to manage the post-production workflow, including editing schedules, file tracking, and resource allocation.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "ReactJS"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
      {
        id: "icon-3",
        icon: SiSpringboot,
        name: "Spring Boot"
      },
      {
        id: "icon-4",
        icon: SiTypescript,
        name: "TypeScript"
      },
      {
        id: "icon-5",
        icon: SiJquery,
        name: "Jquery"
      },
      {
        id: "icon-6",
        icon: SiHibernate,
        name: "Hibernate"
      },
    ],
  },
  {
    id: "project-6",
    title: "Screenshot to Code",
    github: "https://github.com/aryanyadav-dev/ss-to-code",
    image: vercel,
    content:
      "Developed a web application that helps you code your ideas effortlessly by uploading screenshots and screen recordings and convert them into full stack coded applications built using ReactJS, Javascript and Typescript. Docker ensures easy deployment and consistent environment management for developers.",
    stack: [
      {
        id: "icon-1",
        icon: AiFillHtml5,
        name: "HTML"
      },
      {
        id: "icon-4",
        icon: DiCss3,
        name: "CSS"
      },
      {
        id: "icon-4",
        icon: SiJavascript,
        name: "JavaScript"
      },
      {
        id: "icon-4",
        icon: SiDocker,
        name: "Docker"
      },
      {
        id: "icon-5",
        icon: SiReact,
        name: "ReactJS"
      },
      {
        id: "icon-6",
        icon: FaAws,
        name: "AWS"
      },
      {
        id: "icon-7",
        icon: SiTypescript,
        name: "TypeScript"
      },
    ],
  },
  {
    id: "project-7",
    title: "Spectroscopic Analysis of Celestial Objects",
    github:"https://github.com/aryanyadav-dev/celestial-spectroscopy",
    image: space,
    content:
      "Developed a Deep learning model using TensorFlow and Keras to classify synthetic spectral data from celestial objects, including stars, galaxies, and nebulae. Utilizing a Convolutional Neural Network (CNN), the model analyzes spectroscopic features and achieves high accuracy in predicting object classifications.",
    stack: [
      {
        id: "icon-1",
        icon: SiTensorflow,
        name: "Tensorflow"
      },
      {
        id: "icon-2",
        icon: SiKeras,
        name: "Keras"
      },
      {
        id: "icon-3",
        icon: SiPython,
        name: "Python"
      },
      {
        id: "icon-4",
        icon: SiMongodb,
        name: "MongoDB"
      },
    ],
  },
  {
    id: "project-8",
    title: "Computer Networks Resource Website",
    github:"https://github.com/aryanyadav-dev/computer-networks",
    link: "https://comp-networks.vercel.app/",
    image: opensource,
    content: "Developed a Computer Networks resources website made for dept study subject in Thakur College of Engineering for Computer Science Department",
    stack: [
      {
        id: "icon-1",
        icon: SiNextdotjs,
        name: "NextJS"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "Tailwind CSS"
      },
      {
        id: "icon-3",
        icon: SiTypescript,
        name: "Typescript"
      },
    ],
  },
];

export const blogPosts = [
  
];

export const stats = [
  
];

export const extraCurricular = [
  
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/-aryanyadav/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/aryanyadav-dev",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:aryanyadav7825@gmail.com",
  },
];

export const aboutMe = {
    name: "Aryan Yadav",
    tagLine: "TCET '27 | Computer Engineering | Web Developer | AI ML Enthusiast | Web3 & Blockchain",
    intro: "Software Developer crafting innovative digital experiences at the intersection of technology and creativity."
}
