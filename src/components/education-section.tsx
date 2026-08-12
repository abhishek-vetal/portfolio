"use client";

import { useEffect, useRef, useState } from "react";
import { FaGraduationCap, FaAward, FaCode, FaCheckCircle, FaLaptopCode } from "react-icons/fa";

export function EducationSection() {
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
    <section ref={sectionRef} className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6">
      {/* Section Header */}
      <div
        className={[
          "flex flex-col gap-2 transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        ].join(" ")}
      >
        <div className="flex items-center justify-between">
          <h2 className="font-sora text-3xl font-bold tracking-tight text-[#222222] sm:text-4xl">
            Education & Certifications
          </h2>
          <span className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-zinc-400">
            [03 / BACKGROUND]
          </span>
        </div>
        <p className="max-w-xl text-base text-zinc-600">
          Academic foundation, certified training programs, and algorithm problem solving track record.
        </p>
      </div>

      {/* Grid: Degree & Training */}
      <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Degree Card */}
        <div
          style={{ transitionDelay: "150ms" }}
          className={[
            "group relative flex flex-col justify-between rounded-2xl border border-zinc-200/80 bg-white p-7 shadow-xs transition-all duration-300 hover:border-zinc-300 hover:shadow-md sm:p-8",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          ].join(" ")}
        >
          <div>
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-100 text-zinc-900 border border-zinc-200/60">
                <FaGraduationCap className="h-5 w-5" />
              </div>
              <span className="font-mono text-xs font-medium text-zinc-500 bg-zinc-100/80 px-3 py-1 rounded-full border border-zinc-200/60">
                2022 — 2026
              </span>
            </div>

            <h3 className="mt-6 font-sora text-xl font-bold tracking-tight text-[#18181b] sm:text-2xl">
              Bachelor of Engineering in Electronics & Telecommunication
            </h3>
            <p className="mt-2 text-sm font-semibold text-zinc-700">
              Dr. D. Y. Patil Institute of Technology, Pimpri, Pune
            </p>
            <p className="mt-4 text-sm text-zinc-600 leading-relaxed">
              Comprehensive coursework covering Data Structures & Algorithms, Object-Oriented Programming, Computer Networks, Database Management Systems, and Software Engineering principles.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500 font-mono">
            <span>CGPA: 8.4 / 10.0</span>
            <span className="text-emerald-700 font-semibold flex items-center gap-1">
              <FaCheckCircle className="h-3 w-3" /> Graduating 2026
            </span>
          </div>
        </div>

        {/* Certifications & Bootcamps Card */}
        <div
          style={{ transitionDelay: "300ms" }}
          className={[
            "group relative flex flex-col justify-between rounded-2xl border border-zinc-200/80 bg-white p-7 shadow-xs transition-all duration-300 hover:border-zinc-300 hover:shadow-md sm:p-8",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          ].join(" ")}
        >
          <div>
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-100 text-zinc-900 border border-zinc-200/60">
                <FaAward className="h-5 w-5" />
              </div>
              <span className="font-mono text-xs font-medium text-zinc-500 bg-zinc-100/80 px-3 py-1 rounded-full border border-zinc-200/60">
                Certified 2026
              </span>
            </div>

            <h3 className="mt-6 font-sora text-xl font-bold tracking-tight text-[#18181b] sm:text-2xl">
              Full-Stack Developer Career Path
            </h3>
            <p className="mt-2 text-sm font-semibold text-zinc-700">
              Scrimba Interactive Career Program
            </p>
            <p className="mt-4 text-sm text-zinc-600 leading-relaxed">
              Immersive, hands-on certification covering modern Frontend & Backend development, React.js architecture, Next.js App Router, Async JavaScript, and RESTful API integrations.
            </p>

            <div className="mt-8 pt-4 w-full flex flex-col items-center gap-3">
              <a
                href="/certificates/scrimba-fullstack.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-5 py-2.5 font-inter text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:bg-zinc-800 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Certificate</span>
                <span className="text-xs text-zinc-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
              </a>
              <span className="font-mono text-xs text-zinc-500">
                Issued by <strong className="font-bold text-[#18181b] text-xs">Scrimba</strong> · Feb 2026
              </span>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500 font-mono">
            <span>Verified Credential</span>
            <span className="text-emerald-700 font-semibold flex items-center gap-1">
              <FaCheckCircle className="h-3 w-3" /> Completed
            </span>
          </div>
        </div>

        {/* LeetCode & Problem Solving Banner Card */}
        <div
          style={{ transitionDelay: "450ms" }}
          className={[
            "md:col-span-2 group relative flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-2xl border border-zinc-200/80 bg-gradient-to-r from-zinc-50 via-white to-zinc-50 p-7 shadow-xs transition-all duration-300 hover:border-zinc-300 hover:shadow-md sm:p-8 gap-6",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          ].join(" ")}
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-900 text-white shadow-sm">
              <FaLaptopCode className="h-6 w-6 text-yellow-400" />
            </div>
            <div>
              <h3 className="font-sora text-lg font-bold tracking-tight text-[#18181b] sm:text-xl">
                Competitive Programming & Data Structures
              </h3>
              <p className="mt-1 text-sm text-zinc-600 max-w-2xl">
                Active problem solver across LeetCode & HackerRank. Solved 150+ problems in Algorithms, Dynamic Programming, Trees, and Graph Theory.
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-4 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 pt-4 sm:pt-0 border-zinc-200">
            <a
              href="https://leetcode.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-5 py-2.5 font-inter text-xs font-semibold text-zinc-800 shadow-2xs transition-all hover:border-zinc-400 hover:bg-zinc-50 hover:-translate-y-0.5"
            >
              <FaCode className="h-3.5 w-3.5 text-yellow-600" />
              <span>LeetCode Profile</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
