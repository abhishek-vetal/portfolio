"use client";

import React, { useState, useEffect, useRef } from "react";
import ProjectMedia from "@/components/project-media";
import TechStack from "@/components/tech-stack";

interface Project {
  name: string;
  description: string;
  points: string[];
  stack: string[];
  live: string | null;
  github: string;
  screenshots: { src: string; label: string }[];
  tag?: string;
}

interface WorkPoint {
  emoji: string;
  text: React.ReactNode;
}

interface WorkSectionProps {
  projects?: Project[];
  workPoints?: WorkPoint[];
}

export default function WorkSection({ projects = [], workPoints = [] }: WorkSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
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
    <section id="work" ref={sectionRef} className="w-full">
      <div className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6">
        {/* Section Header */}
        <div
          className={[
            "flex flex-wrap items-baseline gap-x-4 gap-y-2 transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          ].join(" ")}
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-[#222222] sm:text-4xl">
            Work
          </h2>
          <span className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-zinc-600">
            what i&apos;m up to
          </span>
        </div>

        {/* 3 Work Highlights Bar — Soft Integrated Glass Banner */}
        <div
          className={[
            "mt-10 grid gap-6 rounded-2xl border border-zinc-200/90 bg-white/80 p-6 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(15,23,42,0.03)] sm:p-8 lg:grid-cols-3 lg:gap-0 lg:divide-x lg:divide-zinc-200/80 transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none",
          ].join(" ")}
        >
          {workPoints.map(({ text }, idx) => {
            const icons = [
              // Audio Soundwave — Vaani AI Voice SaaS
              <svg key="0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600">
                <path d="M2 10v4M6 6v12M10 3v18M14 8v8M18 5v14M22 10v4" />
              </svg>,
              // CPU Logic Chip — LeetCode & DSA Problem Solving
              <svg key="1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600">
                <rect width="16" height="16" x="4" y="4" rx="2" />
                <path d="M9 9h6v6H9z" />
                <path d="M15 2v2M9 2v2M15 20v2M9 20v2M2 15h2M2 9h2M20 15h2M20 9h2" />
              </svg>,
              // User Check / Developer Profile — Software Developer Roles
              <svg key="2" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <polyline points="16 11 18 13 22 9" />
              </svg>,
            ];

            const badgeStyles = [
              "border-emerald-200/80 bg-emerald-50/60 shadow-2xs",
              "border-indigo-200/80 bg-indigo-50/60 shadow-2xs",
              "border-amber-200/80 bg-amber-50/60 shadow-2xs",
            ][idx % 3];

            return (
              <div
                key={idx}
                className="flex items-start gap-4 lg:px-8 lg:first:pl-0 lg:last:pr-0"
              >
                <span
                  aria-hidden
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${badgeStyles}`}
                >
                  {icons[idx]}
                </span>
                <p className="text-sm leading-6 text-zinc-700 sm:text-[15px] sm:leading-7">
                  {text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Projects — Asymmetrical Studio Bento Cards */}
        <div className="mt-14 flex flex-col gap-12 sm:gap-16">
          {projects.map((project, pIdx) => (
            <article
              key={project.name}
              style={{ transitionDelay: `${100 + pIdx * 100}ms` }}
              className={[
                "group overflow-hidden rounded-3xl border border-zinc-200/80 bg-[#f9f9f8] p-6 sm:p-10 lg:p-12 shadow-[0_4px_28px_-6px_rgba(15,23,42,0.04)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu hover:border-zinc-300 hover:shadow-[0_20px_48px_-12px_rgba(15,23,42,0.08)]",
                isVisible
                  ? "opacity-100 translate-y-0 blur-0 scale-100"
                  : "opacity-0 translate-y-10 blur-xs scale-[0.98] pointer-events-none",
              ].join(" ")}
            >
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 lg:items-center">
                {/* Left Column (5 Cols): Editorial Content */}
                <div className="flex flex-col justify-between lg:col-span-5">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-3xl font-bold tracking-tight text-[#222222] sm:text-4xl">
                        {project.name}
                      </h3>
                      {project.tag && (
                        <span className="rounded-full bg-white px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-zinc-600 border border-zinc-200/80 shadow-2xs">
                          {project.tag}
                        </span>
                      )}
                    </div>

                    <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
                      {project.description}
                    </p>

                    <ul className="mt-6 flex flex-col gap-2.5">
                      {project.points.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            aria-hidden
                            className="mt-1 shrink-0 text-zinc-800"
                          >
                            <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                            <path
                              d="M5 8.2L7 10.2L11 6"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="text-sm leading-relaxed text-zinc-600">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <TechStack stack={project.stack} />
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-[#222222] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-zinc-800 hover:-translate-y-0.5 active:translate-y-0"
                      >
                        <span>Live Demo</span>
                        <span className="font-mono text-xs">↗</span>
                      </a>
                    ) : (
                      <span
                        aria-disabled="true"
                        className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl bg-zinc-200/70 px-6 py-3 text-sm font-semibold text-zinc-400"
                      >
                        <span>Live Demo</span>
                        <span className="rounded-full bg-white px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-zinc-500">
                          soon
                        </span>
                      </span>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-800 shadow-sm transition-all duration-200 hover:border-zinc-300 hover:bg-zinc-50 hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>

                {/* Right Column (7 Cols): Browser Window */}
                <div className="relative aspect-[16/9.5] min-h-[20rem] max-h-[30rem] w-full overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-[0_16px_40px_-12px_rgba(15,23,42,0.12)] lg:col-span-7">
                  <ProjectMedia
                    name={project.name}
                    url={project.live ?? project.github ?? ""}
                    shots={project.screenshots}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
