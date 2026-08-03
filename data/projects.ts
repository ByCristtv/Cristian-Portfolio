export type StackGroup = { label: string; items: string[] };
export type Feature = { title: string; description: string; icon: string };
export type Highlight = { title: string; description: string };
export type Metric = { value: string; label: string };

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  type: string;
  year: string;
  role: string;
  timeline?: string;
  featured: boolean;
  image: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  overview: string;
  context: string;
  goal: string;
  business: {
    problem: string;
    stakes: string;
    solution: string;
    benefits: string[];
  };
  technical: {
    architecture: string;
    stack: StackGroup[];
    highlights: Highlight[];
    challenges: { title: string; description: string }[];
    lessons: string[];
  };
  features: Feature[];
  metrics?: Metric[];
};

export const projects: Project[] = [
  {
    slug: "motorepuestos-arias",
    title: "Motorepuestos Arias POS",
    subtitle:
      "A multi-branch point-of-sale platform engineered as a SaaS product for retail businesses of any size.",
    category: "Retail · Auto Parts",
    type: "SaaS · Point of Sale",
    year: "2026",
    role: "Sole Engineer — architecture, product & delivery",
    timeline: "Client build, evolved into a reusable SaaS",
    featured: true,
    image: "/projects/pos.png",
    tags: [
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Supabase Auth",
      "Supabase Storage",
      "TanStack Query",
      "Vite",
      "Tailwind CSS",
      "Vitest",
      "Playwright",
      "Vercel",
    ],
    liveUrl: "https://pos-motorepuestos.vercel.app/",
    repoUrl: "https://github.com/ByCristtv/React-POS",
    overview:
      "An auto-parts store owner needed software to replace a tangle of manual processes — tracking inventory, checking stock movements, invoicing, and keeping tabs on customers who buy on credit. Rather than building a throwaway one-off, I engineered the system as a SaaS product with a multi-branch, multi-warehouse, multi-register architecture so it can adapt from a single small shop to a larger multi-location business.",
    context:
      "Direct engagement with the owner of Motorepuestos Arias, a local auto-parts store, who needed to move day-to-day operations off spreadsheets and paper.",
    goal: "Replace manual sales, inventory, and credit tracking with one reliable system — and make that system reusable for other retailers.",
    business: {
      problem:
        "Sales, inventory, invoicing, and customer credit were handled manually. There was no reliable view of stock on hand, no low-stock warnings, and credit balances lived on paper — which meant lost time, human error, and money that was easy to lose track of.",
      stakes:
        "For a parts retailer, stock accuracy and fast invoicing are the business. Every mistake is a missed sale, a wrong count, or a receivable that quietly disappears.",
      solution:
        "A web point-of-sale system that handles the full retail loop: fast invoicing, product management, real-time inventory with movement history, low-stock alerts, customer and supplier records, credit sales with a running receivables ledger, and role-based access for cashiers and admins. Built to run one store today and many tomorrow.",
      benefits: [
        "Real-time inventory with a full history of every stock movement.",
        "Automatic low-stock alerts so nothing sells out unnoticed.",
        "Fast, customizable invoicing tailored to the business.",
        "Credit sales tracked per customer with a clear receivables balance.",
        "Roles and permissions (cashier, admin) that keep operations safe.",
        "One codebase that scales from a single shop to multi-branch operations.",
      ],
    },
    technical: {
      architecture:
        "The core design challenge was modeling a multi-branch, multi-warehouse, multi-register domain in a single, tenant-adaptable product. I approached it with SOLID principles and Clean Architecture, isolating business rules from the data and UI layers, and going through multiple refactoring passes until the code was polished and well-structured. Supabase provides Postgres, authentication, and object storage behind a typed data layer, with TanStack Query owning server state, caching, and invalidation on the client.",
      stack: [
        { label: "Frontend", items: ["React", "TypeScript", "Vite", "Tailwind CSS", "TanStack Query"] },
        { label: "Backend & Data", items: ["Supabase", "PostgreSQL", "Supabase Auth", "Supabase Storage (S3)"] },
        { label: "Testing", items: ["Vitest", "Playwright"] },
        { label: "Delivery", items: ["Vercel", "Git & GitHub"] },
      ],
      highlights: [
        {
          title: "Multi-branch / multi-warehouse / multi-register model",
          description:
            "A single data model that cleanly separates branches, warehouses, and registers so stock and sales stay correct across locations — the hardest and most valuable part of the build.",
        },
        {
          title: "Role-based access control",
          description:
            "Cashier and admin roles with scoped permissions, enforced through Supabase Auth and row-level policies.",
        },
        {
          title: "Inventory movement ledger",
          description:
            "Every stock change is recorded, giving an auditable history and driving real-time low-stock alerts.",
        },
        {
          title: "AI-assisted engineering",
          description:
            "I used AI assistants (Claude with Opus models, and Gemini) to pressure-test design decisions — comparing tradeoffs, hunting for weak points, and reviewing refactors — while keeping full ownership of the architecture.",
        },
      ],
      challenges: [
        {
          title: "Keeping stock correct across many locations",
          description:
            "Multi-warehouse inventory means concurrent movements can corrupt counts. I modeled stock as an append-only movement ledger so quantities are always derivable and auditable.",
        },
        {
          title: "One product, many businesses",
          description:
            "Turning a client tool into a SaaS meant designing for configurability without special-casing. Clean Architecture boundaries let the same rules serve a tiny shop or a multi-branch operation.",
        },
      ],
      lessons: [
        "Modeling the domain first — before the UI — pays off across every later feature.",
        "An append-only ledger beats mutable counters for anything money- or stock-related.",
        "AI review is a force multiplier when you stay the decision-maker, not a passenger.",
      ],
    },
    features: [
      { title: "Fast Invoicing", description: "Customizable invoices built for quick checkout.", icon: "Receipt" },
      { title: "Inventory Control", description: "Real-time stock with full movement history.", icon: "Boxes" },
      { title: "Low-Stock Alerts", description: "Automatic warnings before items run out.", icon: "Bell" },
      { title: "Multi-Warehouse", description: "Stock tracked across branches and warehouses.", icon: "Warehouse" },
      { title: "Roles & Permissions", description: "Scoped access for cashiers and admins.", icon: "ShieldCheck" },
      { title: "Credit & Receivables", description: "Per-customer credit sales and balances.", icon: "CreditCard" },
    ],
    metrics: [
      { value: "Paper → Digital", label: "Operations moved off spreadsheets" },
      { value: "Real-time", label: "Inventory & stock movements" },
      { value: "Multi-branch", label: "SaaS-ready architecture" },
    ],
  },

  {
    slug: "perfume-ecommerce",
    title: "Perfume E-commerce Platform",
    subtitle:
      "An all-in-one commerce platform with shared business logic and a fully custom storefront per brand — plus an AI assistant.",
    category: "Retail · E-commerce",
    type: "Hybrid SaaS · E-commerce",
    year: "2026",
    role: "Full-Stack Engineer",
    timeline: "Ongoing product",
    featured: true,
    image: "/projects/ecommerce.avif",
    tags: [
      "Next.js",
      "TypeScript",
      "React",
      "Supabase",
      "PostgreSQL",
      "Supabase Auth",
      "Supabase Storage",
      "ONVO Payments",
      "TanStack Query",
      "FastAPI",
      "Python",
      "Ollama · Llama 3",
      "Jest",
      "Playwright",
    ],
    repoUrl: "https://github.com/ByCristtv/Ecommerce-AI",
    overview:
      "An all-in-one solution for perfume shops. The admin business logic is designed to work for any fragrance store, while the storefront's UI/UX is crafted uniquely for each brand — making it a hybrid of custom software and SaaS: the logic runs the same everywhere, but every shop gets its own look and feel. An integrated AI chatbot answers frequently asked questions.",
    context:
      "A product built to serve perfume retailers, where every brand wants a distinct storefront but the same robust commerce engine underneath.",
    goal: "Give any perfume shop a complete commerce back office and a branded storefront, without rebuilding the business logic each time.",
    business: {
      problem:
        "Perfume shops need serious commerce tooling — variants, stock, payments, order management, analytics — but each brand also wants a storefront that looks like theirs, not a generic template. Off-the-shelf tools force a tradeoff between capability and identity.",
      stakes:
        "In fragrance retail, brand experience is the product. A generic storefront undercuts the brand; a bespoke rebuild for every client is too slow and costly.",
      solution:
        "A platform where the admin and business rules are shared across all shops, while the customer-facing UI/UX is fully tailored per brand. Owners get variant management, inventory with movement logs, payment integration, order handling, sales statistics, an FAQ chatbot, and buyer-tier rewards — all from one engine.",
      benefits: [
        "Complete admin back office that works for any perfume shop.",
        "Fully branded storefront and UX per client.",
        "Integrated payments via the ONVO gateway.",
        "Buyer tiers that let owners reward their best customers.",
        "Sales statistics for data-driven decisions.",
        "An AI assistant that handles common customer questions.",
      ],
    },
    technical: {
      architecture:
        "A Next.js application fronts a Supabase (PostgreSQL) data layer with authentication and object storage. Payments run through the ONVO API. The AI FAQ assistant is served by a separate Python/FastAPI service running Llama 3 locally via Ollama, keeping the model self-hosted and decoupled from the storefront. Shared business logic lives behind stable interfaces so each brand's custom UI composes on top without forking the core.",
      stack: [
        { label: "Frontend", items: ["Next.js", "React", "TypeScript", "TanStack Query"] },
        { label: "Backend & Data", items: ["Supabase", "PostgreSQL", "Supabase Auth", "Supabase Storage (S3)"] },
        { label: "AI Service", items: ["Python", "FastAPI", "Ollama", "Llama 3"] },
        { label: "Payments & Testing", items: ["ONVO Payments API", "Jest", "Playwright"] },
      ],
      highlights: [
        {
          title: "Shared logic, bespoke storefronts",
          description:
            "One commerce engine drives every shop; the UI layer is fully themeable per brand, giving a SaaS-like core with custom-software polish.",
        },
        {
          title: "Self-hosted AI assistant",
          description:
            "A FastAPI microservice runs Llama 3 through Ollama to answer FAQs — no per-request cost to a third-party model, and full control over behavior.",
        },
        {
          title: "Product variants & movement logs",
          description:
            "Rich variant modeling with an inventory movement history and admin order management.",
        },
        {
          title: "Buyer tiers & rewards",
          description:
            "Configurable customer ranking so owners can reward top buyers on their own terms.",
        },
      ],
      challenges: [
        {
          title: "Custom UI without forking the core",
          description:
            "Per-brand storefronts risk turning into per-brand codebases. Keeping the business logic behind clean interfaces lets the UI vary while the engine stays single-source.",
        },
        {
          title: "Integrating AI as a service",
          description:
            "Running Llama 3 via Ollama behind FastAPI keeps the assistant isolated, independently scalable, and swappable without touching the storefront.",
        },
      ],
      lessons: [
        "A clear seam between 'engine' and 'experience' is what makes hybrid SaaS possible.",
        "Self-hosting an LLM is a real option when cost and control matter more than frontier capability.",
      ],
    },
    features: [
      { title: "Product Variants", description: "Full variant modeling and stock control.", icon: "Layers" },
      { title: "Payments", description: "Checkout through the ONVO payment gateway.", icon: "CreditCard" },
      { title: "AI FAQ Chatbot", description: "Self-hosted Llama 3 answers customer questions.", icon: "Bot" },
      { title: "Sales Statistics", description: "Analytics to guide business decisions.", icon: "BarChart3" },
      { title: "Buyer Tiers", description: "Reward your best customers with ranks.", icon: "Trophy" },
      { title: "Custom Branding", description: "A unique storefront UI/UX per shop.", icon: "Palette" },
    ],
    metrics: [
      { value: "All-in-one", label: "Commerce back office" },
      { value: "Per-brand", label: "Custom storefront UX" },
      { value: "Self-hosted", label: "AI assistant (Llama 3)" },
    ],
  },

  {
    slug: "freeway-field-reports",
    title: "Freeway Field Reports",
    subtitle:
      "A React Native app that turns on-site incident reporting into structured, photo-rich PDFs for a telecom support team.",
    category: "Telecommunications",
    type: "Mobile App · Field Reporting",
    year: "2024",
    role: "Mobile Developer (collaboration with a senior engineer)",
    timeline: "Iterative, task-based collaboration",
    featured: true,
    image: "/projects/Movi.jpeg",
    tags: [
      "React Native",
      "Expo",
      "TypeScript",
      "Firebase Auth",
      "Firestore",
      "PDF Export",
      "Git & GitHub",
    ],
    repoUrl: "https://github.com/ByCristtv/PDF-Reports-Generator",
    overview:
      "A senior engineer I knew brought me on to help build a mobile app in React Native, Expo, and Firebase. The client leads support at a telecommunications and Wi-Fi company and needed a way to log incident data in the field, attach photos to each report, and export everything to a printable PDF. We worked in a task-based rhythm, reviewing the app together to discuss improvements.",
    context:
      "Collaboration under a senior developer for Freeway, serving a telecom/Wi-Fi company's field support lead who documents on-site incidents.",
    goal: "Replace ad-hoc incident notes with a fast, structured mobile reporting flow that produces clean, printable PDFs.",
    business: {
      problem:
        "Field technicians needed to capture specific incident data on-site, attach photographs as evidence, and produce a shareable, printable record. Doing this manually is slow and inconsistent.",
      stakes:
        "In telecom support, a clear incident record is what closes a ticket and protects the company. Slow or messy reporting costs time on every single visit.",
      solution:
        "A mobile app that guides the technician through a structured report form, auto-completes fields from existing data, lets them snap and attach photos, and exports the finished report to PDF for printing.",
      benefits: [
        "Structured, consistent incident reports from the field.",
        "Photos captured and embedded directly in each report.",
        "One-tap export to a printable PDF.",
        "Auto-completed fields that cut manual typing and errors.",
      ],
    },
    technical: {
      architecture:
        "A React Native + Expo app backed by Firebase (Authentication and Firestore). My focus areas were the report form interfaces, autocompletion that pulls data from Firebase through an API, base64 encoding of captured photos so they embed cleanly into the report and the exported PDF, and overall UI optimization.",
      stack: [
        { label: "Mobile", items: ["React Native", "Expo", "TypeScript"] },
        { label: "Backend", items: ["Firebase Auth", "Firestore"] },
        { label: "Output", items: ["PDF Export", "Base64 image embedding"] },
        { label: "Workflow", items: ["Git & GitHub"] },
      ],
      highlights: [
        {
          title: "Field autocompletion via API",
          description:
            "Report fields auto-complete by fetching reference data from Firebase, so technicians type less and make fewer mistakes.",
        },
        {
          title: "Base64 photo embedding",
          description:
            "Captured photos are decoded to base64 so they render reliably inside the report and the exported PDF, independent of device file paths.",
        },
        {
          title: "PDF export",
          description:
            "Structured reports export to a clean, printable PDF ready to hand off or file.",
        },
        {
          title: "UI optimization",
          description:
            "Focused work on the form UX and interface performance for fast, comfortable data entry in the field.",
        },
      ],
      challenges: [
        {
          title: "Reliable images inside PDFs",
          description:
            "Embedding on-device photos into a generated PDF is fragile across platforms. Base64 encoding made image rendering consistent end-to-end.",
        },
        {
          title: "Fast data entry in the field",
          description:
            "Technicians work quickly on-site, so autocompletion and a streamlined form were essential to keep reporting friction-free.",
        },
      ],
      lessons: [
        "Collaborating under a senior engineer sharpened my code-review and iteration habits.",
        "Small UX decisions in a form add up to real time saved on every field visit.",
      ],
    },
    features: [
      { title: "Structured Reports", description: "Guided forms for consistent incident data.", icon: "FileText" },
      { title: "Photo Capture", description: "Snap and attach photos to any report.", icon: "Camera" },
      { title: "Autocomplete", description: "Fields prefilled from Firebase via API.", icon: "Zap" },
      { title: "PDF Export", description: "One-tap printable report generation.", icon: "FileDown" },
      { title: "Secure Access", description: "Authenticated with Firebase Auth.", icon: "Lock" },
      { title: "Mobile-first", description: "Built for fast on-site use.", icon: "Smartphone" },
    ],
    metrics: [
      { value: "Field-ready", label: "Structured mobile reporting" },
      { value: "Photo → PDF", label: "Evidence embedded in reports" },
      { value: "Autocomplete", label: "Less typing, fewer errors" },
    ],
  },

  {
    slug: "nursing-home-cariari",
    title: "Nursing Home Cariari",
    subtitle:
      "A pro-bono care-management system that moved a non-profit elderly home off spreadsheets — later re-engineered on a stronger stack.",
    category: "Healthcare · Non-profit",
    type: "Web App · Care Management",
    year: "2024",
    role: "Sole Engineer (volunteer / community project)",
    timeline: "v1 built pro-bono, later migrated to a modern stack",
    featured: true,
    image: "/projects/nursing.png",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "Supabase",
      "PostgreSQL",
      "Supabase Auth",
      "Supabase Storage",
      "Firebase (v1)",
    ],
    liveUrl: "https://hogar-cariari.web.app/",
    repoUrl: "https://github.com/ByCristtv/NursingHome-Cariari/tree/main/hogar-cariari",
    overview:
      "This started as a university community-service project, built pro-bono for a non-profit home caring for elderly residents. Their records — personal information, medical conditions, prescriptions, and upcoming doctor's appointments — were kept in spreadsheets and handwritten notebooks. I built a system to manage all of it, and later migrated it to a more structured, better-practiced stack as my tooling matured.",
    context:
      "A non-profit elderly care home in Cariari, delivered as unpaid community-service work.",
    goal: "Give caregivers a reliable, searchable system for resident records — replacing spreadsheets and notebooks.",
    business: {
      problem:
        "Each resident's personal details, pathologies, prescriptions, and pending medical appointments were tracked across Excel and paper notebooks. That made information slow to find, easy to lose, and hard to keep current for people whose care depends on it.",
      stakes:
        "In elderly care, accurate, up-to-date records aren't paperwork — they directly affect residents' health and safety.",
      solution:
        "A web app with a searchable resident directory, a panel for pending medical appointments, prescription management, and each resident's full personal and medical profile — all in one place, always current.",
      benefits: [
        "A single searchable source of truth for every resident.",
        "Pending medical appointments visible at a glance.",
        "Prescriptions and medical conditions managed digitally.",
        "Profile photos to quickly and correctly identify residents.",
        "Records that stay current, unlike scattered notebooks.",
      ],
    },
    technical: {
      architecture:
        "The first version was built with Vite, React, and JavaScript on a Firebase (Firestore) non-relational backend, and it met all the requirements. As AI tooling and my own practices improved, I re-engineered it toward a more structured design: TypeScript, a relational PostgreSQL database on Supabase, Supabase Auth, and Supabase Storage — the last of which added resident profile photos. The migration brought better structure, better practices, and a cleaner UI.",
      stack: [
        { label: "Frontend", items: ["React", "TypeScript", "Vite"] },
        { label: "Backend (v2)", items: ["Supabase", "PostgreSQL", "Supabase Auth", "Supabase Storage (S3)"] },
        { label: "Backend (v1)", items: ["Firebase", "Firestore", "JavaScript"] },
      ],
      highlights: [
        {
          title: "Searchable resident directory",
          description:
            "A table with a search bar to find any resident and open their full personal and medical profile instantly.",
        },
        {
          title: "Appointments panel",
          description:
            "A dedicated view of pending medical appointments so nothing gets missed.",
        },
        {
          title: "Firebase → Postgres migration",
          description:
            "Re-platformed from a non-relational Firebase backend to a relational Supabase/PostgreSQL model with TypeScript and stronger practices.",
        },
        {
          title: "Resident profile photos",
          description:
            "Supabase Storage was introduced in v2 to attach profile photos for quick, correct identification.",
        },
      ],
      challenges: [
        {
          title: "Re-platforming a live tool",
          description:
            "Moving from Firestore's document model to a relational schema meant rethinking data relationships while preserving everything the home already relied on.",
        },
        {
          title: "Building for non-technical caregivers",
          description:
            "The UI had to be simple enough for staff with no technical background, which drove the cleaner v2 interface.",
        },
      ],
      lessons: [
        "Revisiting real projects as your skills grow is one of the best ways to learn.",
        "Relational modeling paid off the moment the data had real relationships.",
        "Pro-bono work sharpens the same engineering judgment paid work demands.",
      ],
    },
    features: [
      { title: "Resident Search", description: "Find any resident and open their profile.", icon: "Search" },
      { title: "Appointments", description: "Track pending medical appointments.", icon: "Calendar" },
      { title: "Prescriptions", description: "Manage medications and conditions.", icon: "Pill" },
      { title: "Profile Photos", description: "Identify residents at a glance.", icon: "UserCircle" },
      { title: "Secure Access", description: "Authenticated caregiver access.", icon: "ShieldCheck" },
      { title: "Health Records", description: "Personal and medical info in one place.", icon: "HeartPulse" },
    ],
    metrics: [
      { value: "Pro-bono", label: "Community-service project" },
      { value: "Paper → Digital", label: "Records off spreadsheets" },
      { value: "Re-engineered", label: "Firebase → PostgreSQL" },
    ],
  },

  {
    slug: "realtime-chat",
    title: "Real-Time Chat App",
    subtitle:
      "A personal project exploring real-time messaging and video calls with a clean, responsive UI.",
    category: "Personal Project",
    type: "Web App · Real-time",
    year: "2024",
    role: "Personal project",
    featured: false,
    image: "/projects/ChatApp.png",
    tags: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "Vite",
      "Firebase",
      "ZegoCloud",
      "Context API",
      "Vercel",
    ],
    repoUrl: "https://github.com/ByCristtv/Chat-App",
    overview:
      "A real-time chat application built to explore live messaging and video. Users can create accounts, join chat rooms, and send messages instantly, with video calling powered by ZegoCloud — all wrapped in a clean, responsive interface.",
    context: "A self-directed project to deepen my real-time and state-management skills.",
    goal: "Build a polished real-time messaging experience with authentication and video calling.",
    business: {
      problem:
        "Real-time features — instant messaging, presence, and video — are notoriously tricky to get right. I wanted hands-on experience wiring them together into a smooth product.",
      stakes:
        "As a learning project, the goal was mastery of real-time patterns and clean client-side state management.",
      solution:
        "A chat app with account creation, chat rooms, instant messaging, and ZegoCloud-powered video calls, with state handled through React's Context API.",
      benefits: [
        "Instant messaging with a responsive, modern UI.",
        "Video calling integrated via ZegoCloud.",
        "Accounts and rooms backed by Firebase.",
      ],
    },
    technical: {
      architecture:
        "A React (Vite) frontend using the Context API for client state, Firebase for authentication and data, and ZegoCloud for real-time video, deployed on Vercel.",
      stack: [
        { label: "Frontend", items: ["React", "JavaScript", "Vite", "Tailwind CSS", "Context API"] },
        { label: "Realtime & Data", items: ["Firebase", "ZegoCloud", "Node.js"] },
        { label: "Delivery", items: ["Vercel"] },
      ],
      highlights: [
        {
          title: "Instant messaging",
          description: "Real-time message delivery with a smooth, responsive UI.",
        },
        {
          title: "Video calling",
          description: "Integrated ZegoCloud for live video between users.",
        },
        {
          title: "Context-based state",
          description: "Client state managed cleanly with React's Context API.",
        },
      ],
      challenges: [
        {
          title: "Coordinating real-time state",
          description:
            "Keeping messaging, presence, and video in sync required careful client-side state design.",
        },
      ],
      lessons: [
        "Real-time UIs live or die by their state model.",
        "Third-party SDKs like ZegoCloud accelerate hard features when integrated cleanly.",
      ],
    },
    features: [
      { title: "Instant Messaging", description: "Real-time chat in shared rooms.", icon: "MessageSquareText" },
      { title: "Video Calls", description: "Live video powered by ZegoCloud.", icon: "Video" },
      { title: "Accounts & Rooms", description: "Auth and chat rooms via Firebase.", icon: "Users" },
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const list = projects;
  const i = list.findIndex((p) => p.slug === slug);
  if (i === -1) return { prev: undefined, next: undefined };
  const next = list[(i + 1) % list.length];
  const prev = list[(i - 1 + list.length) % list.length];
  return { prev, next };
}
