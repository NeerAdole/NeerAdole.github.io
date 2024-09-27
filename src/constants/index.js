import { accenture, codsoft, gfb, headstarter, jp_morgan, } from "../assets/images";
import {
    bootstrap,
    c,
    css,
    django,
    figma,
    flutter,
    git,
    github,
    html,
    intellij,
    javascript,
    latex,
    linkedin,
    mongodb,
    mui,
    mysql,
    nextjs,
    nodejs,
    pycharm,
    python,
    react,
    neer,
    boxes,
    vite
} from "../assets/icons";
import { NextRequest } from "next/server";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: latex,
        name: "LaTeX",
        type: "frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML5",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "backend",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: pycharm,
        name: "PyCharm",
        type: "IDE",
    },
    {
        imageUrl: vscode,
        name: "VS Code",
        type: "Frontend",
    },
    {
        imageUrl: vite,
        name: "Vite",
        type: "Frontend",
    },
    {
        imageUrl: bootstrap,
        name: "Bootstrap",
        type: "Frontend",
    },
    {
        imageUrl: postman,
        name: "Postman",
        type: "Backend",
    },
    {
        imageUrl: intellij,
        name: "IntelliJ IDEA",
        type: "IDE",
    },
    {
        imageUrl: figma,
        name: "Figma",
        type: "UI/UX",
    },
    {
        imageUrl: mysql,
        name: "My SQL",
        type: "backend",
    },
    {
        imageUrl: flutter,
        name: "Flutter",
        type: "Frontend",
    },
    {
        imageUrl: django,
        name: "Django",
        type: "Framework",
    },
    {
        imageUrl: firebase,
        name: "Firebase",
        type: "Backend",
    },
    {
        imageUrl: bootstrap,
        name: "C++",
        type: "Backend",
    },
];

export const experiences = [
    {
        title: "Software Engineering Job Simulation",
        company_name: "Accenture Nordic",
        icon: accenture,
        iconBg: "#accbe1",
        date: "Sep 2024",
        points: [
            "Successfully designed and implemented cloud-based solutions, demonstrating expertise in technical requirements analysis, infrastructure selection, and IaaS/PaaS implementation.",
            "Implemented robust security measures, including IAM policies, SDLC security practices, and risk assessments.",
            "Demonstrated proficiency in reading, understanding, and debugging code. Conducted rigorous unit and user acceptance testing to deliver high-quality solutions.",
            "Gained hands-on experience with agile development methodologies, including iterative development, collaboration, and continuous improvement.",
            "Applied DevOps principles to streamline development and operations processes, fostering collaboration and automation.",
        ],
    },
    {
        title: "Software Engineering Lite Job Simulation",
        company_name: "JP Morgan Chase & Co.",
        icon: jp_morgan,
        iconBg: "#accbe1",
        date: "Sep 2024",
        points: [
            "Designed and implemented a new Reward Value class to enhance the functionality of the existing RewardsConverter system.",
            "Utilized Java to create a robust and efficient class capable of converting cash values into corresponding airline miles.",
            "Employed GitHub for version control and collaboration, contributing to a streamlined development process.",
            "Developed comprehensive test suites to ensure code quality and reliability, covering various scenarios and edge cases.",
        ],
    },
    {
        title: "Software Engineering Fellow",
        company_name: "Headstarter AI",
        icon: headstarter,
        iconBg: "#fbc3bc",
        date: "Jul 2024 - Sep 2024",
        points: [
            "Built and deployed 5 AI projects using React, Next.js, Firebase, and CI/CD practices.",
            "Developed a customer support agent with OpenAI and Pinecone using a custom RAG pipeline.",
            "Collaborated with 3 fellows on a SaaS flashcard generator using Llama 3.1 and Stripe for payments.",
            "Created a web scraper with LangChain and OpenAI GPT-4 to enhance query responses.",
            "Scaled apps based on user feedback and participated in sessions with top engineers.",
        ],
    },
    {
        title: "App development Intern",
        company_name: "CodSoft",
        icon: codsoft,
        iconBg: "#b7e4c7",
        date: "Jul 2024 - Aug 2024",
        points: [
            "Developed three web apps: a To-Do List, Quote of the Day, and Alarm Clock app.",
            "Implemented features like task management, daily updates, sharing options, alarm customization, and local data storage.",
        ],
    },
    {
        title: "Ambassador",
        company_name: "Girls For Business",
        icon: gfb,
        iconBg: "#a2d2ff",
        date: "Dec 2022 - Present",
        points: [
            "Advocating for young women in business by representing the organization at events and online.",
            "Organizing workshops and mentoring sessions to support aspiring women in business and STEM.",
            "Collaborating with a global team to promote the organization's mission and engage with the community.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Resume',
        iconUrl: Resume,
        link: '',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/NeerAdole',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/neer-adole',
    }
];

export const projects = [
    {
        iconUrl: neer,
        theme: 'btn-back-green',
        name: 'This Website!',
        description: 'The portfolio is crafted to showcase work experience, projects, and skills in a visually appealing and interactive manner, utilizing React for responsive UI components and leveraging Three.js for rendering complex 3D graphics to enhance user experience.',
        link: 'https://github.com/NeerAdole',
    },
    {
        iconUrl: boxes,
        theme: 'btn-back-red',
        name: 'Inventory Tracker',
        description: '• Developed a full-stack inventory tracking system using Next.js, Firebase, and Material-UI, showcasing proficiency in modern web technologies.<br />• Implemented real-time data management and user authentication with Firebase, ensuring secure and efficient handling of inventory information.<',
        link: 'https://github.com/NeerAdole/inventory-tracker',
    },
];