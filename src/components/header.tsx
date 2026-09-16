"use client";

import { useEffect, useState } from "react";
import { DecryptLogo } from "@/components/decrypt-logo";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#work", label: "Work" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    let currentActive = "";

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      const sectionIds = ["home", "work", "resume", "contact"];

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            if (currentActive !== id) {
              currentActive = id;
              setActive(id);
              window.history.replaceState(null, "", id === "home" ? window.location.pathname : `/#${id}`);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setActive(id);
      window.history.pushState(null, "", id === "home" ? window.location.pathname : `/#${id}`);
    }
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/85 shadow-[0_4px_20px_-6px_rgba(15,23,42,0.06)] backdrop-blur-xl font-sans">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          aria-label="Home"
          className="transition-transform duration-200 hover:scale-105"
        >
          <DecryptLogo />
        </a>

        {/* Floating Pill Nav */}
        <nav
          className="hidden items-center gap-1.5 rounded-full border border-zinc-200/70 bg-zinc-100/70 p-1 backdrop-blur-sm sm:flex"
          aria-label="Primary"
        >
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = active === href.slice(1);
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                aria-current={isActive ? "true" : undefined}
                className={`rounded-full px-4 py-1.5 font-inter text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-zinc-900 text-white shadow-sm"
                    : "text-zinc-600 hover:text-zinc-900 hover:bg-white/70"
                }`}
              >
                {label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          {/* Availability pill */}
          <span className="hidden items-center gap-2 rounded-full border border-zinc-200/90 bg-white px-3 py-1 font-inter text-xs font-medium text-zinc-700 shadow-2xs lg:inline-flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span>Available for work</span>
          </span>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-800 transition-all hover:bg-zinc-50 sm:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="border-t border-zinc-200/80 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-xl sm:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = active === href.slice(1);
              return (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  aria-current={isActive ? "true" : undefined}
                  className={`rounded-xl px-3.5 py-2.5 font-sans text-sm transition-colors ${
                    isActive
                      ? "bg-zinc-900 font-bold text-white"
                      : "font-semibold text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
                  }`}
                >
                  {label}
                </a>
              );
            })}
            <div className="mt-2 flex items-center gap-2 rounded-xl bg-emerald-50/80 px-3.5 py-2 font-sans text-xs font-semibold text-emerald-800">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>Available for work</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
