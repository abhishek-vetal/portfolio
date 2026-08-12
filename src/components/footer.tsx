"use client";

import { FaArrowUp } from "react-icons/fa";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-zinc-200 bg-white py-8">
      <div className="relative mx-auto flex max-w-7xl items-center justify-center px-4 sm:px-6">
        {/* Centered Copyright & Resume */}
        <div className="flex items-center gap-2 font-sans text-xs text-zinc-500">
          <span>© {new Date().getFullYear()} Abhishek Vetal</span>
          <span>·</span>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group font-medium text-zinc-600 transition-colors hover:text-zinc-900"
          >
            <span>Resume</span>
            <span className="ml-0.5 inline-block text-[10px] text-zinc-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-zinc-900">
              ↗
            </span>
          </a>
        </div>

        {/* Absolute Right Back to Top Button */}
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="absolute right-4 sm:right-6 group inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3.5 py-1.5 font-sans text-xs font-medium text-zinc-600 shadow-2xs transition-all duration-200 hover:border-zinc-300 hover:bg-white hover:text-zinc-950 hover:-translate-y-0.5 active:translate-y-0"
        >
          <span>Top</span>
          <FaArrowUp className="h-3 w-3 transition-transform duration-200 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </footer>
  );
}
