"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface MediaItem {
  src: string;
  label: string;
}

interface Project {
  id: string;
  title: string;
  category: string;
  period: string;
  description: string;
  highlights: string[];
  techStack: string[];
  live?: string;
  github?: string;
  screenshots: MediaItem[];
}

export function WorkSection({ projects }: { projects: Project[] }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [activeSlide, setActiveSlide] = useState<Record<string, number>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handlePrev = (projectId: string, total: number) => {
    setActiveSlide((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] ?? 0) - 1 + total) % total,
    }));
  };

  const handleNext = (projectId: string, total: number) => {
    setActiveSlide((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] ?? 0) + 1) % total,
    }));
  };

  return (
    <section id="work" ref={sectionRef} className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6">
      {/* Section Header */}
      <div
        className={[
          "flex flex-col gap-2 transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        ].join(" ")}
      >
        <div className="flex items-center justify-between">
          <h2 className="font-sora text-3xl font-bold tracking-tight text-[#222222] sm:text-4xl">
            Featured Work
          </h2>
          <span className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-zinc-400">
            [01 / FEATURED PROJECTS]
          </span>
        </div>
        <p className="max-w-xl text-base text-zinc-600">
          Selected full-stack applications, real-time tools, and software solutions built from scratch.
        </p>
      </div>

      {/* Projects List */}
      <div className="mt-14 flex flex-col gap-24">
        {projects.map((project, idx) => {
          const currentSlide = activeSlide[project.id] ?? 0;
          const totalSlides = project.screenshots.length;

          return (
            <div
              key={project.id}
              style={{ transitionDelay: `${idx * 150}ms` }}
              className={[
                "grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12 transition-all duration-700 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
              ].join(" ")}
            >
              {/* Project Visual Carousel */}
              <div className="order-1 lg:col-span-7">
                <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-900 p-2 shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:border-zinc-300 hover:shadow-xl">
                  {/* Browser Chrome Header */}
                  <div className="flex items-center justify-between border-b border-zinc-800/80 px-3 py-2">
                    <div className="flex items-center gap-1.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                      <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                      <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="rounded bg-zinc-800/90 px-3 py-0.5 font-mono text-[11px] text-zinc-400">
                        {project.screenshots[currentSlide]?.label || project.title}
                      </span>
                    </div>
                    <div className="w-12" />
                  </div>

                  {/* Image Display */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-b-xl bg-zinc-950">
                    <Image
                      src={project.screenshots[currentSlide]?.src || "/placeholder.png"}
                      alt={project.title}
                      fill
                      className="object-contain transition-all duration-300"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      priority={idx === 0}
                    />

                    {/* Navigation Controls for Carousel */}
                    {totalSlides > 1 && (
                      <>
                        <button
                          onClick={() => handlePrev(project.id, totalSlides)}
                          className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-md transition-all hover:bg-black/90 hover:scale-110 active:scale-95"
                          aria-label="Previous screenshot"
                        >
                          <FaChevronLeft className="h-3.5 w-3.5" />
                        </button>
                        <button
                          onClick={() => handleNext(project.id, totalSlides)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-md transition-all hover:bg-black/90 hover:scale-110 active:scale-95"
                          aria-label="Next screenshot"
                        >
                          <FaChevronRight className="h-3.5 w-3.5" />
                        </button>

                        {/* Carousel Dots */}
                        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 backdrop-blur-md">
                          {project.screenshots.map((_, slideIdx) => (
                            <button
                              key={slideIdx}
                              onClick={() =>
                                setActiveSlide((prev) => ({
                                  ...prev,
                                  [project.id]: slideIdx,
                                }))
                              }
                              className={`h-1.5 rounded-full transition-all ${
                                slideIdx === currentSlide
                                  ? "w-5 bg-white"
                                  : "w-1.5 bg-white/40 hover:bg-white/70"
                              }`}
                              aria-label={`Go to slide ${slideIdx + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Info Column */}
              <div className="order-2 flex flex-col gap-5 lg:col-span-5">
                <div className="flex items-center gap-3">
                  <span className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 font-inter text-xs font-semibold text-zinc-700">
                    {project.category}
                  </span>
                  <span className="font-mono text-xs text-zinc-400">{project.period}</span>
                </div>

                <h3 className="font-sora text-2xl font-bold tracking-tight text-[#222222] sm:text-3xl">
                  {project.title}
                </h3>

                <p className="text-base text-zinc-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <ul className="flex flex-col gap-2">
                  {project.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5 text-sm text-zinc-700">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-900" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-zinc-200 bg-white px-2.5 py-1 font-inter text-xs font-medium text-zinc-700 shadow-2xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-2">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-5 py-2.5 font-inter text-xs font-semibold text-white shadow-xs transition-all hover:bg-zinc-800 hover:-translate-y-0.5"
                    >
                      <span>Live Demo</span>
                      <FaExternalLinkAlt className="h-3 w-3 opacity-80" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-5 py-2.5 font-inter text-xs font-semibold text-zinc-800 shadow-2xs transition-all hover:border-zinc-400 hover:bg-zinc-50 hover:-translate-y-0.5"
                    >
                      <FaGithub className="h-3.5 w-3.5 text-zinc-700" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
