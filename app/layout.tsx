import type { Metadata, Viewport } from "next";
import { Inter, Sora, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const sora = Sora({ variable: "--font-sora", subsets: ["latin"], display: "swap", weight: ["500", "600", "700"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description: site.bio,
  keywords: [
    "Cristian Solano",
    "Software Engineer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "C#",
    ".NET",
    "PostgreSQL",
    "Supabase",
    "Costa Rica",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    title: `${site.name} — ${site.role}`,
    description: site.bio,
    siteName: `${site.name} — Portfolio`,
    locale: "en_US",
    images: [{ url: site.logo, width: 500, height: 500, alt: `${site.name} logo` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.bio,
    images: [site.logo],
  },
  icons: {
    icon: [{ url: "/projects/icon.png" }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a1017" },
    { media: "(prefers-color-scheme: light)", color: "#f5fafb" },
  ],
};

const themeScript = `
(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.add('light');}}catch(e){}})();
`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  email: `mailto:${site.email}`,
  url: site.url,
  image: `${site.url}${site.logo}`,
  address: { "@type": "PostalAddress", addressCountry: "CR", addressLocality: site.location },
  sameAs: [site.socials.github, site.socials.linkedin],
  knowsAbout: ["React", "Next.js", "TypeScript", "Node.js", "C#", ".NET", "PostgreSQL", "Supabase", "AI Integration"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${inter.variable} ${sora.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
