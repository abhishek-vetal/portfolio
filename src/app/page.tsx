"use client";

import WorkSection from "@/components/work-section";
import TechGrid from "@/components/tech-grid";
import EducationSection from "@/components/education-section";
import ContactSection from "@/components/contact-section";
import DevIdCard from "@/components/dev-id-card";
import { Footer } from "@/components/footer";
import ScrollReveal from "@/components/scroll-reveal";

const FEATURED_PROJECTS = [
  {
    tag: "01 / FEATURED",
    role: "AI Voice SaaS",
    name: "Vaani AI Voice Platform",
    description:
      "Full-stack AI voice cloning and generation platform powered by self-hosted Chatterbox TTS, Cloudflare R2 storage, and usage-based Polar billing.",
    features: [
      {
        title: "Voice Cloning & Custom TTS",
        detail: "Self-hosted Chatterbox neural model with configurable temperature & top-p controls.",
      },
      {
        title: "Cloud Storage & Audio Pipeline",
        detail: "Cloudflare R2 bucket integration with PostgreSQL/Prisma audio metadata.",
      },
      {
        title: "Auth & Usage-Based Billing",
        detail: "Clerk organization-based isolation, tRPC endpoints, and Polar subscription metering.",
      },
    ],
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
    tag: "02 / FEATURED",
    role: "FinTech & AI",
    name: "Save AI Finance Platform",
    description:
      "Full-stack AI personal finance platform featuring Plaid bank syncing, Gemini AI receipt scanning, and automated monthly spending reports.",
    features: [
      {
        title: "Automated Banking Sync",
        detail: "Plaid API integration for real-time transaction ingestion and balance tracking.",
      },
      {
        title: "Gemini AI Receipt OCR",
        detail: "Multimodal receipt parsing that automatically extracts vendors, dates, and amounts.",
      },
      {
        title: "Event-Driven Alerts & Analytics",
        detail: "Inngest background cron jobs & Resend for automated 80% budget threshold alerts.",
      },
    ],
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
        className="relative isolate flex min-h-[calc(100vh-4rem)] w-full flex-col justify-center overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:py-20"
      >
        {/* Ambient hero field */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-32 top-16 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
          <div className="absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />
        </div>
        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:col-span-7">
            {/* Fluid display headline — strictly one line on desktop */}
            <h1 className="hero-animate-1 font-sora text-[clamp(2.5rem,7vw,3.5rem)] sm:text-5xl lg:text-[clamp(2.85rem,4.2vw,4.5rem)] xl:text-[clamp(3.25rem,4.6vw,4.85rem)] font-extrabold leading-[1.08] tracking-[-0.04em] text-white lg:whitespace-nowrap">
              Hey,{"\u00A0"}I&apos;m{" "}<span className="bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent">Abhishek</span>
            </h1>

            {/* Animated decorative accent line */}
            <div
              aria-hidden
              className="hero-animate-2 mt-6 h-px w-20 origin-center lg:origin-left bg-gradient-to-r from-zinc-500 via-zinc-400 to-transparent sm:mt-7"
            />

            {/* Role title */}
            <p className="hero-animate-3 mt-6 text-xl font-semibold tracking-tight text-zinc-200 sm:mt-7 sm:text-2xl">
              Software Developer
            </p>

            {/* Tagline bio */}
            <p className="hero-animate-4 mt-4 max-w-xl text-balance text-base font-light leading-relaxed text-zinc-400 sm:text-lg">
              I build full-stack products — from first commit to production. Looking to do the same with a great team.
            </p>

            {/* CTA Buttons */}
            <div className="hero-animate-5 mt-8 flex flex-wrap items-center justify-center gap-3.5 lg:justify-start">
              <a
                href="/work"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
                  window.history.pushState(null, "", "/work");
                }}
                className="inline-flex items-center gap-2 rounded-xl bg-[#f4f4f5] px-6 py-3 font-inter text-sm font-semibold text-[#09090b] shadow-[0_12px_30px_-12px_rgba(255,255,255,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e4e4e7] active:translate-y-0"
              >
                <span>Explore Work</span>
                <span className="text-xs opacity-80">↓</span>
              </a>

              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  window.history.pushState(null, "", "/contact");
                }}
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3 font-inter text-sm font-semibold text-zinc-100 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.08] active:translate-y-0"
              >
                <span>Get in Touch</span>
                <span className="text-xs text-zinc-400">→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive 3D Dev ID Badge */}
          <div className="flex justify-center lg:col-span-5">
            <DevIdCard />
          </div>
        </div>
      </section>

      {/* Work Section */}
      <WorkSection projects={FEATURED_PROJECTS} workPoints={WORK_POINTS} />

      {/* Tech Grid Section */}
      <TechGrid />

      {/* Education Section */}
      <ScrollReveal>
        <EducationSection />
      </ScrollReveal>

      {/* Contact Section */}
      <ScrollReveal delay={80}>
        <ContactSection />
      </ScrollReveal>

      {/* Footer */}
      <Footer />
    </main>
  );
}
