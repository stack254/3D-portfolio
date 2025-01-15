import {
  mobile,
  backend,
  creator1,
  frontend,
  cloud,
  Research,
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
  carrent,
  jobit,
  tripguide,
  threejs,
  project5,
  project1,
  project6,
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
    title: "Front-end Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Entry Specialist",
    icon: creator1,
  },
  
  {
    title: "Research Writer",
    icon:  Research,
  },
];


const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];


const skills = [
  {
    title: "Front-End Developer",
    icon: frontend,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Languages: HTML5, React.JS, and JavaScript (ES6+)",
      "Frameworks: React, Angular.",
      "Styling: Tailwind CSS, Bootstrap, CSS.",
     
    ],
  },
  {
    title: "Back-end Developer",
   
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Languages: Node.js, Python, Ruby.",
      "Frameworks: Express, and Django.",
      "Databases: PostgreSQL, and  MongoDBy.",
     
    ],
  },
  {
    title: "DevOps/Cloud:",
   
    icon: cloud,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Platforms: AWS (EC2, S3, Lambda),  Heroku, Netlify.",
      "Version Control: Git, GitHub, GitLab.",
     
    ],
  },
 
];

const experiences = [
  {
    title: "Internet Cafe Attendant",
    company_name: "Sewati Stationers",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2017 - June 2018",
    points: [
      "Greet and assist customers in using the internet café’s services.",
      "Troubleshoot internet connectivity issues and resolve customer technical problems.",
      "Maintain a clean, organized workspace and ensure that all computers and equipment are functioning properly..",
      "Provide basic computer tutorials to customers unfamiliar with internet or software usage.",
    ],
  },
  {
    title: "Joomla Developer",
    company_name: "F & M Industries",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 2018 - Nov 2019",
    points: [
      "Developed and maintained Joomla websites for F & M Industries LTD.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Customized Joomla templates to fit client branding and functional requirements.",
      "Built custom Joomla modules and extensions to enhance website functionality.",
      "Created responsive templates, custom modules, and optimizing Joomla websites for performance and SEO"
    ],
  },
  {
    title: "Data Entry Specialist",
    company_name: "CloudFactory Kenya",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2020 - Dec 2023",
    points: [
      "Data accuracy and verification..",
      "Numeric data entry, alphanumeric data entry to Expensify client side.",
      "Maintained confidentiality and handled sensitive data with care.",
      "Worked closely with my team and provided constructive feedback to ensure seamless data flow between systems.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Freelance",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "April 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Designed and developed custom web applications for clients in various industries, including e-commerce, healthcare, and finance.",
      "Developed back-end services with Django s, and managed databases using PosgresSQL.",
    ],
  },
];

/*
const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];
*/

const projects = [
  {
    name: "Online Store",
    description:
      "Web-based platform that allows users to add items to cart, wishlist, login, logout and cheout.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/",
  },
  {
    name: "E-commerce Website",
    description:
      "A full stack eCommerce website using (MERN) . the front-end website to display products, cart.Then backend with express, node js, and mongo db. APIs to add, display, update cart items and login registration API. Admin panel  to add and update product .",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node js",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "mongoDB",
        color: "blue-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/",
  },
  {
    name: "3D Portfolio",
    description:
      "A 3D portfolio using ThreeJS, React Three Fibre, TailwindCss, and Framer motion. The site is responsive across all devices thus improving perfomance using Suspence and Preload. I have also implimented the use of Email JS, to enable sending of emails. The code is reusable and scalable using HOCs",
    tags: [
      {
        name: "Threejs",
        color: "blue-text-gradient",
      },
      {
        name: "React 3 Fibre",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCss",
        color: "pink-text-gradient",
      },
         {
        name: "FramerMotion",
        color: "blue-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, skills,  projects };