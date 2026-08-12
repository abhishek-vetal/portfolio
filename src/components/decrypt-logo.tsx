"use client";

import { useEffect, useRef, useState } from "react";

const TEXT = "ABHI";
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!<>-_\\/[]{}—=+*^?#";

const ITERATIONS = 10;
const FRAME_MS = 45;

export function DecryptLogo({ className }: { className?: string }) {
  const [display, setDisplay] = useState(TEXT);
  const reducedMotion = useRef(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  const scramble = () => {
    if (reducedMotion.current) return;
    if (timerRef.current) clearInterval(timerRef.current);
    let frame = 0;
    timerRef.current = setInterval(() => {
      frame++;
      setDisplay(
        TEXT.split("")
          .map((char, i) => {
            const revealAt = Math.floor(
              ((i + 1) / (TEXT.length + 1)) * ITERATIONS
            );
            if (frame > revealAt) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );
      if (frame >= ITERATIONS) {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = null;
        setDisplay(TEXT);
      }
    }, FRAME_MS);
  };

  useEffect(() => {
    scramble();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <span
      aria-label={TEXT}
      onMouseEnter={scramble}
      onFocus={scramble}
      className={`cursor-pointer font-mono text-lg font-bold tracking-[0.25em] text-zinc-900 sm:text-xl ${className ?? ""}`}
    >
      {display}
    </span>
  );
}
