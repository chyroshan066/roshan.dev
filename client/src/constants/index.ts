import { bentoSocialLinkType, footerIconListType, iconsListType, navItemType, slideType, testimonialType, workExperienceType } from "@/types";

export const navItems: navItemType[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export const bentoSocialLinks: bentoSocialLinkType[] = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/chyroshan066/",
    icon: "/images/fb.svg",
  },
  {
    name: "Github",
    href: "https://github.com/chyroshan066",
    icon: "/images/github.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/chyroshan066/",
    icon: "/images/linkedin.svg",
  },
  {
    name: "WhatsApp",
    href: "https://web.whatsapp.com/",
    icon: "/images/whatsapp.svg",
  },
];

export const iconsList: iconsListType[] = [
  {
    name: "HTML",
    image: "/images/html.svg",
  },
  {
    name: "CSS",
    image: "/images/css.svg",
  },
  {
    name: "JavaScript",
    image: "/images/js.svg",
  },
  {
    name: "VS Code",
    image: "/images/vs-code.svg",
  },
  {
    name: "TypeScript",
    image: "/images/ts.svg",
  },
  {
    name: "Git",
    image: "/images/git.svg",
  },
  {
    name: "Github",
    image: "/images/github.svg",
  },
  {
    name: "Figma",
    image: "/images/figma.svg",
  },
  {
    name: "React",
    image: "/images/react.svg",
  },
  {
    name: "Redux Toolkit",
    image: "/images/redux.svg",
  },
  // {
  //   name: "next",
  //   image: "/images/next.svg",
  // },
  {
    name: "Node.js",
    image: "/images/node.svg",
  },
  {
    name: "Express.js",
    image: "/images/express.svg",
  },
  {
    name: "PostgreSQL",
    image: "/images/postgresql.svg",
  },
  {
    name: "Prisma ORM",
    image: "/images/prisma.svg",
  },
  // {
  //   name: "aws",
  //   image: "/images/aws.svg",
  // },
];

export const slides: slideType[] = [
  {
    id: 1,
    title: "Sofi",
    img: "/images/p1.png",
  },
  {
    id: 2,
    title: "Jasmina",
    img: "/images/p2.png",
  },
  {
    id: 3,
    title: "d.tampe",
    img: "/images/p3.png",
  },
  {
    id: 4,
    title: "Blimp.gr",
    img: "/images/p4.png",
  },
  {
    id: 5,
    title: "Hawk Style Design",
    img: "/images/p5.png",
  },
  {
    id: 6,
    title: "Lewis",
    img: "/images/p6.png",
  },
  {
    id: 7,
    title: "Sofi",
    img: "/images/p1.png",
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
    imgPath: "/images/shalva-mosiashvili.png",
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
    icon: "/images/b-fb.svg",
  },
  {
    name: "Github",
    href: "https://github.com/chyroshan066",
    icon: "/images/b-github.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/chyroshan066/",
    icon: "/images/b-linked.svg",
  },
  {
    name: "WhatsApp",
    href: "https://web.whatsapp.com/",
    icon: "/images/b-whatsapp.svg",
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