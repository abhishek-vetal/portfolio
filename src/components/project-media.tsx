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
      {/* Light Studio Window Chrome Header */}
      <div className="flex items-center justify-between border-b border-zinc-200/80 bg-white px-4 py-2.5 shrink-0">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 font-mono text-[11px] text-zinc-400">
            {name.toLowerCase()}
          </span>
        </div>
        <span className="flex items-center gap-1.5 rounded-md bg-zinc-100/80 px-3 py-1 font-mono text-[10px] tracking-tight text-zinc-500 ring-1 ring-zinc-200/70">
          <svg
            width="10"
            height="10"
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden
            className="shrink-0 text-zinc-400"
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
          <span className="truncate">{url.replace(/^https?:\/\//, "")}</span>
        </span>
      </div>

      {/* Main Screenshot Stage */}
      <div className="relative min-h-0 flex-1 overflow-hidden bg-white">
        {hasShots ? (
          <div className="group/img relative h-full w-full overflow-hidden">
            {shots.map((shot, i) => (
              <Image
                key={shot.src}
                src={shot.src}
                alt={`${name} — ${shot.label}`}
                fill
                unoptimized
                sizes="100vw"
                className={[
                  "object-contain object-top -mt-[1px] h-[calc(100%+1px)] transition-[opacity,transform] duration-500 ease-out",
                  i === active
                    ? "scale-100 opacity-100"
                    : "scale-[1.01] opacity-0",
                ].join(" ")}
              />
            ))}

            {/* Hover CTA */}
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open the ${name} live demo`}
              className="absolute inset-0 flex items-center justify-center bg-white/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover/img:opacity-100"
            >
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-950 px-4 py-2 text-xs font-semibold text-white shadow-xl">
                Open live demo
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M3.5 8.5L8.5 3.5M8.5 3.5H4.5M8.5 3.5V7.5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        ) : (
          /* High-Tech Terminal Showcase for projects without screenshots */
          <div className="flex h-full w-full flex-col overflow-hidden bg-[#0c0c0e] font-mono text-xs text-zinc-300">
            <div className="flex flex-1 flex-col justify-between p-5 space-y-3 font-mono text-[11px] leading-relaxed text-zinc-300">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-zinc-500">
                  <span>$</span>
                  <span className="text-emerald-400">{name.toLowerCase()}</span>
                  <span>--init-service --model self-hosted-tts</span>
                </div>

                <p className="text-zinc-400">
                  [info] Initializing voice synthesis neural engine...
                </p>
                <p className="text-emerald-400/90">
                  [success] TTS model weights loaded in 340ms (Zero-shot cloning ready)
                </p>

                <div className="mt-3 rounded-lg border border-zinc-800 bg-zinc-900/60 p-3 space-y-1.5">
                  <div className="flex items-center justify-between text-zinc-400 text-[10px]">
                    <span>CLONED_VOICE_SAMPLER</span>
                    <span className="text-zinc-500">24kHz / WAV</span>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-400 font-mono">
                    <span>▌│║║▌│║▌│║▌│║▌│║▌│║▌│</span>
                    <span className="text-zinc-500 text-[10px] ml-auto">00:03.4</span>
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

      {/* Bottom Thumbnail Preview Bar */}
      {hasShots && (
        <div className="flex items-center justify-center gap-3 border-t border-zinc-200/80 bg-zinc-50/80 px-4 py-2.5 shrink-0 overflow-x-auto">
          {shots.map((shot, i) => {
            const isActive = i === active;
            return (
              <button
                key={shot.src}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                aria-label={`Show ${name} ${shot.label}`}
                className={[
                  "group/thumb flex items-center gap-2 rounded-lg px-2.5 py-1 transition-all text-left",
                  isActive
                    ? "bg-white shadow-xs ring-1 ring-zinc-300 text-zinc-900"
                    : "hover:bg-white/60 text-zinc-500",
                ].join(" ")}
              >
                <span className="relative block h-7 w-11 overflow-hidden rounded-md ring-1 ring-zinc-200 shrink-0">
                  <Image
                    src={shot.src}
                    alt=""
                    fill
                    unoptimized
                    className={[
                      "object-cover -mt-[1px] h-[calc(100%+1px)] transition-opacity",
                      isActive
                        ? "opacity-100"
                        : "opacity-60 group-hover/thumb:opacity-90",
                    ].join(" ")}
                  />
                </span>
                <span
                  className={[
                    "font-mono text-[10px] font-semibold uppercase tracking-wider",
                    isActive ? "text-zinc-900" : "text-zinc-500",
                  ].join(" ")}
                >
                  {shot.label}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
