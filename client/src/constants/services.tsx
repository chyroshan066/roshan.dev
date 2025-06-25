"use client";

import { Service } from "@/types";
import { FigmaLogoIcon } from "@phosphor-icons/react";

export const services: Service[] = [
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
      },
      {
        name: 'Next.js',
        icon: 'https://www.svgrepo.com/show/368858/nextjs.svg',
      },
      {
        name: 'Redux Toolkit',
        icon: '/images/tech-icons/redux.svg',
      },
      // { 
      //   name: 'ShadCN UI', 
      //   icon: '/images/tech-icons/redux.svg', 
      //   color: '#FFFFFF' 
      // },
      {
        name: 'GSAP',
        icon: '/images/tech-icons/gsap.svg',
      },
      {
        name: 'Tailwind CSS',
        icon: '/images/tech-icons/tailwindcss.svg',
      },
      {
        name: 'TypeScript',
        icon: '/images/tech-icons/ts.svg',
      },
      {
        name: 'Figma',
        icon: <FigmaLogoIcon size={16} color="#0050ff" weight="bold" />,
      },
      {
        name: 'JavaScript',
        icon: '/images/tech-icons/js.svg',
      },
      {
        name: 'HTML',
        icon: '/images/tech-icons/html.svg',
      },
      {
        name: 'CSS',
        icon: '/images/tech-icons/css.svg',
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
      },
      {
        name: 'Express.js',
        icon: '/images/tech-icons/express.svg',
      },
      {
        name: 'PostgreSQL',
        icon: '/images/tech-icons/postgresql.svg',
      },
      {
        name: 'Prisma ORM',
        icon: '/images/tech-icons/prisma.svg',
      },
    ],
    icon: '⚙️'
  },
];