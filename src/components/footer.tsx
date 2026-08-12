"use client";

import React from "react";
import { FaArrowUp } from "react-icons/fa";

export function Footer() {
  const [isVisible, setIsVisible] = React.useState(false);
  const footerRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer ref={footerRef} className="w-full border-t border-zinc-200/80">
      <div
        className={[
          "relative mx-auto flex w-full max-w-7xl items-center justify-center px-4 py-8 sm:px-6 transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none",
        ].join(" ")}
      >
        {/* Centered copyright + subtle Resume link */}
        <div className="flex items-center gap-2 font-sans text-xs text-zinc-500">
          <span>© {new Date().getFullYear()} Abhishek Vetal</span>
          <span className="text-zinc-300">•</span>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group font-medium text-zinc-600 transition-colors hover:text-zinc-900"
          >
            <span>Resume</span>
            <span className="ml-0.5 inline-block text-[10px] text-zinc-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-zinc-700">↗</span>
          </a>
        </div>

        {/* Back to top — absolute right */}
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="group absolute right-4 sm:right-6 flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-500 shadow-xs transition-all duration-200 hover:border-zinc-300 hover:bg-zinc-900 hover:text-white hover:scale-105 active:scale-95"
        >
          <FaArrowUp className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </footer>
  );
}

