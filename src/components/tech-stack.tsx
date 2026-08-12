import React from "react";

/**
 * Tech stack shown as a simple static row of chips.
 */
export default function TechStack({ stack }: { stack: string[] }) {
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {stack.map((tech) => (
        <span
          key={tech}
          className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 border border-zinc-200/80 shadow-2xs transition-colors hover:border-zinc-300"
        >
          <span>{tech}</span>
        </span>
      ))}
    </div>
  );
}
