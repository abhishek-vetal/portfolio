"use client";

import Image from "next/image";

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

        {/* Education Cards */}
        <div className="mt-8 flex flex-col gap-4">
          {/* Card 1: Self-Directed Full-Stack Development */}
          <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 sm:p-7 shadow-[0_2px_12px_-4px_rgba(15,23,42,0.03)] transition-all duration-300 ease-out hover:border-zinc-300">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
              <h3 className="font-sora text-base font-bold text-zinc-900 sm:text-lg">
                Self-Directed Full-Stack Development
              </h3>
              <span className="shrink-0 font-mono text-xs font-light text-zinc-400 tracking-wide">
                Mar 2025 – Present
              </span>
            </div>
            <p className="mt-2.5 text-sm text-zinc-700 sm:text-base">
              Built and deployed two full-stack applications, completed Scrimba Full-Stack Path and CS50 SQL
            </p>
          </div>

          {/* Card 2: GATE Exam Preparation */}
          <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 sm:p-7 shadow-[0_2px_12px_-4px_rgba(15,23,42,0.03)] transition-all duration-300 ease-out hover:border-zinc-300">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
              <h3 className="font-sora text-base font-bold text-zinc-900 sm:text-lg">
                GATE Exam Preparation
              </h3>
              <span className="shrink-0 font-mono text-xs font-light text-zinc-400 tracking-wide">
                Jun 2023 – Feb 2025
              </span>
            </div>
            <p className="mt-2.5 text-sm text-zinc-700 sm:text-base">
              Core CS: Operating Systems, Computer Networks, DBMS, Data Structures, Algorithms
            </p>
          </div>

          {/* Card 3: College */}
          <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 sm:p-7 shadow-[0_2px_12px_-4px_rgba(15,23,42,0.03)] transition-all duration-300 ease-out hover:border-zinc-300">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
              <div>
                <h3 className="font-sora text-base font-bold text-zinc-900 sm:text-lg">
                  Pillai HOC College of Engineering and Technology
                </h3>
                <p className="mt-0.5 text-xs font-mono font-light text-zinc-400">
                  Affiliated with University of Mumbai
                </p>
              </div>
              <span className="shrink-0 font-mono text-xs font-light text-zinc-400 tracking-wide">
                2019 – 2023
              </span>
            </div>
            <p className="mt-3 text-sm text-zinc-700 sm:text-base">
              B.E in Computer Engineering{" "}
              <span className="not-italic text-zinc-400">|</span>{" "}
              <strong className="font-semibold not-italic text-zinc-900">
                CGPA: 8.75/10.0
              </strong>
            </p>
          </div>
        </div>

        {/* Section 2 Header: Achievements */}
        <div className="mt-16 flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <h2 className="font-sora text-3xl font-bold tracking-tight text-[#222222] sm:text-4xl">
            Achievements
          </h2>
          <span className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-zinc-600">
            certs & milestones
          </span>
        </div>

        {/* 2 Side-by-Side Portrait Cards */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Card 1: Scrimba Fullstack Certification */}
          <div
            className="group relative flex flex-col items-center justify-between text-center rounded-3xl border border-zinc-200/80 bg-white p-8 sm:p-10 shadow-[0_4px_24px_-6px_rgba(15,23,42,0.05)] transition-all duration-300 transform-gpu hover:-translate-y-1 hover:border-zinc-300 hover:shadow-[0_16px_40px_-10px_rgba(15,23,42,0.08)]"
          >
            <div className="flex flex-col items-center">
              {/* Scrimba Official Logo Badge */}
              <div
                aria-label="Scrimba logo"
                className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-[1.65rem] border border-violet-300/30 bg-gradient-to-br from-[#241b3f] via-[#4c3f91] to-[#a855f7] shadow-[0_14px_30px_-12px_rgba(124,58,237,0.75)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_18px_36px_-10px_rgba(168,85,247,0.6)]"
              >
                <span aria-hidden className="absolute inset-1 rounded-[1.35rem] border border-white/20 bg-[#171329]/35" />
                <svg width="48" height="48" viewBox="0 0 36 36" fill="none" aria-hidden className="relative drop-shadow-[0_3px_4px_rgba(0,0,0,0.3)]">
                  <rect x="13" y="9" width="17" height="5.5" rx="2.75" fill="white" />
                  <rect x="13" y="16.5" width="11" height="5.5" rx="2.75" fill="white" />
                  <rect x="8.5" y="24" width="15.5" height="5.5" rx="2.75" fill="white" />
                  <circle cx="4" cy="26.75" r="2.75" fill="#f0abfc" />
                </svg>
              </div>

              <h3 className="mt-6 font-sora text-xl font-bold tracking-tight text-[#18181b] sm:text-2xl transition-colors duration-200 group-hover:text-zinc-950">
                The Fullstack Developer Path
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-zinc-600 max-w-sm">
                Completed the comprehensive Scrimba Fullstack Developer course, building several small full-stack applications along the way to practice modern frontend and backend architectures.
              </p>
            </div>

            <div className="mt-8 pt-4 w-full flex flex-col items-center gap-3">
              <a
                href="https://scrimba.com/u43a9e20:certs;cert23wfboWopT5WtF2QfcGrUrLhWC6be21rGzE1ok8yyZvMLGEL"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-5 py-2.5 font-mono text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:bg-zinc-800 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Certificate</span>
                <span className="text-xs transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
              </a>
              <span className="font-mono text-xs font-light text-zinc-400">
                Issued by <strong className="font-medium text-zinc-700 text-xs">Scrimba</strong> · Feb 2026
              </span>
            </div>
          </div>

          {/* Card 2: CS50 SQL Certification */}
          <div
            className="group relative flex flex-col items-center justify-between text-center rounded-3xl border border-zinc-200/80 bg-white p-8 sm:p-10 shadow-[0_4px_24px_-6px_rgba(15,23,42,0.05)] transition-all duration-300 transform-gpu hover:-translate-y-1 hover:border-zinc-300 hover:shadow-[0_16px_40px_-10px_rgba(15,23,42,0.08)]"
          >
            <div className="flex flex-col items-center">
              {/* CS50 course logo badge */}
              <div
                aria-label="Harvard University crest, used for CS50"
                className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-[1.65rem] border border-red-300/30 bg-gradient-to-br from-[#3b0a12] via-[#8f1722] to-[#d33b4b] p-2.5 shadow-[0_14px_30px_-12px_rgba(185,28,28,0.8)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_18px_36px_-10px_rgba(220,38,38,0.62)]"
              >
                <span aria-hidden className="absolute inset-1 rounded-[1.35rem] border border-white/20 bg-[#26070d]/25" />
                <span className="relative flex h-full w-full items-center justify-center rounded-2xl bg-[#f7f3ea] p-1 shadow-inner">
                  <Image
                    src="/harvard-logo.png"
                    alt="Harvard University crest"
                    width={48}
                    height={48}
                    className="h-12 w-12 object-contain drop-shadow-[0_2px_2px_rgba(0,0,0,0.18)]"
                  />
                </span>
              </div>

              <h3 className="mt-6 font-sora text-xl font-bold tracking-tight text-[#18181b] sm:text-2xl transition-colors duration-200 group-hover:text-zinc-950">
                CS50&apos;s Introduction to Databases with SQL
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-zinc-600 max-w-sm">
                Completed Harvard University&apos;s comprehensive course covering relational database design, normalization, complex SQL queries, transactions, views, and optimization.
              </p>
            </div>

            <div className="mt-8 pt-4 w-full flex flex-col items-center gap-3">
              <a
                href="https://certificates.cs50.io/86c6cf06-b2e7-41d7-bb56-893870f918d7.pdf?size=letter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-5 py-2.5 font-mono text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:bg-zinc-800 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Certificate</span>
                <span className="text-xs transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
              </a>
              <span className="font-mono text-xs font-light text-zinc-400">
                Issued by <strong className="font-medium text-zinc-700 text-xs">Harvard University</strong> · 2026
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
