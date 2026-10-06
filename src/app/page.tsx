"use client";

import WorkSection from "@/components/work-section";
import TechGrid from "@/components/tech-grid";
import EducationSection from "@/components/education-section";
import ContactSection from "@/components/contact-section";
import { Footer } from "@/components/footer";

const FEATURED_PROJECTS = [
  {
    name: "VAANI AI Voice Cloning Platform",
    description:
      "Full-stack AI voice cloning and generation platform powered by self-hosted Chatterbox TTS, Cloudflare R2 storage, and usage-based Polar billing.",
    points: [
      "Built a full-stack AI voice platform to browse built-in voices, clone custom audio, and synthesize speech from text using a self-hosted Chatterbox TTS model.",
      "Engineered audio storage in Cloudflare R2 with PostgreSQL/Prisma metadata, plus configurable TTS controls (temperature, top-p, top-k, repetition penalty).",
      "Implemented organization-based auth & data isolation via Clerk and tRPC, integrated with Polar subscription billing and usage-based character metering.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "tRPC",
      "Cloudflare R2",
      "Polar",
      "Chatterbox TTS",
    ],
    live: "https://vaani-ai-voice.vercel.app",
    github: "https://github.com/abhishek-vetal/vaani",
    screenshots: [
      { src: "/vaani-1.png", label: "Dashboard" },
      { src: "/vaani-2.png", label: "Voice Library" },
      { src: "/vaani-3.png", label: "TTS Studio" },
    ],
  },
  {
    name: "SAVE AI Finance Platform",
    description:
      "Full-stack AI personal finance platform featuring Plaid bank syncing, Gemini AI receipt scanning, and automated monthly spending reports.",
    points: [
      "Built a full-stack personal finance platform with manual and Plaid automated bank account syncing, budget management, and real-time transaction tracking.",
      "Engineered AI-powered receipt scanning & monthly financial insights via Gemini API, with 80% threshold budget alerts powered by Inngest and Resend.",
      "Created interactive spending analytics with Recharts across flexible timeframes (7D, 1M, 3M, 6M, All-Time) and custom database-backed rate limiting.",
    ],
    stack: [
      "Next.js",
      "React",
      "Prisma",
      "PostgreSQL",
      "Plaid",
      "Gemini API",
      "Inngest",
    ],
    live: "https://save-finance-platform.vercel.app",
    github: "https://github.com/abhishek-vetal/save-finance-platform",
    screenshots: [
      { src: "/save-1.png", label: "Landing Page" },
      { src: "/save-2.png", label: "Dashboard" },
      { src: "/save-3.png", label: "Personal Overview" },
    ],
  },
];

const WORK_POINTS = [
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

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      {/* Hero */}
      <section
        id="home"
        className="relative mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-7xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 sm:py-24"
      >
        {/* Subtle ambient radial background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden"
        >
          <div className="h-[420px] w-[640px] rounded-full bg-gradient-to-tr from-zinc-200/40 via-zinc-100/50 to-transparent blur-3xl opacity-60" />
        </div>

        <div className="relative flex flex-col items-center max-w-3xl">
          {/* Display headline — Sora font with refined, balanced proportions */}
          <h1 className="hero-animate-1 font-sora text-4xl font-extrabold tracking-[-0.035em] text-zinc-900 sm:text-6xl md:text-7xl lg:text-[5rem] text-balance leading-[1.08]">
            Hey,{"\u00A0"}I&apos;m{" "}
            <span className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-600 bg-clip-text text-transparent">
              Abhishek
            </span>
          </h1>

          {/* Role title */}
          <p className="hero-animate-2 mt-4 font-sora text-xl font-semibold tracking-tight text-zinc-800 sm:mt-5 sm:text-2xl md:text-3xl">
            Software Developer
          </p>

          {/* Tagline bio */}
          <p className="hero-animate-3 mt-4 max-w-xl text-balance text-base font-normal leading-relaxed text-zinc-600 sm:text-lg">
            I build full-stack products — from first commit to production. Looking to do the same with a great team.
          </p>

          {/* CTA Buttons — unified pill design matching navbar */}
          <div className="hero-animate-4 mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
            <a
              href="/work"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
                window.history.pushState(null, "", "/work");
              }}
              className="group inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 font-inter text-sm font-semibold text-white shadow-xs transition-all duration-200 hover:bg-zinc-800 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
            >
              <span>Explore Work</span>
              <span className="text-xs opacity-70 transition-transform duration-200 group-hover:translate-y-0.5">↓</span>
            </a>

            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                window.history.pushState(null, "", "/contact");
              }}
              className="group inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3 font-inter text-sm font-semibold text-zinc-900 shadow-2xs transition-all duration-200 hover:border-zinc-300 hover:bg-zinc-50 hover:-translate-y-0.5 hover:shadow-xs active:translate-y-0"
            >
              <span>Get in Touch</span>
              <span className="text-xs text-zinc-400 transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <WorkSection projects={FEATURED_PROJECTS} workPoints={WORK_POINTS} />

      {/* Tech Grid Section */}
      <TechGrid />

      {/* Education Section */}
      <EducationSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
