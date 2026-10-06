"use client";

import React from "react";
import Image from "next/image";

export default function DevIdCard() {
  return (
    <div className="relative flex flex-col items-center max-w-full">
      {/* 
        The entire pendulum rig (rope + clip + ID card).
        Pivots from the top anchor point on page reload.
        Driven by hardware-accelerated CSS compositor animation for 100% smooth reload.
      */}
      <div className="animate-lanyard-swing relative flex flex-col items-center select-none">
        {/* Lanyard Rope: compact on mobile, extends to top of screen on desktop */}
        <div className="relative w-5 sm:w-6 h-7 sm:h-8 lg:h-9 flex items-center justify-center">
          {/* Desktop-only extension running all the way to the top of the screen */}
          <div className="hidden lg:flex absolute bottom-0 w-full lg:h-[200vh] bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-950 shadow-[0_0_12px_rgba(0,0,0,0.12)] items-center justify-center border-x border-zinc-800/80 pointer-events-none">
            <div className="w-full h-full flex justify-between px-0.5 sm:px-1">
              <div className="w-px h-full bg-zinc-700/60" />
              <div className="w-[1.5px] h-full bg-purple-500/40" />
              <div className="w-px h-full bg-zinc-700/60" />
            </div>
          </div>

          {/* Mobile-only visible compact rope segment */}
          <div className="lg:hidden w-full h-full rounded-t-xs bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-950 shadow-[0_0_12px_rgba(0,0,0,0.12)] flex items-center justify-center border-x border-zinc-800/80">
            <div className="w-full h-full flex justify-between px-0.5 sm:px-1">
              <div className="w-px h-full bg-zinc-700/60" />
              <div className="w-[1.5px] h-full bg-purple-500/40" />
              <div className="w-px h-full bg-zinc-700/60" />
            </div>
          </div>
        </div>

        {/* Brushed Metal Clip */}
        <div className="relative -mt-0.5 h-3.5 sm:h-4 w-10 sm:w-11 lg:w-12 rounded-xs bg-gradient-to-b from-zinc-200 via-zinc-400 to-zinc-500 border border-zinc-400 shadow-[0_2px_6px_rgba(0,0,0,0.25)] flex items-center justify-center z-20">
          <div className="h-1.5 w-5 sm:w-6 rounded-full bg-zinc-700/80 shadow-inner" />
          <div className="absolute -bottom-2 w-3 sm:w-3.5 h-2.5 bg-zinc-500 rounded-b-xs border-x border-b border-zinc-600 shadow-xs" />
        </div>

        {/* ID Card with responsive proportions for mobile, tablet & desktop */}
        <div
          className="animate-card-flex group relative -mt-1 w-[275px] min-[380px]:w-[295px] sm:w-[315px] lg:w-[330px] xl:w-[340px] h-[385px] min-[380px]:h-[410px] sm:h-[435px] lg:h-[455px] xl:h-[470px] cursor-default rounded-3xl"
          style={{
            transformOrigin: "50% 0px", // Card flexes at clip
          }}
        >
          {/* Card Body */}
          <div className="relative w-full h-full rounded-3xl overflow-hidden bg-zinc-950 border border-zinc-200/80 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.18)] select-none">
            {/* Holographic Foil Top Strip */}
            <div className="absolute top-0 left-0 right-0 z-20 h-1.5 bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-400" />

            {/* Badge Clip Slot Hole */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 h-1.5 w-7 rounded-full bg-zinc-950/80 border border-white/20 shadow-inner" />

            {/* User Photo */}
            <div className="relative w-full h-full">
              <Image
                src="/profile.jpg"
                alt="Abhishek Vetal — Software Developer"
                fill
                priority
                sizes="(max-width: 640px) 295px, (max-width: 1024px) 315px, 340px"
                className="object-cover object-center"
              />
            </div>

            {/* Subtle Specular Sheen */}
            <div
              className="pointer-events-none absolute inset-0 z-10 opacity-30"
              style={{
                background: "radial-gradient(circle 320px at 50% 40%, rgba(255,255,255,0.4), transparent 70%)",
                mixBlendMode: "overlay",
              }}
            />

            {/* Bottom Glassmorphic Identity Strip */}
            <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/90 via-black/50 to-transparent pt-16 pb-4.5 px-4.5 sm:px-5 flex items-end justify-between">
              <div className="flex flex-col">
                <h3 className="font-sora text-lg sm:text-xl font-bold tracking-tight text-white drop-shadow-md">
                  Abhishek Vetal
                </h3>
                <p className="font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-purple-300 drop-shadow-sm mt-0.5">
                  Software Developer
                </p>
              </div>

              {/* Subtle Minimal Pass ID */}
              <div className="flex flex-col items-end">
                <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-400">ID NO.</span>
                <span className="font-mono text-[11px] sm:text-xs font-bold text-white/90">#AV-2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
