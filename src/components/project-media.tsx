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
  const [isZoomed, setIsZoomed] = useState(false);
  const hasShots = shots.length > 0;

  // Autoplay — skipped entirely for users who prefer reduced motion.
  useEffect(() => {
    if (shots.length < 2 || paused || isZoomed) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % shots.length);
    }, 4000);
    return () => clearInterval(id);
  }, [paused, shots.length, isZoomed]);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsZoomed(false);
    };
    if (isZoomed) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isZoomed]);

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
          <div className="group/img relative h-full w-full overflow-hidden cursor-zoom-in" onClick={() => setIsZoomed(true)}>
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
                  "object-cover object-top w-full h-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] transform-gpu group-hover/img:scale-[1.04]",
                  i === active
                    ? "scale-100 opacity-100 translate-y-0"
                    : "scale-[0.99] opacity-0 translate-y-1 pointer-events-none",
                ].join(" ")}
              />
            ))}

            {/* Hover CTA Overlay */}
            <div className="absolute inset-0 flex items-center justify-center gap-2.5 bg-black/20 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover/img:opacity-100 z-10">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsZoomed(true);
                }}
                className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1.5 font-sans text-xs font-semibold text-zinc-900 shadow-lg transition-all duration-200 hover:scale-105 hover:bg-white"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
                <span>Zoom View</span>
              </button>

              {url && (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`Open the ${name} live demo`}
                  className="inline-flex items-center gap-1 rounded-full bg-zinc-900/95 px-3.5 py-1.5 font-sans text-xs font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-zinc-900"
                >
                  <span>Live Demo</span>
                  <span className="text-xs">↗</span>
                </a>
              )}
            </div>
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

      {/* High-Resolution Zoom Lightbox Modal */}
      {isZoomed && hasShots && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-8 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsZoomed(false)}
        >
          <div
            className="relative flex max-h-[92vh] max-w-6xl w-full flex-col overflow-hidden rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox Header */}
            <div className="flex items-center justify-between border-b border-zinc-800/80 bg-zinc-900/90 px-5 py-3">
              <div className="flex items-center gap-3">
                <span className="font-sans text-sm font-semibold text-white">
                  {name} — {shots[active]?.label}
                </span>
                <span className="font-mono text-xs text-zinc-400">
                  ({active + 1}/{shots.length})
                </span>
              </div>

              <div className="flex items-center gap-2">
                {url && (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-lg bg-zinc-800 px-3 py-1.5 font-sans text-xs font-semibold text-zinc-200 transition-colors hover:bg-zinc-700 hover:text-white"
                  >
                    <span>Open Live Demo</span>
                    <span>↗</span>
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setIsZoomed(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-800 text-zinc-400 transition-colors hover:bg-zinc-700 hover:text-white"
                  aria-label="Close zoom modal"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Lightbox Image Viewport */}
            <div className="relative flex-1 overflow-auto max-h-[78vh] p-2 bg-zinc-950 flex items-center justify-center">
              <Image
                src={shots[active].src}
                alt={`${name} — ${shots[active].label}`}
                width={1920}
                height={1080}
                unoptimized
                className="w-full h-auto object-contain rounded-lg max-h-[75vh]"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
