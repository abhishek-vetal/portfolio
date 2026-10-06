import React from "react";

/**
 * Tech stack shown as refined engineering tags.
 */
export default function TechStack({ stack }: { stack: string[] }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-1.5">
      {stack.map((tech) => (
        <span
          key={tech}
          className="inline-flex items-center rounded-lg border border-zinc-200/80 bg-zinc-50/90 px-2.5 py-1 font-mono text-[11px] font-medium text-zinc-700 shadow-2xs transition-all duration-200 hover:border-zinc-300 hover:bg-white hover:text-zinc-900"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}
