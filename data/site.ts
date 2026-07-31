export const site = {
  name: "Cristian Solano",
  role: "Full-Stack Software Engineer",
  shortRole: "Software Engineer",
  tagline: "I build scalable platforms and business automation that turn messy, manual operations into clean, reliable software.",
  location: "Costa Rica",
  email: "bycrissr189@gmail.com",
  phone: "+506 7143-4066",
  phoneHref: "+50671434066",
  cv: "/CV/CristianSolanoResume.pdf",
  logo: "/LogoBigPortrait.png",
  // Update to your production domain when deployed.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://cristiansolano.dev",
  bio: "Software Engineer with 2+ years of experience building scalable platforms and business automation solutions across retail, healthcare, and telecommunications. I focus on modeling complex business domains and shipping maintainable software grounded in SOLID principles, Clean Architecture, and automated testing.",
  socials: {
    github: "https://github.com/ByCristtv",
    linkedin: "https://www.linkedin.com/in/crissr189/",
  },
  stats: [
    { value: "2+", label: "Years building software" },
    { value: "3", label: "Industries served" },
    { value: "6+", label: "Shipped products" },
    { value: "100%", label: "Typed, tested code" },
  ],
} as const;

export const navItems = [
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Work", href: "/#work" },
  { name: "Process", href: "/#process" },
  { name: "Contact", href: "/#contact" },
] as const;
