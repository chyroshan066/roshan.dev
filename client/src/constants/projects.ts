// import { Project } from "@/types";

// export const projects: Project[] = [
//   {
//     id: 1,
//     title: "Meraki Restro",
//     description: "Professional restaurant website designed and developed as a solo project for Meraki Restro. Features responsive design, interactive menu system, and seamless user experience to showcase authentic cuisine and enhance online presence. Built with modern web technologies focusing on performance and accessibility.",
//     img: "/images/projects/p2.webp",
//     technologies: ["Next.js", "Tailwind CSS", "TypeScript", "React Hook Form", "Node.js", "Express.js", "PostgreSQL"],
//     category: "client",
//     liveURL: "https://www.merakirestro.com/",
//     githubURL: "https://github.com/chyroshan066/meraki-cafe-restaurant-and-bar",
//   },
//   {
//     id: 2,
//     title: "Sewaro Tattoo",
//     description: "Professional tattoo studio website designed and developed as a solo project for Sewaro Tattoo. Features responsive design, dynamic portfolio galleries, and intuitive booking system to showcase artistic excellence and enhance client engagement. Built with modern web technologies focusing on visual impact and seamless user experience.",
//     img: "/images/projects/p3.webp",
//     technologies: ["Next.js", "Tailwind CSS", "TypeScript", "React Hook Form", "Bootstrap", "Swiper.js"],
//     category: "client",
//     liveURL: "https://www.sewarotattoo.com/",
//     githubURL: "https://github.com/chyroshan066/sewaro-tattoo",
//   },
//   {
//     id: 4,
//     title: "Pradhan Dental",
//     description: "Professional dental clinic website designed and developed as a solo project for Pradhan Dental. Features responsive design, comprehensive service showcase, and seamless appointment booking to present dental treatments and enhance patient engagement. Built with modern web technologies focusing on performance, accessibility, and trust-building user experience.",
//     img: "/images/projects/p5.webp",
//     technologies: ["Next.js", "Tailwind CSS", "TypeScript", "React Hook Form"],
//     category: "client",
//     liveURL: "https://www.pradhandental.com/",
//     githubURL: "https://github.com/chyroshan066/pradhan-dental",
//   },
//   {
//     id: 3,
//     title: "Absolute Professional Spa & Salon",
//     description: "Professional spa and salon website designed and developed as a solo project for Absolute Professional Spa & Salon. Features responsive design, treatment showcase system, and seamless appointment booking to highlight wellness services across three locations in Nepal and India. Built with modern web technologies focusing on performance, accessibility, and user experience.",
//     img: "/images/projects/p4.webp",
//     technologies: ["Next.js", "Tailwind CSS", "TypeScript", "React Hook Form", "Bootstrap"],
//     category: "client",
//     liveURL: "https://www.absoluteprofessionalspa.com.np/",
//     githubURL: "https://github.com/chyroshan066/absolute-professional-spa-and-salon",
//   },
//   {
//     id: 5,
//     title: "Purwanchal Vet Pharma",
//     description: "Professional veterinary clinic website designed and developed as a solo project for Purwanchal Vet Pharma. Features responsive design, comprehensive service catalog, and seamless appointment booking to showcase veterinary care for pets and livestock. Built with modern web technologies focusing on performance, accessibility, and compassionate user experience.",
//     img: "/images/projects/p6.webp",
//     technologies: ["Next.js", "Tailwind CSS", "TypeScript", "React Hook Form", "Bootstrap"],
//     category: "client",
//     liveURL: "https://www.purwanchalvetpharma.com.np/",
//     githubURL: "https://github.com/chyroshan066/purwanchal-vet-pharma",
//   },
//   {
//     id: 6,
//     title: "Pathivara Baby Store",
//     description: "Professional baby store website designed and developed as a solo project for Pathivara Baby Store. Features responsive design, interactive product catalog, and seamless shopping experience to showcase baby products and enhance online retail presence. Built with modern web technologies focusing on performance, accessibility, and parent-friendly navigation.",
//     img: "/images/projects/p7.webp",
//     technologies: ["Next.js", "Tailwind CSS", "TypeScript", "React Hook Form", "Bootstrap", "Swiper.js"],
//     category: "client",
//     liveURL: "https://pathivara-baby-store.vercel.app/",
//     githubURL: "https://github.com/chyroshan066/pathivara-baby-store",
//   },
// {
//     id: 7,
//     title: "Brick Breaker Game",
//     description: "Collaborative arcade game project featuring dynamic ball physics, collision detection, and progressive levels. Built with C++ and SFML graphics library using OOP principles. Implemented game state management, particle effects, and score tracking.",
//     img: "/images/projects/p1.webp",
//     technologies: ["C++", "SFML"],
//     category: "group",
//     githubURL: "https://github.com/chyroshan066/brick-breaker",
//   },
// ];

// export const projectsMetadata = {
//   total: projects.length,
//   categories: [...new Set(projects.map(p => p.category))],
//   technologies: [...new Set(projects.flatMap(p => p.technologies))],
// } as const;





















import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 8,
    title: "Nepal Bhoomi",
    description: "Full-featured real estate agency platform designed and developed as a solo project for Nepal Bhoomi Real Estate Agency. Features property listings with buy/rent filtering by category and location, an EMI calculator, agent-managed listings, blog content, and a client enquiry system to connect buyers, renters, and property owners across Kathmandu Valley. Built with modern web technologies focusing on performance and a trust-building user experience.",
    img: "/images/projects/p8.png",
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    category: "client",
    liveURL: "https://nepalbhoomi.com/",
  },
  {
    id: 9,
    title: "Fyafulla AI",
    description: "AI-powered English-Nepali-Tamang language translator and learning platform designed and developed as a solo project for Fyafulla. Features a multi-directional translator, a Tamang sentence generator (TamangGPT), an interactive dictionary, and structured language courses aimed at preserving and teaching the Tamang language and culture.",
    img: "/images/projects/p9.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP"],
    category: "client",
    liveURL: "https://fyafulla.com/",
  },
  {
    id: 10,
    title: "Sheetal Property",
    description: "Nepal-wide real estate platform designed and developed as a solo project for Sheetal Property, connecting buyers, sellers, and renters with verified property listings for sale, rent, and lease across Kathmandu, Pokhara, and beyond. Features agent connections and property search built as a fast, app-like single-page experience.",
    img: "/images/projects/p10.png",
    technologies: ["Laravel", "Inertia.js", "React", "Tailwind CSS"],
    category: "client",
    liveURL: "https://sheetalproperty.com/",
  },
  {
    id: 12,
    title: "Samaj Dental",
    description: "Multi-location dental hospital website designed and developed as a solo project for Samaj Dental Hospital. Features a directory of thirteen clinic locations across Kathmandu Valley and Banepa, consultant and specialist profiles, treatment listings, online appointment booking, and patient testimonials.",
    img: "/images/projects/p12.png",
    technologies: ["WordPress", "PHP", "CSS", "JavaScript"],
    category: "client",
    liveURL: "https://samajdental.com/",
  },
  {
    id: 13,
    title: "Kathmandu Grill",
    description: "Restaurant and wine bar website designed and developed as a solo project for Kathmandu Grill in Thamel. Features a photo gallery, downloadable breakfast, lunch, and bar menus, a reservation and private event enquiry form, and location details to enhance the restaurant's online presence.",
    img: "/images/projects/p13.png",
    technologies: ["WordPress", "Slider Revolution", "PHP", "CSS"],
    category: "client",
    liveURL: "https://kathmandugrill.com/",
  },
  {
    id: 1,
    title: "Meraki Restro",
    description: "Professional restaurant website designed and developed as a solo project for Meraki Restro. Features responsive design, interactive menu system, and seamless user experience to showcase authentic cuisine and enhance online presence. Built with modern web technologies focusing on performance and accessibility.",
    img: "/images/projects/p2.webp",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "React Hook Form", "Node.js", "Express.js", "PostgreSQL"],
    category: "client",
    liveURL: "https://www.merakirestro.com/",
    githubURL: "https://github.com/chyroshan066/meraki-cafe-restaurant-and-bar",
  },
  {
    id: 2,
    title: "Sewaro Tattoo",
    description: "Professional tattoo studio website designed and developed as a solo project for Sewaro Tattoo. Features responsive design, dynamic portfolio galleries, and intuitive booking system to showcase artistic excellence and enhance client engagement. Built with modern web technologies focusing on visual impact and seamless user experience.",
    img: "/images/projects/p3.webp",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "React Hook Form", "Bootstrap", "Swiper.js"],
    category: "client",
    liveURL: "https://www.sewarotattoo.com/",
    githubURL: "https://github.com/chyroshan066/sewaro-tattoo",
  },
  {
    id: 4,
    title: "Pradhan Dental",
    description: "Professional dental clinic website designed and developed as a solo project for Pradhan Dental. Features responsive design, comprehensive service showcase, and seamless appointment booking to present dental treatments and enhance patient engagement. Built with modern web technologies focusing on performance, accessibility, and trust-building user experience.",
    img: "/images/projects/p5.webp",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "React Hook Form"],
    category: "client",
    liveURL: "https://www.pradhandental.com/",
    githubURL: "https://github.com/chyroshan066/pradhan-dental",
  },
  {
    id: 3,
    title: "Absolute Professional Spa & Salon",
    description: "Professional spa and salon website designed and developed as a solo project for Absolute Professional Spa & Salon. Features responsive design, treatment showcase system, and seamless appointment booking to highlight wellness services across three locations in Nepal and India. Built with modern web technologies focusing on performance, accessibility, and user experience.",
    img: "/images/projects/p4.webp",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "React Hook Form", "Bootstrap"],
    category: "client",
    liveURL: "https://www.absoluteprofessionalspa.com.np/",
    githubURL: "https://github.com/chyroshan066/absolute-professional-spa-and-salon",
  },
  {
    id: 5,
    title: "Purwanchal Vet Pharma",
    description: "Professional veterinary clinic website designed and developed as a solo project for Purwanchal Vet Pharma. Features responsive design, comprehensive service catalog, and seamless appointment booking to showcase veterinary care for pets and livestock. Built with modern web technologies focusing on performance, accessibility, and compassionate user experience.",
    img: "/images/projects/p6.webp",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "React Hook Form", "Bootstrap"],
    category: "client",
    liveURL: "https://www.purwanchalvetpharma.com.np/",
    githubURL: "https://github.com/chyroshan066/purwanchal-vet-pharma",
  },
  {
    id: 6,
    title: "Pathivara Baby Store",
    description: "Professional baby store website designed and developed as a solo project for Pathivara Baby Store. Features responsive design, interactive product catalog, and seamless shopping experience to showcase baby products and enhance online retail presence. Built with modern web technologies focusing on performance, accessibility, and parent-friendly navigation.",
    img: "/images/projects/p7.webp",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "React Hook Form", "Bootstrap", "Swiper.js"],
    category: "client",
    liveURL: "https://pathivara-baby-store.vercel.app/",
    githubURL: "https://github.com/chyroshan066/pathivara-baby-store",
  },
{
    id: 7,
    title: "Brick Breaker Game",
    description: "Collaborative arcade game project featuring dynamic ball physics, collision detection, and progressive levels. Built with C++ and SFML graphics library using OOP principles. Implemented game state management, particle effects, and score tracking.",
    img: "/images/projects/p1.webp",
    technologies: ["C++", "SFML"],
    category: "group",
    githubURL: "https://github.com/chyroshan066/brick-breaker",
  },
];

export const projectsMetadata = {
  total: projects.length,
  categories: [...new Set(projects.map(p => p.category))],
  technologies: [...new Set(projects.flatMap(p => p.technologies))],
} as const;