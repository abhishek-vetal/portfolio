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
  category: string;
  icon: React.ReactNode;
}

const TECH_ITEMS: TechItem[] = [
  // Row 1 — Core frontend stack
  {
    name: "Next.js",
    category: "Framework",
    icon: <SiNextdotjs size={38} />,
  },
  {
    name: "React",
    category: "UI Library",
    icon: <SiReact size={38} />,
  },
  {
    name: "TypeScript",
    category: "Language",
    icon: <SiTypescript size={36} />,
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    icon: <SiTailwindcss size={38} />,
  },

  // Row 2 — UI + backend
  {
    name: "Shadcn UI",
    category: "Components",
    icon: (
      <svg width="34" height="34" viewBox="0 0 256 256" fill="none" stroke="currentColor" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round">
        <line x1="208" y1="128" x2="128" y2="208" />
        <line x1="192" y1="40" x2="40" y2="192" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    category: "Runtime",
    icon: <FaNodeJs size={40} />,
  },
  {
    name: "Express",
    category: "Backend",
    icon: <SiExpress size={38} />,
  },
  {
    name: "PostgreSQL",
    category: "Database",
    icon: <SiPostgresql size={38} />,
  },

  // Row 3 — Data, auth, AI
  {
    name: "Prisma",
    category: "ORM",
    icon: <SiPrisma size={38} />,
  },
  {
    name: "Clerk",
    category: "Auth",
    icon: <SiClerk size={38} />,
  },
  {
    name: "Gemini API",
    category: "AI & ML",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 24C12 17.3726 6.62742 12 0 12C6.62742 12 12 6.62742 12 0C12 6.62742 17.3726 12 24 12C17.3726 12 12 17.3726 12 24Z" />
      </svg>
    ),
  },
  {
    name: "Inngest",
    category: "Workflows",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },

  // Row 4 — Languages + tooling
  {
    name: "JavaScript",
    category: "Language",
    icon: <SiJavascript size={36} />,
  },
  {
    name: "Java",
    category: "Language",
    icon: <FaJava size={40} />,
  },
  {
    name: "C / C++",
    category: "Language",
    icon: <SiCplusplus size={38} />,
  },
  {
    name: "Git",
    category: "Tooling",
    icon: <FaGitAlt size={40} />,
  },
];

export default function TechGrid() {
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

  return (
    <section id="resume" ref={sectionRef} className="w-full">
      <div className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6">
        {/* Consistent Eyebrow Header + Resume Button */}
        <div
          className={[
            "flex flex-wrap items-center justify-between gap-x-4 gap-y-3 transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          ].join(" ")}
        >
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#222222] sm:text-4xl">
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
            className="group inline-flex items-center gap-2.5 rounded-xl bg-zinc-900 px-5 py-2.5 font-inter text-xs sm:text-sm font-bold text-white shadow-sm ring-1 ring-zinc-900/10 transition-all duration-200 hover:bg-zinc-800 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
          >
            <FaFilePdf className="h-4 w-4 text-red-500 transition-transform duration-200 group-hover:scale-110" />
            <span>View Resume</span>
            <span className="text-xs text-zinc-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white">↗</span>
          </a>
        </div>

        {/* Outer Container with invisible background */}
        <div className="relative mt-8 pt-1 pb-1 bg-transparent">
          <div className="relative z-10">
            {/* 4-column Responsive Grid */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-4 sm:gap-4 lg:gap-5">
              {TECH_ITEMS.map((item, index) => (
                <div
                  key={item.name}
                  style={{ transitionDelay: `${index * 35}ms` }}
                  className={[
                    "group relative flex min-h-[120px] flex-col items-center justify-center gap-3 rounded-2xl border bg-white px-5 py-6 text-center transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu hover:-translate-y-1 hover:border-zinc-300 hover:bg-white hover:shadow-[0_12px_24px_-8px_rgba(15,23,42,0.08)] sm:px-6 sm:py-7 cursor-pointer overflow-hidden",
                    isVisible
                      ? "opacity-100 translate-y-0 scale-100 blur-0 border-zinc-200/80 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.04)]"
                      : "opacity-20 translate-y-6 scale-95 blur-xs border-transparent shadow-none pointer-events-none",
                  ].join(" ")}
                >
                  {/* Subtle Bottom Accent Line on Hover */}
                  <div className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-zinc-800 transition-all duration-300 ease-out group-hover:w-12 opacity-0 group-hover:opacity-100" />

                  <div className="flex h-12 w-12 items-center justify-center text-zinc-700 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:text-zinc-950">
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-semibold tracking-tight text-zinc-800 transition-colors duration-200 group-hover:text-zinc-950">
                    {item.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
