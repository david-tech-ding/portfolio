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
  question,
  commandshift,
  cityrehab,
  sundial,
  mysportsinjury,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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

const experiences = [
  {
    title: "Aspiring Software Developer",
    company_name: "TBD",
    icon: question,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "I'm open to any software development/engineering job opportunities to kickstart my exciting Tech career.",
      "I do have a strong interest in FinTech, particularly developing financial applications, real-time data visualization technologies, and much more.",
    ],
  },
  {
    title: "Command Shift Software Engineering Trainee",
    company_name: "Command Shift",
    icon: commandshift,
    iconBg: "#383E56",
    date: "Jan 2023 - August 2023",
    points: [
      "Developing web applications using React.js, Node.js, and other related technologies shown in my Tech Stack.",
      "Collaborating effectively with cohort members and tutors through meaningful contributions in stand-ups and Slack, ensuring smooth project execution.",
      "Implementing mobile responsive designs and ensuring cross-browser compatibility.",
      "Created and presented a task management app with another cohort member within 1 week whilst working a full-time job.",
    ],
  },
  {
    title: "Musculoskeletal Physiotherapist",
    company_name: "Sundial Clinics",
    icon: sundial,
    iconBg: "#383E56",
    date: "September 2021 - August 2022",
    points: [
      "Autonomous practitioner in a busy private clinic, managing my own caseload of patients requiring musculoskeletal and post-operative rehabilitation.",
      "Diagnosing and treating complex neuromusculoskeletal injuries, implementing a patient-centred rehabilitation plan to achieve optimal outcomes.",
      "Worked effectively with a team of other healthcare professionals, ensuring that patient journey is always continuous, resulting in excellent outcomes.",
    ],
  },
  {
    title: "Specialised Musculoskeletal Physiotherapist",
    company_name: "MySportsInjury Manchester",
    icon: mysportsinjury,
    iconBg: "#E6DEDD",
    date: "September 2022 - August 2023",
    points: [
      "Communicating closely and effectively with private clients to create personalised training and rehabilitation programmes for elite athletes, focusing on injury prevention and optimising sport-specific performance.",
      "Led weekly team meetings to discuss ways to improve both clinical and financial aspects of the business.",
      "Proactively reached out to stakeholders and other business owners, such as local gyms and specialised running shops to collaborate.",
    ],
  },
  {
    title: "Senior Musculoskeletal Physiotherapist",
    company_name: "City Rehab",
    icon: cityrehab,
    iconBg: "#383E56",
    date: "September 2023 - Present",
    points: [
      "Responsible for overseeing the rehabilitation of all levels of athletes and promoting exercise as a form of medicine.",
      "Adapting to the most up-to-date evidence-based research and revolving rehabilitation programmes around research and personal experience.",
      "Managed my time effectively which allowed time for non-clinical tasks including audits, team meetings, and continuous self-development.",
    ],
  },
];

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

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
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
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
