import WorkSection from "@/components/work-section";
import TechGrid from "@/components/tech-grid";
import EducationSection from "@/components/education-section";
import ContactSection from "@/components/contact-section";
import { Footer } from "@/components/footer";

const FEATURED_PROJECTS = [
  {
    name: "Vaani",
    description:
      "Full-stack AI voice SaaS app with voice cloning, powered by a self-hosted open-source TTS model.",
    points: [
      "Generate speech from any text using ready-made AI voices or a voice you've cloned yourself, uploaded or recorded in the browser.",
      "Runs on a self-hosted open-source TTS model instead of a third-party API, with waveform playback to hear back what you've generated.",
      "Usage-based billing based on how much you generate.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL / Prisma",
      "Clerk",
      "Self-hosted TTS",
    ],
    live: null,
    github: "https://github.com/abhishek-vetal/vaani",
    screenshots: [
      { src: "/vaani-cloning.png", label: "Voice Cloning" },
      { src: "/vaani-studio.png", label: "TTS Studio" },
    ],
  },
  {
    name: "Save",
    description:
      "Personal finance tracking app with budget analytics and expense classification.",
    points: [
      "Track monthly income and expenses with interactive chart breakdowns.",
      "Categorize transactions automatically with smart rules.",
      "Set custom savings goals and receive real-time budget notifications.",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
    ],
    live: "https://save-finance-platform.vercel.app",
    github: "https://github.com/abhishek-vetal/save",
    screenshots: [
      { src: "/save-landing.png", label: "Landing" },
      { src: "/save-dashboard.png", label: "Dashboard" },
      { src: "/save-overview.png", label: "Personal" },
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
        className="relative mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-7xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6"
      >
        <div className="relative flex flex-col items-center">

          {/* Fluid display headline — Sora font staggered entrance animation 1 */}
          <h1 className="hero-animate-1 font-sora text-[clamp(3rem,8.5vw,8rem)] font-extrabold leading-[1.02] tracking-[-0.04em] text-[#222222] text-balance">
            Hey,{"\u00A0"}I&apos;m{" "}Abhishek
          </h1>

          {/* Animated decorative accent line — animation 2 */}
          <div
            aria-hidden
            className="hero-animate-2 mt-8 h-px w-20 origin-center bg-gradient-to-r from-transparent via-zinc-400 to-transparent sm:mt-10"
          />

          {/* Role title — animation 3 */}
          <p className="hero-animate-3 mt-8 text-xl font-semibold tracking-tight text-zinc-800 sm:mt-10 sm:text-2xl">
            Software Developer
          </p>

          {/* Tagline bio — animation 4 */}
          <p className="hero-animate-4 mt-5 max-w-2xl text-balance text-base font-light leading-relaxed text-zinc-600 sm:text-lg">
            I build full-stack products — from first commit to production. Looking to do the same with a great team.
          </p>

          {/* CTA Buttons — animation 5 */}
          <div className="hero-animate-5 mt-9 flex flex-wrap items-center justify-center gap-3.5">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-6 py-3 font-inter text-sm font-semibold text-white shadow-xs transition-all duration-200 hover:bg-zinc-800 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Explore Work</span>
              <span className="text-xs opacity-80">↓</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-300/80 bg-white px-6 py-3 font-inter text-sm font-semibold text-zinc-900 shadow-2xs transition-all duration-200 hover:border-zinc-400 hover:bg-zinc-50 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Get in Touch</span>
              <span className="text-xs text-zinc-400">→</span>
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
