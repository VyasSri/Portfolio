"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

const links = [
  { href: "#professional", label: "Professional" },
  { href: "#personal", label: "Personal" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-bg/75 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="group flex items-center gap-2 font-mono text-sm">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-accent to-accent-2 text-xs font-bold text-white">
            {profile.name.split(" ").map((n) => n[0]).join("")}
          </span>
          <span className="font-sans font-semibold text-fg">{profile.name}</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm text-muted transition-colors hover:bg-white/5 hover:text-fg"
            >
              {l.label}
            </a>
          ))}
          <a
            href={profile.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-fg transition-colors hover:bg-accent/20"
          >
            Resume
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-fg md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="text-base leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-bg/95 px-6 py-3 backdrop-blur md:hidden">
          <div className="flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm text-muted hover:text-fg"
              >
                {l.label}
              </a>
            ))}
            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 w-fit rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-fg"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
