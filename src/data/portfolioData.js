// ============================================================
// portfolioData.js — RAMESH K's Developer Portfolio Data
// This file controls ALL the text and links on the website.
// ============================================================

export const personalInfo = {
  name: "RAMESH K",
  firstName: "RAMESH K",
  brandName: "RAMESH K", // shown in the preloader, navbar and footer
  title: "Java Full Stack Developer",
  location: "Bengaluru, India",
  phone: "7672047816",
  emails: {
    primary: "ballariramesh0825@gmail.com",
    secondary: "",
  },
  summary:
    "Final-year Computer Science and Engineering graduate skilled in Java, Spring Boot, React.js, and SQL, passionate about building scalable full-stack web applications and solving real-world problems through technology.",
  resumeUrl: "/Resume.pdf", // put the PDF inside /public
};

// TAP Academy — the academy you trained with. Used in the footer credit.
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

export const socialLinks = {
  github: "https://github.com/Ramesh2200",
  linkedin: "https://www.linkedin.com/in/ramesh-k-71243026a/",
  instagram: "https://www.instagram.com/_ramesh._._k__?obrf=MTh3anJ5d2U2MWY3dw%3D%3D&utm_source=qr",
};

export const heroContent = {
  greeting: "Hi, I'm RAMESH K",
  titleHighlight: "Java Full Stack Developer",
  subtitle:
    "Passionate about building scalable full-stack web applications with Java, Spring Boot, React.js, and modern databases.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:ballariramesh0825@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  // HTML is allowed here (it is rendered with dangerouslySetInnerHTML) — keep it YOUR OWN trusted text.
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">RAMESH K</span>, a Computer Science and Engineering graduate based in Bengaluru, India. I have a strong foundation in Java, Python, web development, and database management, sharpening my skills through the placement training program at TAP Academy. I am eager to contribute to a dynamic development team, enhance my technical skills, and build scalable full-stack web applications.`,
  techStack: ["Java", "Spring Boot", "React.js", "MySQL", "REST APIs", "Python"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world products",
  description: "A disciplined engineering methodology focused on clean architecture, performance, and user experience.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "Analyze system requirements, explore user flows, and define architectural scope before starting implementation.",
    },
    {
      number: "02",
      title: "Design",
      text: "Model efficient relational database schemas, structure modular REST APIs, and craft intuitive responsive interfaces.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Implement robust backend services with Java & Spring Boot, integrating dynamic, responsive components in React.js.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Validate API contracts, optimize database queries, and deploy applications with smooth cloud workflows.",
    },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming",
      skills: [
        { name: "Java", icon: "java" },
        { name: "Python", icon: "python" },
        { name: "JavaScript", icon: "javascript" },
        { name: "SQL", icon: "sql" },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: "html5" },
        { name: "CSS3", icon: "css3" },
        { name: "React.js", icon: "react" },
        { name: "Bootstrap", icon: "bootstrap" },
      ],
    },
    {
      title: "Backend & Databases",
      skills: [
        { name: "Spring Boot", icon: "springboot" },
        { name: "Java Servlets", icon: "servlets" },
        { name: "JSP", icon: "jsp" },
        { name: "JDBC", icon: "jdbc" },
        { name: "REST APIs", icon: "restapi" },
        { name: "MySQL", icon: "mysql" },
        { name: "MongoDB", icon: "mongodb" },
        { name: "PostgreSQL", icon: "postgresql" },
      ],
    },
    {
      title: "Tools & Core Concepts",
      skills: [
        { name: "Git & GitHub", icon: "github" },
        { name: "VS Code", icon: "vscode" },
        { name: "Eclipse", icon: "eclipse" },
        { name: "Postman", icon: "postman" },
        { name: "OOP", icon: "oop" },
        { name: "Data Structures & Algorithms", icon: "dsa" },
      ],
    },
  ],
};

export const leadershipList = [
  {
    title: "Inter-College Hackathon at Srinivas Institute of Technology, Mangaluru",
    description:
      "Collaborated with peers to explore innovative software solutions to real-world problems under competitive time constraints.",
    role: "Participant & Team Collaborator",
    badge: "Hackathon",
  },
];

export const internshipsList = [
  {
    organization: "AiROBOSOFT Products and Services LLP",
    role: "Full Stack Developer Intern",
    duration: "4 months",
    skills: [
      "Frontend Development",
      "Backend Architecture",
      "Database Management",
      "RESTful API Development",
    ],
    tech: ["HTML", "CSS", "JavaScript", "React.js", "Java", "Spring Boot", "Node.js", "Express.js", "MySQL", "MongoDB"],
  },
];

export const softSkillsList = [
  {
    name: "Team Collaboration",
    icon: "🤝",
    desc: "Collaborate effectively with cross-functional team members to achieve project milestones.",
  },
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Break down complex business logic into maintainable, elegant software solutions.",
  },
  {
    name: "Analytical Thinking",
    icon: "📈",
    desc: "Analyze requirements and evaluate system trade-offs to make informed architectural choices.",
  },
  {
    name: "Communication",
    icon: "💬",
    desc: "Communicate technical concepts clearly and facilitate collaborative problem solving.",
  },
];

export const projects = [
  {
    id: "smart-parking-system",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "Smart Vehicle Parking Management System (ParkMate)",
    description:
      "Developed a smart parking management application featuring secure user authentication, real-time parking slot management, and an administrative dashboard.",
    techTags: ["Java", "Spring Boot", "Servlets", "JSP", "React.js", "JDBC", "MySQL"],
    links: {
      github: "https://github.com/Ramesh2200",
      demo: "https://smart-parking-system-murex.vercel.app/",
    },
    isFlagship: true,
  },
  {
    id: "ecommerce-smartway",
    number: "02",
    badge: null,
    title: "E-Commerce Website (SmartWay)",
    description:
      "Developed an e-commerce platform with comprehensive product listings, category filtering, cart management, checkout, payment gateway integration, and email OTP verification.",
    techTags: ["Java", "Servlets", "JSP", "MySQL", "HTML5", "CSS3", "JavaScript"],
    links: {
      github: "https://github.com/Ramesh2200",
      demo: "https://ecommerce-gmail-auth.vercel.app/",
    },
    isFlagship: false,
  },
  {
    id: "food-order-delivery",
    number: "03",
    badge: null,
    title: "Food Order Delivery Application",
    description:
      "Developed a responsive food ordering application that enables users to browse food menus, manage cart selections, and place orders with seamless user flow.",
    techTags: ["Java", "Spring Boot", "React.js", "MySQL"],
    links: {
      github: "https://github.com/Ramesh2200",
      demo: "https://feastflow-food-delivery.vercel.app/",
    },
    isFlagship: false,
  },
];

// Used only by the optional Certificates component (bonus step)
export const certificates = {
  featured: [
    { name: "Java Full Stack Development", issuer: "TAP Academy", icon: "🏅" },
    { name: "Full Stack Web Development", issuer: "AiROBOSOFT", icon: "📜" },
  ],
  viewAllUrl: "https://www.linkedin.com/in/ramesh-k-71243026a/",
};

export const education = {
  degree: "B.E Computer Science & Engineering",
  institution: "Yenepoya Institute of Technology Moodabidre",
  cgpa: "Final Year",
  graduation: "2025",
  twelfth: "",
  tenth: "",
};

export const footerContent = {
  taglines: ["Java Full Stack Developer", "Spring Boot · React.js · MySQL", "Building Scalable Web Applications"],
  credential: "B.E Computer Science & Engineering",
  copyright: `© ${new Date().getFullYear()} RAMESH K | Built with React`,
};

// EmailJS — read from .env.local (variables must start with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_q9xlcre",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
