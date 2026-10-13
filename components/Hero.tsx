"use client";

import { useEffect, useState } from "react";
import { profile, greetings, about } from "@/lib/data";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  DownloadIcon,
  ArrowIcon,
  PinIcon,
} from "./Icons";

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % greetings.length), 2200);
    return () => clearInterval(t);
  }, []);

  const [first, ...rest] = profile.name.split(" ");
  const initials = profile.name.split(" ").map((n) => n[0]).join("");

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      {/* Grid + glow backdrop. */}
      <div className="pointer-events-none absolute inset-0 grid-bg grid-mask opacity-70" />
      <div className="pointer-events-none absolute -top-32 left-1/4 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-accent/20 blur-[130px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-[380px] w-[380px] rounded-full bg-accent-2/10 blur-[130px]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 py-16 md:grid-cols-[1.25fr_0.9fr]">
        {/* ── Left: intro ── */}
        <div className="animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs text-muted backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-2 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-2" />
            </span>
            Open to new-grad &amp; internship roles
          </div>

          <p className="mb-3 font-mono text-sm text-accent-2">
            <span key={idx} className="inline-block animate-fade-up">
              {greetings[idx]}
            </span>{" "}
            <span className="text-muted">— I&apos;m</span>
          </p>

          <h1 className="text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-fg">{first}</span>{" "}
            <span className="text-gradient animate-gradient-pan">
              {rest.join(" ")}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-body">
            {profile.tagline}
          </p>

          <div className="mt-4 flex items-center gap-2 text-sm text-muted">
            <PinIcon className="h-4 w-4 text-accent" />
            {profile.location}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-transform hover:scale-[1.03]"
            >
              <DownloadIcon className="h-4 w-4" />
              View CV
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-fg transition-colors hover:border-accent/50"
            >
              Let&apos;s talk
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <SocialLink href={profile.socials.github} label="GitHub">
              <GitHubIcon className="h-5 w-5" />
            </SocialLink>
            <SocialLink href={profile.socials.linkedin} label="LinkedIn">
              <LinkedInIcon className="h-5 w-5" />
            </SocialLink>
            <SocialLink href={profile.socials.email} label="Email">
              <MailIcon className="h-5 w-5" />
            </SocialLink>
          </div>
        </div>

        {/* ── Right: profile panel ── */}
        <div className="relative mx-auto w-full max-w-sm animate-float">
          <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-accent/30 to-accent-2/20 blur-2xl" />
          <div className="ring-grad relative rounded-[28px] bg-card/80 p-7 backdrop-blur">
            {/* Swap the initials block for a photo: add /public/profile.jpg
                and this will use it automatically. */}
            <div className="ring-grad relative mx-auto flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-surface to-bg">
              <div className="dot-bg absolute inset-0 opacity-40" />
              <span className="relative bg-gradient-to-br from-accent to-accent-2 bg-clip-text text-7xl font-bold text-transparent">
                {initials}
              </span>
            </div>
            <p className="mt-5 text-center text-lg font-semibold text-fg">
              {profile.name}
            </p>
            <p className="text-center text-sm text-muted">{profile.role}</p>

            <div className="mt-5 grid grid-cols-3 gap-2">
              <Stat value="4.0" label="GPA" />
              <Stat value="3+" label="Research" />
              <Stat value="'28" label="Grad" />
            </div>

            <div className="mt-5 flex flex-wrap justify-center gap-1.5 border-t border-border pt-5">
              {about.primaryStack.slice(0, 6).map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-border bg-bg/60 px-2 py-1 font-mono text-[11px] text-muted"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-xs text-muted">
        <span className="animate-pulse">scroll ↓</span>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-fg"
    >
      {children}
    </a>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-border bg-bg/50 py-2.5 text-center">
      <div className="text-base font-bold text-fg">{value}</div>
      <div className="text-[10px] uppercase tracking-wide text-muted">{label}</div>
    </div>
  );
}
