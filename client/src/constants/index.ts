import { certificateType2, eduactionType, serviceType } from "@/types";

export * from "./nav-links";
export * from "./social-links";
export * from "./tech-icons";
export * from "./projects";
export * from "./testimonials";
export * from "./footer-icons";
export * from "./work-experience";

const startedYear = 2007;
const currentYear = new Date().getFullYear();
const totalAcademicTime = currentYear - startedYear;

export const education: eduactionType[] = [
  {
      id: 1,
      degree: "Bachelor in Engineering",
      institution: "IOE Purwanchal Campus",
      duration: "2023 - Present",
      status: "Ongoing",
      description: "Currently pursuing Bachelor's degree in Computer Engineering, focusing on software development, algorithms, and system design.",
      year: `${currentYear > 2027? 2027 : currentYear}`,
      position: 100
  },
  {
      id: 2,
      degree: "Intermediate in Science",
      institution: "Nidi Secondary School",
      duration: "2020 - 2022",
      status: "Completed",
      description: "Intermediate of Science (Physics Major) - Developed strong analytical and mathematical reasoning skills through rigorous coursework in physics and related sciences",
      year: "2022",
      position: ((2022 - startedYear) / totalAcademicTime) * 100,
  },
  {
      id: 3,
      degree: "Secondary Education",
      institution: "Commoners' Home for Education",
      duration: "2017 - 2020",
      status: "Completed",
      description: "Represented School in InterSchool Speech and Quiz competiton. Won various competitions like speech, debate, chess, quiz and many more..",
      year: "2020",
      position: ((2020 - startedYear) / totalAcademicTime) * 100,
  },
  {
      id: 4,
      degree: "Primary Education",
      institution: "Abacus English Boarding School",
      duration: "2007 - 2017",
      status: "Completed",
      description: "Built essential academic foundations while actively exploring diverse extracurricular activities. Learned karate, developing discipline and physical coordination alongside various other ECA pursuits that fostered well-rounded personal growth during these formative years.",
      year: "2017",
      position: ((2017 - startedYear) / totalAcademicTime) * 100,
  },
];

export const certificates: certificateType2[] = [
  {
      id: 1,
      title: 'Complete Intro to SQL & postgreSQL',
      organization: 'Frontend Masters',
      date: 'Dec, 2024',
      image: '/images/certificates/c1.jpg',
      description: 'Successfully completed internship as a Web Developer, focusing on modern web technologies and best practices.',
      credentialUrl: 'https://static.frontendmasters.com/ud/c/f55ea8b851/KVDvpbMgzq/sql.pdf'
  },
  {
      id: 2,
      title: 'Web Development Workshop',
      organization: 'Microsoft Learn Student Ambassadors',
      date: 'Nov, 2024',
      image: '/images/certificates/c2.jpg',
      description: 'Successfully completed internship as a Web Developer, focusing on modern web technologies and best practices.',
  },
  {
      id: 3,
      title: 'Git & Github: Introduction',
      organization: 'Skillsoft',
      date: 'Oct, 2024',
      image: '/images/certificates/c3.jpg',
      description: 'Successfully completed internship as a Web Developer, focusing on modern web technologies and best practices.',
      credentialUrl: 'https://skillsoft.digitalbadges.skillsoft.com/84092d65-00a0-4898-99a3-05200a015e49#acc.MbASCWjz'
  },
  {
      id: 4,
      title: 'Git & Github: Working with Git Repositories',
      organization: 'Skillsoft',
      date: 'Oct, 2024',
      image: '/images/certificates/c4.jpg',
      description: 'Successfully completed internship as a Web Developer, focusing on modern web technologies and best practices.',
      credentialUrl: 'https://skillsoft.digitalbadges.skillsoft.com/71036e6e-2606-45c1-8096-e54e6de59060'
  },
  {
      id: 5,
      title: 'Build 20 JavaScript Projects in 20 Day with HTML, CSS & JS',
      organization: 'Udemy',
      date: 'Dec, 2024',
      image: '/images/certificates/c5.png',
      description: 'Successfully completed internship as a Web Developer, focusing on modern web technologies and best practices.',
  },
  {
      id: 6,
      title: 'Basics of Python',
      organization: 'Infosys Springboard',
      date: 'Nov, 2024',
      image: '/images/certificates/c6.jpg',
      description: 'Successfully completed internship as a Web Developer, focusing on modern web technologies and best practices.',
  },
  {
      id: 7,
      title: 'Intro to Confluenece & Jira: Session 1',
      organization: 'Infosys Springboard',
      date: 'Nov, 2024',
      image: '/images/certificates/c7.jpg',
      description: 'Successfully completed internship as a Web Developer, focusing on modern web technologies and best practices.',
  },
  {
      id: 8,
      title: 'Intro to Confluenece & Jira: Session 2',
      organization: 'Infosys Springboard',
      date: 'Nov, 2024',
      image: '/images/certificates/c8.jpg',
      description: 'Successfully completed internship as a Web Developer, focusing on modern web technologies and best practices.',
  },
  {
      id: 9,
      title: 'Intro to Confluenece & Jira: Session 3',
      organization: 'Infosys Springboard',
      date: 'Nov, 2024',
      image: '/images/certificates/c9.jpg',
      description: 'Successfully completed internship as a Web Developer, focusing on modern web technologies and best practices.',
  },
  {
      id: 10,
      title: 'Free Microsoft Excel Training',
      organization: 'Master of Project Academy',
      date: 'Nov, 2024',
      image: '/images/certificates/c10.jpg',
      description: 'Successfully completed internship as a Web Developer, focusing on modern web technologies and best practices.',
  },
];

export const services: serviceType[] = [
  {
    id: 1,
    title: 'Frontend Development',
    description: 'Building responsive, user-friendly web applications with modern frameworks and best practices.',
    features: [
      'Responsive Web Design',
      'Interactive UI Components',
      'Cross-Browser Compatibility',
      'Mobile-First Development',
      'Performance Optimization',
      'SEO-Friendly Development',
      'TypeScript Integration',
      'Modern CSS Frameworks',
      'API Integration',
      'Smooth Animations',
      'User Experience Optimization',
      'Scalable Architecture',
      'Security Implementation',
      'Documentation & Support'
    ],
    technologies: [
      { 
        name: 'React.js', 
        icon: '/images/tech-icons/react.svg', 
        color: '#61dbfb' 
      },
      { 
        name: 'Next.js', 
        icon: 'https://www.svgrepo.com/show/368858/nextjs.svg', 
        // color: '#FFFFFF' 
      },
      { 
        name: 'Redux Toolkit', 
        icon: '/images/tech-icons/redux.svg', 
        color: '#764abc' 
      },
      // { 
      //   name: 'ShadCN UI', 
      //   icon: '/images/tech-icons/redux.svg', 
      //   color: '#FFFFFF' 
      // },
      { 
        name: 'GSAP', 
        icon: '/images/tech-icons/gsap.svg', 
        // color: '#FFFFFF' 
      },
      { 
        name: 'Tailwind CSS', 
        icon: '/images/tech-icons/tailwindcss.svg', 
        color: '#00bcff' 
      },
      { 
        name: 'TypeScript', 
        icon: '/images/tech-icons/ts.svg', 
        color: '#007ACC' 
      },
      { 
        name: 'Figma', 
        icon: '/images/tech-icons/figma.svg', 
        // color: '#007ACC' 
      },
      { 
        name: 'JavaScript', 
        icon: '/images/tech-icons/js.svg', 
        color: '#F0DB4F' 
      },
      { 
        name: 'HTML', 
        icon: '/images/tech-icons/html.svg', 
        color: '#30B7BA' 
      },
      { 
        name: 'CSS', 
        icon: '/images/tech-icons/css.svg', 
        // color: '#30B7BA' 
      },
    ],
    icon: '🌐'
  },
    {
        id: 2,
        title: 'Backend Development',
        description: 'Building robust server-side architecture with secure APIs and scalable database solutions.',
        features: [
          'RESTful API Development',
          'Database Design & Management',
          'Server-Side Architecture',
          'Authentication & Authorization',
          'Data Security & Encryption',
          'Performance Optimization',
          'Scalable Architecture',
          'Third-Party Integrations',
          'Error Handling & Logging',
          'Documentation & Testing',
        ],
        technologies: [
            { 
              name: 'Node.js', 
              icon: '/images/tech-icons/node.svg', 
              color: '#3C873A' 
            },
            { 
              name: 'Express.js', 
              icon: '/images/tech-icons/express.svg', 
              // color: '#3C873A' 
            },
            { 
              name: 'PostgreSQL', 
              icon: '/images/tech-icons/postgresql.svg', 
              color: '#0064a5' 
            },
            { 
              name: 'Prisma ORM', 
              icon: '/images/tech-icons/prisma.svg', 
              color: '#5a67d9' 
            },
        ],
        icon: '⚙️'
    },
];