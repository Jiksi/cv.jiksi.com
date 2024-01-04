import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Zhicxi Azis Pramana",
  initials: "ZA",
  location: "East Kalimantan, Indonesia",
  locationLink: "https://www.google.com/maps/place/balikpapan",
  about:
    "Passionate Full Stack Engineer that willing to learn new things especially in Software Engineering.",
  summary:
    "Passionate and willing to learn new things especially in Software Engineering. Always seeking an opportunity to grow myself. Experienced with Web Development and Graphic Design. Currently learning Front End Web Development and Back End Development. Aiming to give an impact as well as contributing to society using information technology that I have acquired from self study and university",
  avatarUrl: "https://avatars.githubusercontent.com/jiksi",
  personalWebsiteUrl: "https://jiksi.com",
  contact: {
    email: "zhicxi.ap@gmail.com",
    tel: "+6285245846422",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/jiksi",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/zhicxi-azis-72ab5a222/",
        icon: LinkedInIcon,
      },
      // {
      //   name: "X",
      //   url: "https://x.com/BartoszJarocki",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "Mulia University Balikpapan",
      degree: "Undergraduate of Informatics",
      start: "2021",
      end: "Now",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "Next.js",
    "NextAuth",
    "Tailwind CSS",
    "Prisma",
    "Framer Motion",
    "MySQL",
  ],
  projects: [
    {
      title: "Siplah Terpadu",
      techStack: ["Full Stack Developer", "Next.js", "NextAuth", "Prisma"],
      description:
        "A website for DLH PPU designed to enhance public services for the residents, streamlining and improving overall service delivery.",
      link: {
        label: "Siplah Terpadu",
        href: "https://siplahterpadu.id/",
      },
    },
    {
      title: "Meranti Creative Lab",
      techStack: ["Full Stack Developer", "Next.js", "Framer Motion", "MySQL"],
      description:
        "A website for Meranti Creative Lab Nusantara to showcase their works.",
      link: {
        label: "Meranti Creative Lab",
        href: "https://mcl.vercel.app/",
      },
    },
    {
      title: "Jiksi.com",
      techStack: ["Side Project", "Next.js", "Tailwind CSS", "Framer Motion"],
      description: "My personal portfolio website.",
      link: {
        label: "Jiksi.com",
        href: "https://jiksi.com/",
      },
    },
  ],
} as const;
