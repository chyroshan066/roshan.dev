import { WorkExperience } from "@/types";

// Freeze the array to prevent accidental mutations and enable better optimization
export const workExperiences: Readonly<WorkExperience[]> = Object.freeze([
  {
    id: 1,
    title: "Technical Coordinator",
    company: "DELTA",
    period: "December 2024 - Present",
    status: "(Ongoing)",
    logo: "/images/work-experiences/delta-logo.webp",
    details: Object.freeze([
      "Served as Technical Coordinator for DELTA, Eastern Nepal's largest tech fest, managing digital infrastructure and web operations.",
      "Independently maintained official website with real-time updates, ensuring 99.9% uptime during high-traffic periods.",
      "Led digital outreach strategy resulting in increased event participation and improved user engagement metrics.",
      "Demonstrated expertise in web management, performance optimization, and crisis resolution under tight deadlines."
    ]),
  },
  {
    id: 2,
    title: "Website And SEO Intern",
    company: "Proceedit \"the BPaas Company\"",
    period: "December 2024 - June 2025",
    status: "(6 months)",
    logo: "/images/work-experiences/proceedit-logo.webp",
    details: Object.freeze([
      "Executed comprehensive digital marketing strategies across Trustpilot, Quora, and social media platforms, improving brand visibility by 40%.",
      "Optimized Shopify and Podia websites for enhanced UX/UI, resulting in 25% improvement in conversion rates.",
      "Implemented advanced SEO practices including technical audits, keyword optimization, and meta improvements, boosting search rankings.",
      "Collaborated cross-functionally with marketing and development teams to maintain brand consistency and campaign effectiveness."
    ]),
  },
  {
    id: 3,
    title: "Internshala Student Partner",
    company: "Internshala",
    period: "October 2024 - November 2024",
    status: "(1 month)",
    logo:"/images/work-experiences/internshala-logo.webp",
    details: Object.freeze([
      "Selected as elite campus ambassador representing Internshala platform across university ecosystem.",
      "Drove 150% increase in platform engagement through strategic online/offline promotional campaigns.",
      "Organized high-impact workshops and career development events, reaching 500+ students.",
      "Mentored 50+ peers on internship opportunities and professional development, achieving 80% placement success rate."
    ]),
  }
]);

export const isValidWorkExperience = (obj: any): obj is WorkExperience => {
  return (
    typeof obj === 'object' &&
    typeof obj.id === 'number' &&
    typeof obj.title === 'string' &&
    typeof obj.company === 'string' &&
    typeof obj.period === 'string' &&
    typeof obj.status === 'string' &&
    typeof obj.logo === 'string' &&
    Array.isArray(obj.details) 
  );
};
