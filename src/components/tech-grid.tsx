"use client";

import React from "react";
import {
  FaNodeJs,
  FaGitAlt,
  FaJava,
  FaDatabase,
  FaNetworkWired,
  FaMicrochip,
  FaProjectDiagram,
} from "react-icons/fa";
import { FaFilePdf, FaCss3Alt } from "react-icons/fa6";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiCplusplus,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiClerk,
  SiHtml5,
  SiTrpc,
  SiSqlite,
  SiGithub,
  SiCloudflare,
  SiVercel,
} from "react-icons/si";
import { TbSql, TbApi } from "react-icons/tb";

interface TechItem {
  name: string;
  subtitle: string;
  icon: React.ReactNode;
  hoverBorder: string;
  hoverShadow: string;
  iconBoxHover: string;
  accentBar: string;
}

interface TechCategory {
  id: string;
  label: string;
  items: TechItem[];
}

const CATEGORIES: TechCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    items: [
      {
        name: "Next.js",
        subtitle: "App Router & SSR",
        icon: <SiNextdotjs size={21} />,
        hoverBorder: "hover:border-purple-300/80",
        hoverShadow: "hover:shadow-[0_12px_28px_-6px_rgba(147,51,234,0.14)]",
        iconBoxHover: "group-hover:bg-purple-50 group-hover:border-purple-200/80 group-hover:text-purple-600",
        accentBar: "bg-purple-600",
      },
      {
        name: "React.js",
        subtitle: "UI Library",
        icon: <SiReact size={21} />,
        hoverBorder: "hover:border-sky-300/80",
        hoverShadow: "hover:shadow-[0_12px_28px_-6px_rgba(14,165,233,0.14)]",
        iconBoxHover: "group-hover:bg-sky-50 group-hover:border-sky-200/80 group-hover:text-sky-500",
        accentBar: "bg-sky-500",
      },
      {
        name: "HTML5",
        subtitle: "Semantic Structure",
        icon: <SiHtml5 size={21} />,
        hoverBorder: "hover:border-orange-300/80",
        hoverShadow: "hover:shadow-[0_12px_28px_-6px_rgba(227,79,38,0.14)]",
        iconBoxHover: "group-hover:bg-orange-50 group-hover:border-orange-200/80 group-hover:text-[#E34F26]",
        accentBar: "bg-[#E34F26]",
      },
      {
        name: "CSS3",
        subtitle: "Styling & Layout",
        icon: <FaCss3Alt size={22} />,
        hoverBorder: "hover:border-blue-300/80",
        hoverShadow: "hover:shadow-[0_12px_28px_-6px_rgba(21,114,182,0.14)]",
        iconBoxHover: "group-hover:bg-blue-50 group-hover:border-blue-200/80 group-hover:text-[#1572B6]",
        accentBar: "bg-[#1572B6]",
      },
      {
        name: "Tailwind CSS",
        subtitle: "Utility-First CSS",
        icon: <SiTailwindcss size={21} />,
        hoverBorder: "hover:border-cyan-300/80",
        hoverShadow: "hover:shadow-[0_12px_28px_-6px_rgba(6,182,212,0.14)]",
        iconBoxHover: "group-hover:bg-cyan-50 group-hover:border-cyan-200/80 group-hover:text-[#06B6D4]",
        accentBar: "bg-[#06B6D4]",
      },
      {
        name: "shadcn/ui",
        subtitle: "Accessible UI Components",
        icon: (
          <svg width="20" height="20" viewBox="0 0 256 256" fill="none" stroke="currentColor" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round">
            <line x1="208" y1="128" x2="128" y2="208" />
            <line x1="192" y1="40" x2="40" y2="192" />
          </svg>
        ),
        hoverBorder: "hover:border-purple-300/80",
        hoverShadow: "hover:shadow-[0_12px_28px_-6px_rgba(147,51,234,0.14)]",
        iconBoxHover: "group-hover:bg-purple-50 group-hover:border-purple-200/80 group-hover:text-purple-600",
        accentBar: "bg-purple-600",
      },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    items: [
      {
        name: "Node.js",
        subtitle: "JavaScript Runtime",
        icon: <FaNodeJs size={21} />,
        hoverBorder: "hover:border-emerald-300/80",
        hoverShadow: "hover:shadow-[0_12px_28px_-6px_rgba(95,160,78,0.14)]",
        iconBoxHover: "group-hover:bg-emerald-50 group-hover:border-emerald-200/80 group-hover:text-[#5FA04E]",
        accentBar: "bg-[#5FA04E]",
      },
      {
        name: "Express.js",
        subtitle: "Web Framework & APIs",
        icon: <SiExpress size={21} />,
        hoverBorder: "hover:border-purple-300/80",
        hoverShadow: "hover:shadow-[0_12px_28px_-6px_rgba(147,51,234,0.14)]",
        iconBoxHover: "group-hover:bg-purple-50 group-hover:border-purple-200/80 group-hover:text-purple-600",
        accentBar: "bg-purple-600",
      },
      {
        name: "tRPC",
        subtitle: "End-to-End Typesafe APIs",
        icon: <SiTrpc size={21} />,
        hoverBorder: "hover:border-blue-300/80",
        hoverShadow: "hover:shadow-[0_12px_28px_-6px_rgba(57,140,203,0.14)]",
        iconBoxHover: "group-hover:bg-blue-50 group-hover:border-blue-200/80 group-hover:text-[#398CCB]",
        accentBar: "bg-[#398CCB]",
      },
      {
        name: "REST APIs",
        subtitle: "API Design & Architecture",
        icon: <TbApi size={24} />,
        hoverBorder: "hover:border-purple-300/80",
        hoverShadow: "hover:shadow-[0_12px_28px_-6px_rgba(147,51,234,0.14)]",
        iconBoxHover: "group-hover:bg-purple-50 group-hover:border-purple-200/80 group-hover:text-purple-600",
        accentBar: "bg-purple-600",
      },
    ],
  },
  {
    id: "database",
    label: "Databases & ORM",
    items: [
      {
        name: "PostgreSQL",
        subtitle: "Relational Database",
        icon: <SiPostgresql size={21} />,
        hoverBorder: "hover:border-blue-300/80",
        hoverShadow: "hover:shadow-[0_12px_28px_-6px_rgba(65,105,225,0.14)]",
        iconBoxHover: "group-hover:bg-blue-50 group-hover:border-blue-200/80 group-hover:text-[#4169E1]",
        accentBar: "bg-[#4169E1]",
      },
      {
        name: "SQLite",
        subtitle: "Lightweight SQL Engine",
        icon: <SiSqlite size={21} />,
        hoverBorder: "hover:border-sky-300/80",
        hoverShadow: "hover:shadow-[0_12px_28px_-6px_rgba(0,59,87,0.14)]",
        iconBoxHover: "group-hover:bg-sky-50 group-hover:border-sky-200/80 group-hover:text-[#003B57]",
        accentBar: "bg-[#003B57]",
      },
      {
        name: "Prisma ORM",
        subtitle: "Type-safe ORM & Migrations",
        icon: <SiPrisma size={21} />,
        hoverBorder: "hover:border-purple-300/80",
        hoverShadow: "hover:shadow-[0_12px_28px_-6px_rgba(147,51,234,0.14)]",
        iconBoxHover: "group-hover:bg-purple-50 group-hover:border-purple-200/80 group-hover:text-purple-600",
        accentBar: "bg-purple-600",
      },
    ],
  },
  {
    id: "tools",
    label: "Tools & Services",
    items: [
      {
        name: "Git",
        subtitle: "Version Control",
        icon: <FaGitAlt size={22} />,
        hoverBorder: "hover:border-orange-300/80",
        hoverShadow: "hover:shadow-[0_12px_28px_-6px_rgba(240,80,50,0.14)]",
        iconBoxHover: "group-hover:bg-orange-50 group-hover:border-orange-200/80 group-hover:text-[#F05032]",
        accentBar: "bg-[#F05032]",
      },
      {
        name: "GitHub",
        subtitle: "Collaboration & Actions",
        icon: <SiGithub size={21} />,
        hoverBorder: "hover:border-purple-300/80",
        hoverShadow: "hover:shadow-[0_12px_28px_-6px_rgba(147,51,234,0.14)]",
        iconBoxHover: "group-hover:bg-purple-50 group-hover:border-purple-200/80 group-hover:text-purple-600",
        accentBar: "bg-purple-600",
      },
      {
        name: "Clerk",
        subtitle: "Auth & User Management",
        icon: <SiClerk size={21} />,
        hoverBorder: "hover:border-purple-300/80",
        hoverShadow: "hover:shadow-[0_12px_28px_-6px_rgba(108,71,255,0.14)]",
        iconBoxHover: "group-hover:bg-purple-50 group-hover:border-purple-200/80 group-hover:text-[#6C47FF]",
        accentBar: "bg-[#6C47FF]",
      },
      {
        name: "Cloudflare R2",
        subtitle: "Fast Object Storage",
        icon: <SiCloudflare size={21} />,
        hoverBorder: "hover:border-orange-300/80",
        hoverShadow: "hover:shadow-[0_12px_28px_-6px_rgba(243,128,32,0.14)]",
        iconBoxHover: "group-hover:bg-orange-50 group-hover:border-orange-200/80 group-hover:text-[#F38020]",
        accentBar: "bg-[#F38020]",
      },
      {
        name: "Vercel",
        subtitle: "Deployment & Edge",
        icon: <SiVercel size={18} />,
        hoverBorder: "hover:border-purple-300/80",
        hoverShadow: "hover:shadow-[0_12px_28px_-6px_rgba(147,51,234,0.14)]",
        iconBoxHover: "group-hover:bg-purple-50 group-hover:border-purple-200/80 group-hover:text-purple-600",
        accentBar: "bg-purple-600",
      },
      {
        name: "Inngest",
        subtitle: "Event-Driven Queues",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        ),
        hoverBorder: "hover:border-emerald-300/80",
        hoverShadow: "hover:shadow-[0_12px_28px_-6px_rgba(16,185,129,0.14)]",
        iconBoxHover: "group-hover:bg-emerald-50 group-hover:border-emerald-200/80 group-hover:text-[#10B981]",
        accentBar: "bg-[#10B981]",
      },
      {
        name: "Gemini API",
        subtitle: "Multimodal AI & LLM",
        icon: (
          <svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 24C12 17.3726 6.62742 12 0 12C6.62742 12 12 6.62742 12 0C12 6.62742 17.3726 12 24 12C17.3726 12 12 17.3726 12 24Z" />
          </svg>
        ),
        hoverBorder: "hover:border-blue-300/80",
        hoverShadow: "hover:shadow-[0_12px_28px_-6px_rgba(26,115,232,0.14)]",
        iconBoxHover: "group-hover:bg-blue-50 group-hover:border-blue-200/80 group-hover:text-[#1A73E8]",
        accentBar: "bg-[#1A73E8]",
      },
    ],
  },
  {
    id: "languages",
    label: "Languages",
    items: [
      {
        name: "TypeScript",
        subtitle: "Type-Safe JavaScript",
        icon: <SiTypescript size={20} />,
        hoverBorder: "hover:border-blue-300/80",
        hoverShadow: "hover:shadow-[0_12px_28px_-6px_rgba(49,120,198,0.14)]",
        iconBoxHover: "group-hover:bg-blue-50 group-hover:border-blue-200/80 group-hover:text-[#3178C6]",
        accentBar: "bg-[#3178C6]",
      },
      {
        name: "JavaScript",
        subtitle: "Modern ES6+ Standards",
        icon: <SiJavascript size={20} />,
        hoverBorder: "hover:border-amber-300/80",
        hoverShadow: "hover:shadow-[0_12px_28px_-6px_rgba(234,179,8,0.14)]",
        iconBoxHover: "group-hover:bg-amber-50 group-hover:border-amber-200/80 group-hover:text-[#EAB308]",
        accentBar: "bg-[#EAB308]",
      },
      {
        name: "SQL",
        subtitle: "Relational Queries & DDL",
        icon: <TbSql size={24} />,
        hoverBorder: "hover:border-purple-300/80",
        hoverShadow: "hover:shadow-[0_12px_28px_-6px_rgba(147,51,234,0.14)]",
        iconBoxHover: "group-hover:bg-purple-50 group-hover:border-purple-200/80 group-hover:text-purple-600",
        accentBar: "bg-purple-600",
      },
      {
        name: "C / C++",
        subtitle: "Algorithms & Low-Level",
        icon: <SiCplusplus size={21} />,
        hoverBorder: "hover:border-blue-300/80",
        hoverShadow: "hover:shadow-[0_12px_28px_-6px_rgba(0,89,156,0.14)]",
        iconBoxHover: "group-hover:bg-blue-50 group-hover:border-blue-200/80 group-hover:text-[#00599C]",
        accentBar: "bg-[#00599C]",
      },
      {
        name: "Java",
        subtitle: "OOP & System Design",
        icon: <FaJava size={22} />,
        hoverBorder: "hover:border-orange-300/80",
        hoverShadow: "hover:shadow-[0_12px_28px_-6px_rgba(237,139,0,0.14)]",
        iconBoxHover: "group-hover:bg-orange-50 group-hover:border-orange-200/80 group-hover:text-[#ED8B00]",
        accentBar: "bg-[#ED8B00]",
      },
    ],
  },
  {
    id: "fundamentals",
    label: "CS Fundamentals",
    items: [
      {
        name: "Data Structures & Algorithms",
        subtitle: "Trees, Graphs, DP & Sorting",
        icon: <FaProjectDiagram size={20} />,
        hoverBorder: "hover:border-purple-300/80",
        hoverShadow: "hover:shadow-[0_12px_28px_-6px_rgba(147,51,234,0.14)]",
        iconBoxHover: "group-hover:bg-purple-50 group-hover:border-purple-200/80 group-hover:text-purple-600",
        accentBar: "bg-purple-600",
      },
      {
        name: "DBMS",
        subtitle: "ACID, Indexing & Normalization",
        icon: <FaDatabase size={19} />,
        hoverBorder: "hover:border-purple-300/80",
        hoverShadow: "hover:shadow-[0_12px_28px_-6px_rgba(147,51,234,0.14)]",
        iconBoxHover: "group-hover:bg-purple-50 group-hover:border-purple-200/80 group-hover:text-purple-600",
        accentBar: "bg-purple-600",
      },
      {
        name: "Operating Systems",
        subtitle: "Processes, Threads & Memory",
        icon: <FaMicrochip size={20} />,
        hoverBorder: "hover:border-purple-300/80",
        hoverShadow: "hover:shadow-[0_12px_28px_-6px_rgba(147,51,234,0.14)]",
        iconBoxHover: "group-hover:bg-purple-50 group-hover:border-purple-200/80 group-hover:text-purple-600",
        accentBar: "bg-purple-600",
      },
      {
        name: "Computer Networks",
        subtitle: "TCP/IP, HTTP/S & DNS",
        icon: <FaNetworkWired size={19} />,
        hoverBorder: "hover:border-purple-300/80",
        hoverShadow: "hover:shadow-[0_12px_28px_-6px_rgba(147,51,234,0.14)]",
        iconBoxHover: "group-hover:bg-purple-50 group-hover:border-purple-200/80 group-hover:text-purple-600",
        accentBar: "bg-purple-600",
      },
    ],
  },
];

export default function TechGrid() {
  const [activeFilter, setActiveFilter] = React.useState<string>("all");
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const displayedCategories =
    activeFilter === "all"
      ? CATEGORIES
      : CATEGORIES.filter((c) => c.id === activeFilter);

  const totalCount = CATEGORIES.reduce((acc, c) => acc + c.items.length, 0);

  return (
    <section id="resume" ref={sectionRef} className="w-full">
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-24">
        {/* Header + Resume CTA */}
        <div
          className={[
            "flex flex-wrap items-center justify-between gap-x-4 gap-y-3 transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          ].join(" ")}
        >
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-[#222222] sm:text-4xl">
              Tech
            </h2>
            <span className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-zinc-600">
              what i bring
            </span>
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-xl bg-zinc-900 px-5 py-2.5 font-inter text-xs sm:text-sm font-semibold text-white shadow-xs ring-1 ring-zinc-900/10 transition-all duration-200 hover:bg-zinc-800 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
          >
            <FaFilePdf className="h-4 w-4 text-red-500 transition-transform duration-200 group-hover:scale-110" />
            <span>View Resume</span>
            <span className="text-xs text-zinc-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white">↗</span>
          </a>
        </div>

        {/* Filter Pills with Count Badges */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveFilter("all")}
            className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 font-mono text-xs font-medium transition-all duration-200 cursor-pointer ${
              activeFilter === "all"
                ? "bg-zinc-900 text-white shadow-xs ring-1 ring-zinc-900"
                : "border border-zinc-200/80 bg-white text-zinc-600 hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900"
            }`}
          >
            <span>All</span>
            <span
              className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                activeFilter === "all"
                  ? "bg-white/20 text-white"
                  : "bg-zinc-100 text-zinc-500"
              }`}
            >
              {totalCount}
            </span>
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveFilter(cat.id)}
              className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 font-mono text-xs font-medium transition-all duration-200 cursor-pointer ${
                activeFilter === cat.id
                  ? "bg-zinc-900 text-white shadow-xs ring-1 ring-zinc-900"
                  : "border border-zinc-200/80 bg-white text-zinc-600 hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900"
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                  activeFilter === cat.id
                    ? "bg-white/20 text-white"
                    : "bg-zinc-100 text-zinc-500"
                }`}
              >
                {cat.items.length}
              </span>
            </button>
          ))}
        </div>

        {/* Categorized Tech Stacks */}
        <div className="mt-10 space-y-9">
          {displayedCategories.map((category) => (
            <div key={category.id} className="space-y-4">
              {/* Category Eyebrow Divider */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">
                    {category.label}
                  </span>
                </div>
                <span className="h-px flex-1 bg-gradient-to-r from-zinc-200/90 via-zinc-200/40 to-transparent" />
                <span className="font-mono text-[11px] text-zinc-400">
                  {category.items.length} {category.items.length === 1 ? "skill" : "skills"}
                </span>
              </div>

              {/* Enhanced Appealing Tech Cards Grid */}
              <div className="grid grid-cols-1 gap-3 min-[460px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-3.5">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className={[
                      "group relative flex items-center justify-between gap-3 overflow-hidden rounded-2xl border border-zinc-200/80 bg-white p-3.5 sm:p-4",
                      "shadow-[0_2px_8px_-2px_rgba(15,23,42,0.03)] transition-all duration-300 ease-out",
                      "hover:-translate-y-1 cursor-default",
                      item.hoverBorder,
                      item.hoverShadow,
                    ].join(" ")}
                  >
                    {/* Subtle Ambient Radial Light behind card on hover */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-zinc-100/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />

                    {/* Expanding Bottom Brand Accent Line */}
                    <div
                      aria-hidden
                      className={[
                        "absolute bottom-0 left-1/2 h-[2.5px] w-0 -translate-x-1/2 rounded-full opacity-0 transition-all duration-300 ease-out group-hover:w-16 group-hover:opacity-100",
                        item.accentBar,
                      ].join(" ")}
                    />

                    {/* Left: Icon + Titles */}
                    <div className="flex min-w-0 items-center gap-3.5">
                      {/* Icon Container */}
                      <div
                        className={[
                          "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-zinc-200/70 bg-zinc-50/80 text-zinc-700",
                          "transition-all duration-300 ease-out group-hover:scale-105",
                          item.iconBoxHover,
                        ].join(" ")}
                      >
                        {item.icon}
                      </div>

                      {/* Text */}
                      <div className="min-w-0 flex-1">
                        <div className="truncate font-sora text-sm font-semibold text-zinc-800 transition-colors duration-200 group-hover:text-zinc-950">
                          {item.name}
                        </div>
                        <div className="truncate font-mono text-[11px] text-zinc-400 transition-colors duration-200 group-hover:text-zinc-500">
                          {item.subtitle}
                        </div>
                      </div>
                    </div>

                    {/* Right: Subtle mini-arrow indicator on hover */}
                    <span
                      aria-hidden
                      className="hidden shrink-0 font-mono text-xs text-zinc-300 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 group-hover:text-zinc-400 min-[460px]:inline-block"
                    >
                      ↗
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
