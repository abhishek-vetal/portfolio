"use client";

import React, { useState, useEffect, useRef } from "react";
import ProjectMedia from "@/components/project-media";
import TechStack from "@/components/tech-stack";

export interface ProjectFeature {
  title: string;
  detail: string;
}

export interface Project {
  name: string;
  fullName?: string;
  tag?: string;
  role?: string;
  description: string;
  features?: ProjectFeature[];
  points: string[];
  stack: string[];
  live: string | null;
  github: string;
  screenshots: { src: string; label: string }[];
}

interface WorkPoint {
  emoji: string;
  text: React.ReactNode;
}

interface WorkSectionProps {
  projects?: Project[];
  workPoints?: WorkPoint[];
}

const DEFAULT_WORK_POINTS: WorkPoint[] = [
  {
    emoji: "🌱",
    text: (
      <>
        Currently building <strong className="font-semibold text-zinc-800">Vaani</strong>, a full-stack AI voice SaaS app with voice cloning and custom TTS.
      </>
    ),
  },
  {
    emoji: "⚙️",
    text: (
      <>
        Sharpening problem-solving skills through Data Structures &amp; Algorithms on <strong className="font-semibold text-zinc-800">LeetCode</strong>.
      </>
    ),
  },
  {
    emoji: "🚀",
    text: (
      <>
        Open for <strong className="font-semibold text-zinc-800">Full-Time Software Developer</strong> roles &amp; technical collaborations.
      </>
    ),
  },
];

export default function WorkSection({ projects = [], workPoints = DEFAULT_WORK_POINTS }: WorkSectionProps) {
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
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-24">
        {/* Section Header */}
        <div
          className={[
            "flex flex-wrap items-baseline gap-x-4 gap-y-2 transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          ].join(" ")}
        >
          <h2 className="font-heading text-3xl font-bold tracking-tight text-[#222222] sm:text-4xl">
            Work
          </h2>
          <span className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-zinc-600">
            what i&apos;m up to
          </span>
        </div>

        {/* 3 Work Highlights Bar — Sleek Modern Banner */}
        <div
          className={[
            "mt-10 grid gap-6 rounded-2xl border border-zinc-200/90 bg-white p-6 shadow-[0_2px_12px_-4px_rgba(15,23,42,0.03)] sm:p-7 lg:grid-cols-3 lg:gap-0 lg:divide-x lg:divide-zinc-200/80 transition-all duration-700 ease-out",
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
              "border-emerald-200/80 bg-emerald-50/70 shadow-2xs",
              "border-indigo-200/80 bg-indigo-50/70 shadow-2xs",
              "border-amber-200/80 bg-amber-50/70 shadow-2xs",
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

        {/* Projects — Elevated Studio Bento Cards */}
        <div className="mt-14 flex flex-col gap-10 sm:gap-14">
          {projects.map((project, pIdx) => (
            <article
              key={project.name}
              style={{ transitionDelay: `${100 + pIdx * 120}ms` }}
              className={[
                "group relative overflow-hidden rounded-3xl border border-zinc-200/90 bg-white p-6 sm:p-8 lg:p-10",
                "shadow-[0_4px_24px_-4px_rgba(15,23,42,0.04)] transition-all duration-500 ease-out",
                "hover:border-zinc-300 hover:shadow-[0_20px_48px_-12px_rgba(15,23,42,0.08)]",
                isVisible
                  ? "opacity-100 translate-y-0 blur-0 scale-100"
                  : "opacity-0 translate-y-10 blur-xs scale-[0.98] pointer-events-none",
              ].join(" ")}
            >
              {/* Subtle ambient light on card corner */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-zinc-100/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 lg:items-center">
                {/* Left Column (5 Cols on LG): Editorial Content */}
                <div className="flex flex-col justify-between lg:col-span-5 z-10">
                  <div>
                    {/* Eyebrow Meta Row */}
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                        {project.tag ?? `0${pIdx + 1} / FEATURED`}
                      </span>
                      <span className="h-3 w-px bg-zinc-300" />
                      <span className="rounded-md border border-zinc-200/70 bg-zinc-50 px-2 py-0.5 font-mono text-[11px] font-medium text-zinc-600">
                        {project.role ?? "Full-Stack Project"}
                      </span>
                      {project.live && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50/80 px-2.5 py-0.5 font-mono text-[10px] font-medium text-emerald-700">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Live
                        </span>
                      )}
                    </div>

                    {/* Project Title */}
                    <h3 className="mt-3.5 font-sora text-2xl font-bold tracking-tight text-[#222222] sm:text-3xl">
                      {project.name}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-zinc-600">
                      {project.description}
                    </p>

                    {/* Key Architectural Highlights */}
                    <div className="mt-5 space-y-2.5">
                      {(project.features ?? project.points.map((p) => ({ title: "", detail: p }))).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                          <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-[9px] font-bold text-white shadow-2xs">
                            ✓
                          </div>
                          <p className="leading-relaxed text-zinc-600">
                            {feat.title && (
                              <strong className="font-semibold text-zinc-800">{feat.title}: </strong>
                            )}
                            {feat.detail}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Chips */}
                    <TechStack stack={project.stack} />
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-5 py-2.5 font-inter text-xs sm:text-sm font-semibold text-white shadow-xs transition-all duration-200 hover:bg-zinc-800 hover:-translate-y-0.5 active:translate-y-0"
                      >
                        <span>Live Demo</span>
                        <span className="font-mono text-xs transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">↗</span>
                      </a>
                    ) : (
                      <span
                        aria-disabled="true"
                        className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl bg-zinc-100 px-5 py-2.5 font-inter text-xs sm:text-sm font-semibold text-zinc-400 border border-zinc-200/60"
                      >
                        <span>Live Demo</span>
                        <span className="rounded-full bg-zinc-200 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-zinc-500">
                          soon
                        </span>
                      </span>
                    )}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-zinc-200/90 bg-white px-5 py-2.5 font-inter text-xs sm:text-sm font-semibold text-zinc-800 shadow-2xs transition-all duration-200 hover:border-zinc-300 hover:bg-zinc-50 hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>

                {/* Right Column (7 Cols on LG): Interactive Browser Mockup */}
                <div className="relative aspect-[16/11] sm:aspect-[16/10] sm:min-h-[20rem] max-h-[30rem] w-full overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-[0_12px_36px_-10px_rgba(15,23,42,0.08)] lg:col-span-7 z-10 transition-transform duration-300 group-hover:scale-[1.01]">
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
