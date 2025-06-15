import { bentoSocialLinkType, footerIconListType, iconsListType, navItemType, slideType, testimonialType } from "@/types";

const navItems: navItemType[] = [
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

const bentoSocialLinks: bentoSocialLinkType[] = [
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

const iconsList: iconsListType[] = [
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

const slides: slideType[] = [
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

const testimonials: testimonialType[] = [
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

const footerIconsList: footerIconListType[] = [
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

export {
  navItems,
  bentoSocialLinks,
  iconsList,
  slides,
  testimonials,
  footerIconsList,
};