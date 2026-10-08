"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/", id: "home", label: "Home" },
  { href: "/work", id: "work", label: "Work" },
  { href: "/resume", id: "resume", label: "Resume" },
  { href: "/contact", id: "contact", label: "Contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const path = window.location.pathname.replace(/^\//, "");
    if (path && ["work", "resume", "contact"].includes(path)) {
      const el = document.getElementById(path);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
          setActive(path);
        }, 150);
      }
    }
  }, []);

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
              window.history.replaceState(null, "", id === "home" ? "/" : `/${id}`);
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
    targetId: string
  ) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setActive(targetId);
      window.history.pushState(null, "", targetId === "home" ? "/" : `/${targetId}`);
    }
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#09090b]/80 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.55)] backdrop-blur-2xl font-sans">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          onClick={(e) => handleNavClick(e, "home")}
          aria-label="Home"
          className="font-sora text-base font-bold tracking-tight text-zinc-100 transition-colors hover:text-white sm:text-lg"
        >
          Abhishek
        </Link>

        {/* Normal Nav Links */}
        <nav
          className="hidden items-center gap-7 sm:flex"
          aria-label="Primary"
        >
          {NAV_LINKS.map(({ href, id, label }) => {
            const isActive = active === id;
            return (
              <a
                key={id}
                href={href}
                onClick={(e) => handleNavClick(e, id)}
                aria-current={isActive ? "true" : undefined}
                className={`relative font-sans text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "font-semibold text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-300"
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          {/* Availability pill — compact & interactive */}
          <a
            href="/contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 font-inter text-xs font-medium text-zinc-200 shadow-[0_8px_24px_-12px_rgba(255,255,255,0.35)] transition-all duration-200 hover:border-white/20 hover:bg-white/[0.08] hover:text-white md:inline-flex"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span>Open to opportunities</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-zinc-200 transition-all hover:border-white/20 hover:bg-white/[0.1] sm:hidden"
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
        <div className="border-t border-white/10 bg-[#09090b]/95 px-4 py-3 shadow-[0_16px_36px_-18px_rgba(0,0,0,0.8)] backdrop-blur-2xl sm:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {NAV_LINKS.map(({ href, id, label }) => {
              const isActive = active === id;
              return (
                <a
                  key={id}
                  href={href}
                  onClick={(e) => handleNavClick(e, id)}
                  aria-current={isActive ? "true" : undefined}
                  className={`rounded-xl px-3.5 py-2.5 font-sans text-sm transition-colors ${
                    isActive
                      ? "bg-white/[0.08] font-bold text-white"
                      : "font-medium text-zinc-400 hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  {label}
                </a>
              );
            })}
            <a
              href="/contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="mt-2 flex items-center gap-2 rounded-xl border border-emerald-300/20 bg-emerald-400/[0.08] px-3.5 py-2 font-sans text-xs font-semibold text-emerald-200 transition-colors hover:bg-emerald-400/[0.14]"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>Open to opportunities</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
