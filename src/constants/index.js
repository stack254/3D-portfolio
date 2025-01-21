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
  mernapp,
  project6,
  socialmedia,
  mernpic,
  calculator,
  bloggapp,
  moviefinder,
  dataentry,
  caferacer,
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
    icon: Research,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
    color: "#E34F26",
  },
  {
    name: "CSS 3",
    icon: css,
    color: "#1572B6",
  },
  {
    name: "JavaScript",
    icon: javascript,
    color: "#F7DF1E",
  },
  {
    name: "React JS",
    icon: reactjs,
    color: "#61DAFB",
  },
  {
    name: "Redux Toolkit",
    icon: redux,
    color: "#764ABC",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    color: "#06B6D4",
  },
  {
    name: "Node JS",
    icon: nodejs,
    color: "#339933",
  },
  {
    name: "MongoDB",
    icon: mongodb,
    color: "#47A248",
  },
  {
    name: "Git",
    icon: git,
    color: "#F05032",
  },
  {
    name: "Figma",
    icon: figma,
    color: "#F24E1E",
  },
  {
    name: "Docker",
    icon: docker,
    color: "#2496ED",
  },
];

const skills = [
  {
    title: "Front-End Development",
    icon: frontend,
    points: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React",
      "Angular",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Back-End Development",
    icon: backend,
    points: [
      "Node.js",
      "Python",
      "Ruby",
      "Express",
      "Django",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: cloud,
    points: [
      "AWS (EC2, S3, Lambda)",
      "Heroku",
      "Netlify",
      "Git",
      "GitHub",
      "GitLab",
    ],
  },
];
const experiences = [
  {
    title: "Internet Cafe Attendant",
    company_name: "Sewati Stationers",
    icon: caferacer,
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
      "Customiz to fit F & M Industries LTD branding and functional requirements.",
    ],
  },
  {
    title: "Data Entry Specialist",
    company_name: "CloudFactory Kenya in collaboration with Expensify Inc.",
    icon: dataentry,
    iconBg: "#383E56",
    date: "Jan 2020 - Dec 2023",
    points: [
      "Entering data from invoices and receipts into Expensify's system.",
      "Data verification to ensure accuracy and completeness of Expensfy's OCR Tech.",
      "Cleaning data by clearing inconsistencies",
    ],
  },
  {
    title: "MERN Developer",
    company_name: "LACESLOUNGE",
    icon: mernapp,
    iconBg: "#E6DEDD",
    date: "October 2024 - Present",
    points: [
      "Worked with my team to develop an online footwear store.",
      "Developed custom components, reusable templates, and features for the store.",
      "Used Postman to test APIs and handle errors.",
      "Deployed the backend of the application to Heroku and intergrated it with vercel frontend as well as adding custom domain.",
      "Used cloudnary for media management",
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
    name: "Social Media Application",
    description:
      "Django-based social media application that allows users to connect, share posts, follow each other, and interact through likes and comments. The app has a user registration, login, password reset, and profile update functionality. Users can also create, read, update, and delete posts.Personalized feeds based on the user's followers and direct messaging between users.",
    tags: [
      {
        name: "Djano/python",
        color: "blue-text-gradient",
      },
      {
        name: "HTML5/CSS3",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: socialmedia,
    source_code_link:
      "https://github.com/stack254/LacesLounge-social-media-app",
  },

  {
    name: "Blog Application",
    description:
      "Blog application to display CRUD operations and user management. With user authentication, CRUD operations for blog posts and comments. Markdown for pagination and RSS for feeds",
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
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: bloggapp,
    source_code_link: "https://github.com/stack254/my-blog-app",
  },

  {
    name: "MERN Application",
    description:
      "E-Commerce website using (MERN. Front-end to display products, cart.Then backend with express, node js, and mongo db. APIs to add, display, update cart items and login registration API. Admin panel  to add and update product .",
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
    image: mernpic,
    source_code_link: "https://github.com/stack254/LACESLOUNGE-V2",
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
    source_code_link: "https://github.com/stack254/3D-portfolio",
  },
  {
    name: "Scientific Calculator",
    description:
      "A feature-rich calculator built with React, offering basic arithmetic operations and advanced functions. The calculator includes support for scientific notation, parentheses, memory functions, and a history feature. 3D visual design to enhance user experience.",
    tags: [
      {
        name: "Reactjs",
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
    ],
    image: calculator,
    source_code_link: "https://github.com/stack254/scientific-calculator",
  },

  {
    name: "Movie Finder",
    description:
      "Movie finder application that utilizes The Movie Database API, search bar with auto suggestions and allows users to save their favorite movies to watchlist.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "node js",
        color: "green-text-gradient",
      },

      {
        name: "TMDB API",
        color: "blue-text-gradient",
      },
    ],
    image: moviefinder,
    source_code_link: "https://github.com/stack254/movie-finder",
  },
  {
    name: "Online Store",
    description:
      "Django Web-based platform that allows users to add items to cart, wishlist, login, logout and checkout.The app also allows users to place orders using Paypal.",
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
    source_code_link: "https://github.com/stack254/FrugalIV",
  },
];

export { services, technologies, experiences, skills, projects };
