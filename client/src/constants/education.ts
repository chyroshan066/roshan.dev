import { Education } from "@/types";

const ACADEMIC_START_YEAR  = 2007;
const CURRENT_YEAR  = new Date().getFullYear();
const GRADUATION_YEAR = 2027;

const TOTAL_ACADEMIC_TIME  = CURRENT_YEAR  - ACADEMIC_START_YEAR ;

const calculatePosition = (year: number): number => {
  return ((year - ACADEMIC_START_YEAR) / TOTAL_ACADEMIC_TIME) * 100;
};

export const education: readonly Education[] = [
  {
    id: 1,
    degree: "Bachelor in Engineering",
    institution: "IOE Purwanchal Campus",
    status: "Ongoing",
    startYear: 2023,
    endYear: GRADUATION_YEAR,
    description: "Currently pursuing Bachelor's degree in Computer Engineering, focusing on software development, algorithms, and system design.",
    position: 100,
    level: "Bachelor",
    field: "Computer Engineering",
    achievements: [
      "Software Development Focus",
      "Algorithm Design",
      "System Architecture"
    ],
    isOngoing: true
  },
  {
    id: 2,
    degree: "Intermediate in Science",
    institution: "Nidi Secondary School",
    status: "Completed",
    startYear: 2020,
    endYear: 2022,
    description: "Intermediate of Science (Physics Major) - Developed strong analytical and mathematical reasoning skills through rigorous coursework in physics and related sciences",
    position: calculatePosition(2022),
    level: "Intermediate",
    field: "Science",
    achievements: [
      "Physics Major",
      "Strong Mathematical Foundation",
      "Analytical Reasoning"
    ],
    isOngoing: false
     
  },
  {
    id: 3,
    degree: "Secondary Education",
    institution: "Commoners' Home for Education",
    status: "Completed",
    startYear: 2017,
    endYear: 2020,
    description: "Represented School in InterSchool Speech and Quiz competiton. Won various competitions like speech, debate, chess, quiz and many more..",
    position: calculatePosition(2020),
    level: "Secondary",
    field: "General Education",
    achievements: [
      "Inter-School Speech Competition",
      "Quiz Competition Winner",
      "Debate Competition",
      "Chess Competition",
      "Multiple Academic Awards"
    ],
    isOngoing: false
  },
  {
    id: 4,
    degree: "Primary Education",
    institution: "Abacus English Boarding School",
    status: "Completed",
    startYear: 2007,
    endYear: 2017,
    description: "Built essential academic foundations while actively exploring diverse extracurricular activities. Learned karate, developing discipline and physical coordination alongside various other ECA pursuits that fostered well-rounded personal growth during these formative years.",
    position: calculatePosition(2017),
    level: "Primary",
    field: "General Education",
    achievements: [
      "Karate Training",
      "Discipline Development",
      "Well-rounded Personal Growth",
      "Strong Academic Foundation",
      "Extracurricular Excellence"
    ],
    isOngoing: false
  },
];

export const educationMetadata = {
  totalYears: TOTAL_ACADEMIC_TIME,
  startYear: ACADEMIC_START_YEAR,
  expectedGraduation: GRADUATION_YEAR,
  currentYear: CURRENT_YEAR,
  totalEntries: education.length,
  levels: [...new Set(education.map(edu => edu.level))],
  fields: [...new Set(education.map(edu => edu.field))]
} as const;

// Validation helper 
export const validateEducationData = (): boolean => {
  return education.every(edu => 
    edu.startYear < edu.endYear &&
    edu.position >= 0 && edu.position <= 100 &&
    edu.degree.trim().length > 0 &&
    edu.institution.trim().length > 0
  );
};