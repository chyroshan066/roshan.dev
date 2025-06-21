import { serviceType } from "@/types";

export * from "./nav-links";
export * from "./social-links";
export * from "./tech-icons";
export * from "./projects";
export * from "./testimonials";
export * from "./footer-icons";
export * from "./work-experience";
export * from "./education";
export * from "./certificates";

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