"use client";

import React from "react";
import { SiLeetcode } from "react-icons/si";

export default function EducationSection() {
  return (
    <section id="education" className="w-full">
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6">
        {/* Section 1 Header: Education */}
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-[#222222] sm:text-4xl">
            Education
          </h2>
          <span className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-zinc-600">
            where i learned
          </span>
        </div>

        {/* Full-Width Education Card */}
        <div className="mt-8 rounded-2xl border border-zinc-200/80 bg-transparent p-6 transition-all duration-300 ease-out transform-gpu hover:-translate-y-0.5 hover:border-zinc-400/80 sm:p-7">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h3 className="font-heading font-semibold text-zinc-900 sm:text-lg">
              Pillai HOC College of Engineering and Technology
            </h3>
            <span className="shrink-0 font-mono text-sm text-zinc-500">
              2019 – 2023
            </span>
          </div>
          <p className="mt-1 text-sm italic text-zinc-600 sm:text-base">
            B.E in Computer Engineering{" "}
            <span className="not-italic text-zinc-400">|</span>{" "}
            <strong className="font-semibold not-italic text-zinc-800">
              CGPA: 8.75/10.0
            </strong>
          </p>
        </div>

        {/* Section 2 Header: Achievements */}
        <div className="mt-16 flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-[#222222] sm:text-4xl">
            Achievements
          </h2>
          <span className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-zinc-600">
            certs & milestones
          </span>
        </div>

        {/* 2 Side-by-Side Cards (Certifications & Achievements) */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Card 1: Certification */}
          <div className="rounded-2xl border border-zinc-200/80 bg-transparent p-6 transition-all duration-300 ease-out transform-gpu hover:-translate-y-0.5 hover:border-zinc-400/80 sm:p-7">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-heading font-semibold text-zinc-900 sm:text-lg">
                The Fullstack Developer Path
              </h3>
              <span className="shrink-0 font-mono text-sm text-zinc-500">
                Feb 2026
              </span>
            </div>
            <p className="mt-1 text-sm italic text-zinc-600 sm:text-base">
              Scrimba (108+ hours)
            </p>
          </div>

          {/* Card 2: Achievement */}
          <div className="rounded-2xl border border-zinc-200/80 bg-transparent p-6 transition-all duration-300 ease-out transform-gpu hover:-translate-y-0.5 hover:border-zinc-400/80 sm:p-7">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-heading font-semibold text-zinc-900 sm:text-lg">
                LeetCode Problem Solving
              </h3>
              <span className="shrink-0 font-mono text-sm text-zinc-500">
                100+ Solved
              </span>
            </div>
            <p className="mt-1 text-sm italic text-zinc-600 sm:text-base">
              Data Structures & Algorithms
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
