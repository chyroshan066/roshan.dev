import { eduactionType } from "@/types";

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