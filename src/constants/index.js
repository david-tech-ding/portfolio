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
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  postgresql,
  postman,
  question,
  commandshift,
  cityrehab,
  sundial,
  mysportsinjury,
  mockthreads,
  threejs,
  taskmanager,
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
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "postman",
    icon: postman,
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
    testimonial: "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
  {
    testimonial: "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
  {
    testimonial: "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
];

const projects = [
  {
    name: "Task Manager",
    description:
      "A web-based and mobile app that allows users to create, assign, and search for tasks, view tasks by priority and by users, and altering tasks depending on the status.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "docker",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "silver-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
    ],
    image: taskmanager,
    source_code_link: "https://github.com/david-tech-ding/task-management-app",
  },
  {
    name: "Mock Threads App",
    description:
      "Web and mobile application that allows users to interact with each other through snippets of thoughts and ideas. In this app there is also a communities page where people with similar interests can join a particular community.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "silver-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "clerk",
        color: "purple-text-gradient",
      },
    ],
    image: mockthreads,
    source_code_link: "https://github.com/david-tech-ding/threads-app",
  },
];

export { services, technologies, experiences, testimonials, projects };
