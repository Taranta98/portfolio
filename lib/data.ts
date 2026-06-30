export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export type SocialLink = {
  name: string;
  href: string;
  icon: "linkedin" | "github" | "instagram" | "whatsapp" | "email";
};

export const siteConfig = {
  name: "Marco Tarantelli",
  role: "Full Stack Developer",
  tagline:
    "Costruisco esperienze web moderne, performanti e scalabili — dal frontend al backend.",
  email: "marcotarantelli98@gmail.com",
  location: "Italia",
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

export const skills = [
  "TypeScript",
  "React / Next.js",
  "Laravel",
  "PHP",
  "Node.js",
  "MySQL",
  "Angular",
  "PostgreSQL",
  "REST & GraphQL",
  "Docker",
  "Three.js",
  "Tailwind CSS",
];

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Car Config",
    description:
      "Brief di progetto per un applicativo web per la configurazione di veicoli, con gestione delle configurazioni, dei prezzi e delle opzioni di personalizzazione.",
    image: "/projects/carconfig.png",
    tags: ["Laravel", "React", "PostgreSQL"],
    liveUrl: "https://car-config-brief.vercel.app/",
    githubUrl: "https://github.com/Taranta98/CarConfig_brief",
  }
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Chi sono", href: "#about" },
  { label: "Progetti", href: "#projects" },
  { label: "Contatti", href: "#contact" },
];
