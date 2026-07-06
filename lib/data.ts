export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageFit?: "cover" | "contain";
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export type SocialLink = {
  name: string;
  href: string;
  icon: "linkedin" | "github" | "instagram" | "whatsapp" | "email";
};

export type SkillCategory = {
  name: string;
  skills: string[];
};

export type Language = {
  name: string;
  level: string;
};

export type ExperienceItem = {
  id: string;
  type: "work" | "education" | "certification";
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights?: string[];
};

export const siteConfig = {
  name: "Marco Tarantelli",
  role: "Full Stack Developer",
  tagline:
    "Costruisco esperienze web moderne, performanti e scalabili — dal frontend al backend.",
  email: "marcotarantelli98@gmail.com",
  location: "Penne (PE), Italia",
  cvPath: "/CV%20Tarantelli%20Marco.pdf",
  cvDownloadName: "CV-Marco-Tarantelli.pdf",
  profileImage: "/profileimg.jpeg",
};

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/marco-tarantelli/",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    href: "https://github.com/Taranta98",
    icon: "github",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/marco_tarantelli/",
    icon: "instagram",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/393663220482",
    icon: "whatsapp",
  },
  {
    name: "Email",
    href: `mailto:${siteConfig.email}`,
    icon: "email",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Angular", "Tailwind CSS", "Three.js"],
  },
  {
    name: "Backend",
    skills: ["Laravel", "PHP", "Node.js", "REST API", "JWT", "GraphQL"],
  },
  {
    name: "Database",
    skills: ["PostgreSQL", "MySQL"],
  },
  {
    name: "Tools & DevOps",
    skills: ["Git", "Docker", "CI/CD", "WordPress", "Moodle"],
  },
  {
    name: "AI",
    skills: ["Cursor", "GitHub Copilot", "ChatGPT", "Claude"],
  },
];

export const languages: Language[] = [
  { name: "Italiano", level: "Madrelingua" },
  { name: "Inglese", level: "Ottimo" },
  { name: "Spagnolo", level: "Base" },
];

export const experiences: ExperienceItem[] = [
  {
    id: "udanet",
    type: "work",
    title: "Stage Full Stack Developer",
    organization: "Ud'anet",
    period: "2026",
    description:
      "Sviluppo full stack su progetti web nei settori dell'istruzione e della sanità.",
    highlights: [
      "Architetture modulari con Laravel e Angular",
      "WordPress e Moodle",
      "Collaborazione in team su progetti reali per clienti",
    ],
  },
  {
    id: "infobasic",
    type: "education",
    title: "Master Full Stack Developer",
    organization: "Istituto Alta Formazione Infobasic — Pescara",
    period: "2025 — 2026",
    description:
      "Percorso intensivo su sviluppo full stack con Laravel, React e MERN stack.",
    highlights: [
      "Programmazione OOP in PHP e JavaScript",
      "Gestione database SQL e NoSQL",
      "Git, CI/CD, Docker e strumenti AI per il coding",
    ],
  },
  {
    id: "cert-js",
    type: "certification",
    title: "IT Specialist — JavaScript",
    organization: "Certiport (Pearson VUE)",
    period: "2026",
    description:
      "Certificazione ufficiale sulle competenze JavaScript moderne e best practice di sviluppo.",
  },
];

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Car Config",
    description:
      "Applicativo web per la configurazione di veicoli, con gestione delle configurazioni, dei prezzi e delle opzioni di personalizzazione.",
    image: "/projects/carconfig.png",
    tags: ["Laravel", "React", "PostgreSQL"],
    liveUrl: "https://car-config-brief.vercel.app/",
    githubUrl: "https://github.com/Taranta98/CarConfig_brief",
  },

];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Chi sono", href: "#about" },
  { label: "Percorso", href: "#experience" },
  { label: "Progetti", href: "#projects" },
  { label: "Contatti", href: "#contact" },
];
