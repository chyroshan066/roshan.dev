import { bentoSocialLinkType, certificateType2, eduactionType, footerIconListType, iconsListType, projectType, serviceType, testimonialType, workExperienceType } from "@/types";

export * from "./nav-links";

export const bentoSocialLinks: bentoSocialLinkType[] = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/chyroshan066/",
    icon: "/images/social-icons/fb.svg",
  },
  {
    name: "Github",
    href: "https://github.com/chyroshan066",
    icon: "/images/tech-icons/github.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/chyroshan066/",
    icon: "/images/social-icons/linkedin.svg",
  },
  {
    name: "WhatsApp",
    href: "https://web.whatsapp.com/",
    icon: "/images/social-icons/whatsapp.svg",
  },
];

export const iconsList: iconsListType[] = [
  {
    name: "HTML",
    image: "/images/tech-icons/html.svg",
  },
  {
    name: "CSS",
    image: "/images/tech-icons/css.svg",
  },
  {
    name: "JavaScript",
    image: "/images/tech-icons/js.svg",
  },
  {
    name: "VS Code",
    image: "/images/tech-icons/vs-code.svg",
  },
  {
    name: "TypeScript",
    image: "/images/tech-icons/ts.svg",
  },
  {
    name: "Git",
    image: "/images/tech-icons/git.svg",
  },
  {
    name: "Github",
    image: "/images/tech-icons/github.svg",
  },
  {
    name: "Figma",
    image: "/images/tech-icons/figma.svg",
  },
  {
    name: "React",
    image: "/images/tech-icons/react.svg",
  },
  {
    name: "next",
    image: "https://www.svgrepo.com/show/368858/nextjs.svg",
  },
  {
    name: "Redux Toolkit",
    image: "/images/tech-icons/redux.svg",
  },
  {
    name: "GSAP",
    image: "/images/tech-icons/gsap.svg",
  },
  {
    name: "Node.js",
    image: "/images/tech-icons/node.svg",
  },
  {
    name: "Express.js",
    image: "/images/tech-icons/express.svg",
  },
  {
    name: "PostgreSQL",
    image: "/images/tech-icons/postgresql.svg",
  },
  {
    name: "Prisma ORM",
    image: "/images/tech-icons/prisma.svg",
  },
  // {
  //   name: "aws",
  //   image: "/images/tech-icons/aws.svg",
  // },
];

export const projects: projectType[] = [
  {
    id: 1,
    title: "Sofi",
    description: "Project build using react.js and next.js",
    img: "/images/p1.png",
    technologies: ["Next", "Node", "Express"],
    category: "personal",
    liveURL: "http://localhost:3000",
    githubURL: "http://localhost:3000",
  },
  {
    id: 2,
    title: "Jasmina",
    description: "",
    img: "/images/p2.png",
    technologies: [],
    category: "client",
    liveURL: "",
    githubURL: "",
  },
  {
    id: 3,
    title: "d.tampe",
    description: "",
    img: "/images/p3.png",
    technologies: [],
    category: "personal",
    liveURL: "",
    githubURL: "",
  },
  {
    id: 4,
    title: "Blimp.gr",
    img: "/images/p4.png",
    technologies: [],
    category: "client",
    liveURL: "",
    githubURL: "",
  },
  {
    id: 5,
    title: "Hawk Style Design",
    description: "",
    img: "/images/p5.png",
    technologies: [],
    category: "personal",
    liveURL: "",
    githubURL: "",
  },
  {
    id: 6,
    title: "Lewis",
    description: "",
    img: "/images/p6.png",
    technologies: [],
    category: "client",
    liveURL: "",
    githubURL: "",
  },
  {
    id: 7,
    title: "Sofi",
    description: "",
    img: "/images/p1.png",
    technologies: [],
    category: "personal",
    liveURL: "",
    githubURL: "",
  },
];

export const testimonials: testimonialType[] = [
  {
    name: "Emily Carter",
    pos: "UX Designer at PixelWorks Studio",
    review:
      "David Jhon consistently brings fresh ideas and innovative solutions. Their passion for creativity and attention to detail elevate every project.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Shalva Mosiashvili",
    pos: "Digital Marketing Manager at ArcheaA Studio",
    review:`I had the pleasure of working alongside Roshan at Proceedit, where he demonstrated strong technical skills and a collaborative approach. While he didn’t manage me directly, his contributions as a senior member were always insightful and valuable. Roshan’s ability to think strategically and solve complex problems was evident in the work he did, and I greatly benefited from his expertise.\n\nRoshan is a dedicated and reliable professional, and I truly appreciated the opportunity to learn from him. I highly recommend Roshan for any role requiring technical knowledge, leadership, and a problem-solving mindset.`,
    imgPath: "/images/testimonials/shalva-mosiashvili.png",
    linkedinUrl: "https://www.linkedin.com/in/shalvamosiashvili/",
  },
  {
    name: "Dhinchak Puja",
    pos: "Digital Marketing Manager at ArcheaA Studio",
    review:`I had the pleasure of working alongside Roshan at Proceedit, where he demonstrated strong technical skills and a collaborative approach. While he didn’t manage me directly, his contributions as a senior member were always insightful and valuable. Roshan’s ability to think strategically and solve complex problems was evident in the work he did, and I greatly benefited from his expertise.\n\nRoshan is a dedicated and reliable professional, and I truly appreciated the opportunity to learn from him. I highly recommend Roshan for any role requiring technical knowledge, leadership, and a problem-solving mindset.`,
    imgPath: "/images/client1.png",
  },
];

export const footerIconsList: footerIconListType[] = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/chyroshan066/",
    icon: "/images/footer-icons/b-fb.svg",
  },
  {
    name: "Github",
    href: "https://github.com/chyroshan066",
    icon: "/images/footer-icons/b-github.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/chyroshan066/",
    icon: "/images/footer-icons/b-linked.svg",
  },
  {
    name: "WhatsApp",
    href: "https://web.whatsapp.com/",
    icon: "/images/footer-icons/b-whatsapp.svg",
  },
];

export const workExperiences: workExperienceType[] = [
  {
    id: 1,
    title: "Technical Coordinator",
    company: "DELTA",
    period: "December 2024 - Present",
    status: "(Ongoing)",
    logo: "🏛️",
    details: [
        "Served as the Technical Coordinator for DELTA, the largest tech fest in Eastern Nepal.",
        "Independently managed the official website, handling maintenance and real-time updates.",
        "Ensured smooth performance during high-traffic periods and played a key role in the event's digital outreach.",
        "Demonstrated strong skills in web management, problem-solving, and coordination under tight deadlines."
    ],
    certificates: [
        { name: "CERTIFICATE", color: "bg-blue-500" },
        { name: "CERTIFICATE", color: "bg-orange-500" },
        { name: "CERTIFICATE", color: "bg-blue-600" },
        { name: "CERTIFICATE", color: "bg-gray-600" },
        { name: "CERTIFICATE", color: "bg-purple-500" }
    ]
  },
  {
    id: 2,
    title: "Website And SEO Intern",
    company: "Proceedit \"the BPaas Company\"",
    period: "December 2024 - June 2025",
    status: "(6 months)",
    logo: "🏛️",
    details: [
        "Contributed to the company\’s online growth by executing digital marketing strategies across platforms including Trustpilot, Quora, and social media to improve brand visibility, reviews, and ratings.",
        "Managed and enhanced Proceedit’s Shopify and Podia websites, optimizing user experience and interface for better performance and conversion.",
        "Implemented SEO best practices, including keyword research, meta optimization, and technical audits to improve search rankings.",
        "Worked closely with marketing and development teams to ensure consistent branding and effective execution of promotional campaigns."
    ],
    certificates: [
        { name: "CERTIFICATE", color: "bg-blue-500" },
        { name: "CERTIFICATE", color: "bg-orange-500" },
        { name: "CERTIFICATE", color: "bg-blue-600" },
        { name: "CERTIFICATE", color: "bg-gray-600" },
        { name: "CERTIFICATE", color: "bg-purple-500" }
    ]
  },
  {
    id: 3,
    title: "Internshala Student Partner",
    company: "Internshala",
    period: "October 2024 - November 2024",
    status: "(1 month)",
    logo: "🏛️",
    details: [
        "Selected as a campus ambassador for Internshala, representing the platform at the university level.",
        "Promoted Internshala's initiatives and opportunities through online and offline channels.",
        "Organized and managed events, workshops, and campaigns to increase student engagement.",
        "Mentored peers on internship opportunities and skill development resources.",
        "Developed skills in leadership, communication, networking, and event coordination."
    ],
    certificates: [
        { name: "CERTIFICATE", color: "bg-blue-500" },
        { name: "CERTIFICATE", color: "bg-orange-500" },
        { name: "CERTIFICATE", color: "bg-blue-600" },
        { name: "CERTIFICATE", color: "bg-gray-600" },
        { name: "CERTIFICATE", color: "bg-purple-500" }
    ]
  },
];

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