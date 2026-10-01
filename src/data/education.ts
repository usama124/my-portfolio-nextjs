import { EducationItem, CertificationItem } from "@/types";

export const educationData: EducationItem[] = [
  {
    id: "uet-lahore-bsc",
    degree: "B.Sc. Computer Science (Honours)",
    field: "Computer Science",
    institution: "University of Engineering and Technology (UET), Lahore",
    location: "Lahore, Pakistan",
    period: "11/2013 – 06/2017",
    grade: "CGPA: 2.95 / 4.0",
    details: "Comprehensive computer science curriculum focused on data structures, algorithms, database management systems, operating systems, distributed computing, and software engineering.",
  },
  {
    id: "islamic-college-fsc",
    degree: "Intermediate (F.Sc. Pre-Engineering)",
    field: "Pre-Engineering (Mathematics, Physics, Chemistry)",
    institution: "Govt. Islamic College Civil Lines, Lahore",
    location: "Lahore, Pakistan",
    period: "07/2011 – 08/2013",
    grade: "907 / 1100 marks (82.45%)",
    details: "Rigorous analytical and mathematical foundation in higher secondary education.",
  },
  {
    id: "saint-francis-matric",
    degree: "Matriculation (Science)",
    field: "Science",
    institution: "Govt. Saint Francis High School, New Anarkali, Lahore",
    location: "Lahore, Pakistan",
    period: "05/2009 – 07/2011",
    grade: "923 / 1050 marks (87.9%)",
    details: "Secondary school education with high distinction in core sciences and mathematics.",
  },
];

export const certificationsData: CertificationItem[] = [
  {
    name: "REST API (Intermediate)",
    issuer: "HackerRank",
    year: "2020",
  },
  {
    name: "Python (Basic)",
    issuer: "HackerRank",
    year: "2020",
  },
];

export const languagesData = [
  { language: "English", proficiency: "Professional Working Proficiency (IELTS 7.0 Overall)" },
  { language: "Urdu", proficiency: "Native / Bilingual" },
  { language: "Punjabi", proficiency: "Native" },
];

