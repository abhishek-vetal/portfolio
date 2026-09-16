"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export type Shot = { src: string; label: string };

export default function ProjectMedia({
  name,
  url,
  shots,
}: {
  name: string;
  url: string;
  shots: Shot[];
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const hasShots = shots.length > 0;

  // Autoplay — skipped entirely for users who prefer reduced motion.
  useEffect(() => {
    if (shots.length < 2 || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % shots.length);
    }, 4000);
    return () => clearInterval(id);
  }, [paused, shots.length]);

  return (
    <div
      className="flex h-full w-full flex-col overflow-hidden bg-white text-left"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Light Web Browser Chrome Header */}
      <div className="flex items-center justify-start bg-white px-4 py-2.5 shrink-0 gap-3">
        <div className="flex items-center gap-2 shrink-0">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>

        {/* Browser URL Address Bar (Left Aligned) */}
        <div className="flex items-center justify-start ml-1">
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-100/90 px-3 py-1 font-mono text-[11px] tracking-tight text-zinc-600 border border-zinc-200/70 shadow-2xs">
            <svg
              width="11"
              height="11"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden
              className="shrink-0 text-emerald-600"
            >
              <rect
                x="2"
                y="5"
                width="8"
                height="6"
                rx="1"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <path
                d="M4 5V4a2 2 0 0 1 4 0v1"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </svg>
            <span className="truncate max-w-[180px] sm:max-w-[280px]">{url ? url.replace(/^https?:\/\//, "").replace(/\/$/, "") : `${name.toLowerCase()}.app`}</span>
          </span>
        </div>
      </div>

      {/* Main Screenshot Stage */}
      <div className="relative min-h-0 flex-1 overflow-hidden bg-zinc-100/40">
        {hasShots ? (
          <div className="relative h-full w-full overflow-hidden">
            {shots.map((shot, i) => (
              <Image
                key={shot.src}
                src={shot.src}
                alt={`${name} — ${shot.label}`}
                fill
                unoptimized
                priority={i === 0}
                sizes="100vw"
                className={[
                  "object-cover object-top w-full h-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] transform-gpu",
                  i === active
                    ? "scale-100 opacity-100 translate-y-0"
                    : "scale-[0.99] opacity-0 translate-y-1 pointer-events-none",
                ].join(" ")}
              />
            ))}
          </div>
        ) : (
          /* High-Tech Terminal Showcase for projects without screenshots */
          <div className="flex h-full w-full flex-col overflow-hidden bg-[#0c0c0e] font-mono text-xs text-zinc-300">
            <div className="flex flex-1 flex-col justify-between p-5 space-y-3 font-mono text-[11px] leading-relaxed text-zinc-300">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-zinc-500">
                  <span>$</span>
                  <span className="text-emerald-400">{name.toLowerCase()}</span>
                  <span>{name === "Save" ? "--init-analytics --api gemini-v1" : "--init-service --model self-hosted-tts"}</span>
                </div>

                <p className="text-zinc-400">
                  {name === "Save"
                    ? "[info] Connecting to PostgreSQL database & Gemini AI engine..."
                    : "[info] Initializing voice synthesis neural engine..."}
                </p>
                <p className="text-emerald-400/90">
                  {name === "Save"
                    ? "[success] Receipt OCR & automated reporting pipeline online (200 OK)"
                    : "[success] TTS model weights loaded in 340ms (Zero-shot cloning ready)"}
                </p>

                <div className="mt-3 rounded-lg border border-zinc-800 bg-zinc-900/60 p-3 space-y-1.5">
                  <div className="flex items-center justify-between text-zinc-400 text-[10px]">
                    <span>{name === "Save" ? "LIVE_TRANSACTION_FEED" : "CLONED_VOICE_SAMPLER"}</span>
                    <span className="text-zinc-500">{name === "Save" ? "POSTGRESQL / PRISMA" : "24kHz / WAV"}</span>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-400 font-mono">
                    <span>{name === "Save" ? "₹73,652.97 Income | ₹22,005.93 Expense" : "▌│║║▌│║▌│║▌│║▌│║▌│║▌│"}</span>
                    <span className="text-zinc-500 text-[10px] ml-auto">{name === "Save" ? "SYNCED" : "00:03.4"}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-zinc-400 pt-2 border-t border-zinc-800/60">
                <span className="text-emerald-400">~/projects/{name.toLowerCase()}</span>
                <span className="text-zinc-500">git:(main)</span>
                <span className="animate-pulse text-zinc-200">_</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Ultra-Minimal Bottom Preview Switcher Bar */}
      {hasShots && (
        <div className="flex items-center justify-center bg-zinc-50/80 py-2 shrink-0">
          <div className="flex items-center gap-1.5 rounded-full bg-zinc-200/50 p-1 backdrop-blur-xs">
            {shots.map((shot, i) => {
              const isActive = i === active;
              return (
                <button
                  key={shot.src}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  aria-label={`Show ${shot.label}`}
                  className={[
                    "flex h-6 w-6 items-center justify-center rounded-full font-mono text-[11px] font-semibold transition-all duration-150 cursor-pointer",
                    isActive
                      ? "bg-[#18181b] text-white shadow-2xs"
                      : "text-zinc-500 hover:text-zinc-900 hover:bg-white/80",
                  ].join(" ")}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
