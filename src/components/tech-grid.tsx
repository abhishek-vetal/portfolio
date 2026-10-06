"use client";

import React from "react";
import { FaNodeJs, FaGitAlt, FaJava } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
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
} from "react-icons/si";

interface TechItem {
  name: string;
  subtitle: string;
  icon: React.ReactNode;
}

interface TechCategory {
  id: string;
  label: string;
  items: TechItem[];
}

const CATEGORIES: TechCategory[] = [
  {
    id: "frontend",
    label: "Frontend & UI",
    items: [
      {
        name: "Next.js",
        subtitle: "App Router & SSR",
        icon: <SiNextdotjs size={20} className="transition-colors group-hover:text-purple-600" />,
      },
      {
        name: "React",
        subtitle: "UI Library",
        icon: <SiReact size={20} className="transition-colors group-hover:text-[#0ea5e9]" />,
      },
      {
        name: "TypeScript",
        subtitle: "Typed JS",
        icon: <SiTypescript size={19} className="transition-colors group-hover:text-[#3178C6]" />,
      },
      {
        name: "Tailwind CSS",
        subtitle: "Modern Styling",
        icon: <SiTailwindcss size={20} className="transition-colors group-hover:text-[#06B6D4]" />,
      },
      {
        name: "Shadcn UI",
        subtitle: "Accessible UI",
        icon: (
          <svg width="19" height="19" viewBox="0 0 256 256" fill="none" stroke="currentColor" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" className="transition-colors group-hover:text-purple-600">
            <line x1="208" y1="128" x2="128" y2="208" />
            <line x1="192" y1="40" x2="40" y2="192" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "backend",
    label: "Backend & Services",
    items: [
      {
        name: "Node.js",
        subtitle: "Runtime",
        icon: <FaNodeJs size={20} className="transition-colors group-hover:text-[#5FA04E]" />,
      },
      {
        name: "Express",
        subtitle: "REST APIs",
        icon: <SiExpress size={20} className="transition-colors group-hover:text-purple-600" />,
      },
      {
        name: "Clerk",
        subtitle: "Auth & Security",
        icon: <SiClerk size={20} className="transition-colors group-hover:text-[#6C47FF]" />,
      },
      {
        name: "Inngest",
        subtitle: "Workflows & Queues",
        icon: (
          <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" className="transition-colors group-hover:text-[#10B981]">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        ),
      },
      {
        name: "Gemini API",
        subtitle: "Multimodal AI",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="transition-colors group-hover:text-[#1A73E8]">
            <path d="M12 24C12 17.3726 6.62742 12 0 12C6.62742 12 12 6.62742 12 0C12 6.62742 17.3726 12 24 12C17.3726 12 12 17.3726 12 24Z" />
          </svg>
        ),
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
        icon: <SiPostgresql size={20} className="transition-colors group-hover:text-[#4169E1]" />,
      },
      {
        name: "Prisma",
        subtitle: "Type-safe ORM",
        icon: <SiPrisma size={20} className="transition-colors group-hover:text-purple-600" />,
      },
    ],
  },
  {
    id: "languages",
    label: "Languages & Tools",
    items: [
      {
        name: "JavaScript",
        subtitle: "Web Standards",
        icon: <SiJavascript size={19} className="transition-colors group-hover:text-[#F7DF1E]" />,
      },
      {
        name: "Java",
        subtitle: "OOP & Systems",
        icon: <FaJava size={22} className="transition-colors group-hover:text-[#ED8B00]" />,
      },
      {
        name: "C / C++",
        subtitle: "Algorithms & DSA",
        icon: <SiCplusplus size={20} className="transition-colors group-hover:text-[#00599C]" />,
      },
      {
        name: "Git",
        subtitle: "Version Control",
        icon: <FaGitAlt size={22} className="transition-colors group-hover:text-[#F05032]" />,
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
            className="group inline-flex items-center gap-2.5 rounded-xl bg-zinc-900 px-5 py-2.5 font-inter text-xs sm:text-sm font-semibold text-white shadow-sm ring-1 ring-zinc-900/10 transition-all duration-200 hover:bg-zinc-800 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
          >
            <FaFilePdf className="h-4 w-4 text-red-500 transition-transform duration-200 group-hover:scale-110" />
            <span>View Resume</span>
            <span className="text-xs text-zinc-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white">↗</span>
          </a>
        </div>

        {/* Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveFilter("all")}
            className={`rounded-full px-3.5 py-1.5 font-mono text-xs font-medium transition-all duration-200 ${
              activeFilter === "all"
                ? "bg-zinc-900 text-white shadow-2xs"
                : "border border-zinc-200/80 bg-white text-zinc-600 hover:border-zinc-300 hover:text-zinc-900"
            }`}
          >
            All ({totalCount})
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveFilter(cat.id)}
              className={`rounded-full px-3.5 py-1.5 font-mono text-xs font-medium transition-all duration-200 ${
                activeFilter === cat.id
                  ? "bg-zinc-900 text-white shadow-2xs"
                  : "border border-zinc-200/80 bg-white text-zinc-600 hover:border-zinc-300 hover:text-zinc-900"
              }`}
            >
              {cat.label} ({cat.items.length})
            </button>
          ))}
        </div>

        {/* Categorized Tech Stacks */}
        <div className="mt-8 space-y-8">
          {displayedCategories.map((category) => (
            <div key={category.id} className="space-y-3.5">
              {/* Category Eyebrow Divider */}
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  {category.label}
                </span>
                <span className="h-px flex-1 bg-zinc-200/80" />
                <span className="font-mono text-[11px] text-zinc-400">
                  {category.items.length} {category.items.length === 1 ? "tool" : "tools"}
                </span>
              </div>

              {/* Compact Tech Cards Grid */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="group flex items-center gap-3 rounded-2xl border border-zinc-200/80 bg-white p-3 sm:p-3.5 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.03)] transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-sm"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-zinc-200/60 bg-zinc-50 text-zinc-700 transition-all duration-200 group-hover:scale-105 group-hover:bg-zinc-100/80">
                      {item.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="truncate font-sora text-xs sm:text-sm font-semibold text-zinc-800 transition-colors group-hover:text-zinc-950">
                        {item.name}
                      </div>
                      <div className="truncate font-mono text-[11px] text-zinc-400 transition-colors group-hover:text-zinc-500">
                        {item.subtitle}
                      </div>
                    </div>
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
