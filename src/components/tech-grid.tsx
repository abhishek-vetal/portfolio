"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaPython,
  FaFilePdf,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiExpress,
  SiFastapi,
  SiRedis,
  SiGraphql,
  SiVercel,
  SiFigma,
} from "react-icons/si";

interface TechItem {
  name: string;
  category: "Frontend" | "Backend" | "Database & Cloud" | "Tools & Infra";
  icon: React.ReactNode;
}

const TECH_ITEMS: TechItem[] = [
  {
    name: "React.js",
    category: "Frontend",
    icon: <FaReact className="h-6 w-6 text-[#61DAFB] transition-transform duration-300 group-hover:scale-110" />,
  },
  {
    name: "Next.js",
    category: "Frontend",
    icon: <SiNextdotjs className="h-6 w-6 text-zinc-900 transition-transform duration-300 group-hover:scale-110" />,
  },
  {
    name: "TypeScript",
    category: "Frontend",
    icon: <SiTypescript className="h-6 w-6 text-[#3178C6] transition-transform duration-300 group-hover:scale-110" />,
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: <SiTailwindcss className="h-6 w-6 text-[#06B6D4] transition-transform duration-300 group-hover:scale-110" />,
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: <FaNodeJs className="h-6 w-6 text-[#5FA04E] transition-transform duration-300 group-hover:scale-110" />,
  },
  {
    name: "Express.js",
    category: "Backend",
    icon: <SiExpress className="h-6 w-6 text-zinc-800 transition-transform duration-300 group-hover:scale-110" />,
  },
  {
    name: "Python",
    category: "Backend",
    icon: <FaPython className="h-6 w-6 text-[#3776AB] transition-transform duration-300 group-hover:scale-110" />,
  },
  {
    name: "FastAPI",
    category: "Backend",
    icon: <SiFastapi className="h-6 w-6 text-[#009688] transition-transform duration-300 group-hover:scale-110" />,
  },
  {
    name: "PostgreSQL",
    category: "Database & Cloud",
    icon: <SiPostgresql className="h-6 w-6 text-[#4169E1] transition-transform duration-300 group-hover:scale-110" />,
  },
  {
    name: "MongoDB",
    category: "Database & Cloud",
    icon: <SiMongodb className="h-6 w-6 text-[#47A248] transition-transform duration-300 group-hover:scale-110" />,
  },
  {
    name: "Prisma ORM",
    category: "Database & Cloud",
    icon: <SiPrisma className="h-6 w-6 text-[#2D3748] transition-transform duration-300 group-hover:scale-110" />,
  },
  {
    name: "Redis",
    category: "Database & Cloud",
    icon: <SiRedis className="h-6 w-6 text-[#DC382D] transition-transform duration-300 group-hover:scale-110" />,
  },
  {
    name: "GraphQL",
    category: "Tools & Infra",
    icon: <SiGraphql className="h-6 w-6 text-[#E10098] transition-transform duration-300 group-hover:scale-110" />,
  },
  {
    name: "Docker",
    category: "Tools & Infra",
    icon: <FaDocker className="h-6 w-6 text-[#2496ED] transition-transform duration-300 group-hover:scale-110" />,
  },
  {
    name: "Git & GitHub",
    category: "Tools & Infra",
    icon: <FaGitAlt className="h-6 w-6 text-[#F05032] transition-transform duration-300 group-hover:scale-110" />,
  },
  {
    name: "Vercel",
    category: "Tools & Infra",
    icon: <SiVercel className="h-6 w-6 text-zinc-900 transition-transform duration-300 group-hover:scale-110" />,
  },
];

export function TechGrid() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="resume"
      ref={sectionRef}
      className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6"
    >
      {/* Section Header */}
      <div
        className={[
          "flex flex-col gap-2 transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        ].join(" ")}
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="font-sora text-3xl font-bold tracking-tight text-[#222222] sm:text-4xl">
              Technical Stack & Skills
            </h2>
            <p className="mt-1 max-w-2xl text-base text-zinc-600">
              Languages, frameworks, databases, and infrastructure tools I use to build scalable products.
            </p>
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
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-50 p-2 border border-zinc-100 transition-colors group-hover:bg-zinc-100/80">
                    {item.icon}
                  </div>
                  <div className="relative z-10 flex flex-col items-center gap-0.5">
                    <span className="font-sora text-sm font-semibold text-zinc-900 transition-colors group-hover:text-black">
                      {item.name}
                    </span>
                    <span className="font-mono text-[10px] font-medium text-zinc-600">
                      {item.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
