import Reveal from "./Reveal";
import {
  RoleIcon,
  ArrowIcon,
  ExternalIcon,
  GitHubIcon,
  SparkleIcon,
} from "./Icons";
import {
  about,
  education,
  experience,
  projects,
  roles,
  journey,
  personal,
  organizations,
  skills,
} from "@/lib/data";

// ── Shared primitives ───────────────────────────────────────────
function SectionHeading({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 font-mono text-sm text-accent-2">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">
        {title}
      </h2>
      {sub && <p className="mt-3 leading-relaxed text-muted">{sub}</p>}
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-bg/50 px-3 py-1 font-mono text-xs text-muted">
      {children}
    </span>
  );
}

// Section shell with the grid-lit feel matched to the hero.
function Shell({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative px-6 py-24 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

// ── About / short profile ───────────────────────────────────────
export function About() {
  return (
    <Shell id="about">
      <Reveal>
        <SectionHeading eyebrow="// about" title={about.headline} />
      </Reveal>
      <div className="grid gap-8 md:grid-cols-[1.5fr_1fr]">
        <Reveal>
          <div className="space-y-5 text-lg leading-relaxed text-body">
            {about.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="card card-hover rounded-2xl p-6">
            <div className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-muted">
              <SparkleIcon className="h-4 w-4 text-accent" />
              Languages
            </div>
            <div className="space-y-3">
              {about.languages.map((l) => (
                <div key={l.label} className="flex items-center justify-between">
                  <span className="text-sm text-fg">{l.label}</span>
                  <span className="font-mono text-xs text-accent-2">{l.level}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Shell>
  );
}

// ── Tech-stack marquee ──────────────────────────────────────────
export function TechMarquee() {
  const stack = about.primaryStack;
  const doubled = [...stack, ...stack];
  return (
    <div className="relative border-y border-border bg-surface/40 py-6">
      <div className="marquee-mask overflow-hidden">
        <div className="flex w-max animate-marquee gap-3">
          {doubled.map((s, i) => (
            <span
              key={`${s}-${i}`}
              className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-body"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent-2" />
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Role archetype cards ────────────────────────────────────────
export function Roles() {
  return (
    <Shell>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {roles.map((r, i) => (
          <Reveal key={r.title} delay={i * 80}>
            <div className="card card-hover h-full rounded-2xl p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <RoleIcon name={r.icon} />
              </div>
              <h3 className="mb-2 font-semibold text-fg">{r.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{r.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Shell>
  );
}

// ── Experience ──────────────────────────────────────────────────
export function Experience() {
  return (
    <Shell>
      <Reveal>
        <SectionHeading
          eyebrow="// experience"
          title="Where I've worked"
          sub="Internship and research roles turning ML research into production systems."
        />
      </Reveal>
      <div className="space-y-6">
        {experience.map((x, i) => (
          <Reveal key={x.role} delay={i * 80}>
            <div className="card card-hover rounded-2xl p-8">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-fg">{x.role}</h3>
                  <p className="mt-1 text-accent">{x.org}</p>
                </div>
                <p className="font-mono text-sm text-muted">{x.period}</p>
              </div>
              <ul className="mt-5 space-y-3">
                {x.points.map((p, j) => (
                  <li key={j} className="flex gap-3 text-sm leading-relaxed text-body">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-2" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {x.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Shell>
  );
}

// ── Projects ────────────────────────────────────────────────────
export function Projects() {
  return (
    <Shell>
      <Reveal>
        <SectionHeading
          eyebrow="// projects"
          title="Things I've built"
          sub="Selected projects spanning AI agents, data platforms, and streaming RAG systems."
        />
      </Reveal>
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((p, i) => {
          const hasLink = p.link && p.link !== "#";
          return (
            <Reveal key={p.title} delay={i * 80}>
              <article className="card card-hover flex h-full flex-col overflow-hidden rounded-2xl">
                {/* Cover banner — swap for a real screenshot by giving the
                    project an `image` and rendering it here. */}
                <div className="relative h-36 overflow-hidden border-b border-border bg-gradient-to-br from-surface to-bg">
                  <div className="dot-bg absolute inset-0 opacity-50" />
                  <div className="absolute -right-6 -top-10 h-32 w-32 rounded-full bg-accent/20 blur-2xl" />
                  <div className="relative flex h-full items-center px-6">
                    <span className="text-3xl font-bold tracking-tight text-fg/90">
                      {p.title.split(" —")[0]}
                    </span>
                  </div>
                  <span className="absolute right-4 top-4 font-mono text-xs text-muted">
                    {p.year}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <p className="text-sm leading-relaxed text-body">{p.blurb}</p>
                  <ul className="mt-4 flex-1 space-y-2">
                    {p.points.map((pt, j) => (
                      <li key={j} className="flex gap-3 text-sm leading-relaxed text-muted">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-3">
                    <a
                      href={hasLink ? p.link : "#"}
                      {...(hasLink && { target: "_blank", rel: "noopener noreferrer" })}
                      className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-xs font-semibold text-fg transition-colors hover:bg-accent/20"
                    >
                      <ExternalIcon className="h-3.5 w-3.5" />
                      Check Site
                    </a>
                    <a
                      href="https://github.com/vyassri"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold text-muted transition-colors hover:border-accent/40 hover:text-fg"
                    >
                      <GitHubIcon className="h-3.5 w-3.5" />
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Shell>
  );
}

// ── Education ───────────────────────────────────────────────────
export function Education() {
  return (
    <Shell>
      <Reveal>
        <SectionHeading eyebrow="// education" title="Education" />
      </Reveal>
      {education.map((e) => (
        <Reveal key={e.school}>
          <div className="card card-hover rounded-2xl p-8">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="text-xl font-semibold text-fg">{e.school}</h3>
                <p className="mt-1 text-muted">{e.degree}</p>
              </div>
              <div className="text-right">
                <p className="font-mono text-sm text-accent-2">{e.period}</p>
                <p className="mt-1 text-sm font-semibold text-fg">{e.detail}</p>
              </div>
            </div>
            <div className="mt-6 border-t border-border pt-6">
              <p className="mb-3 font-mono text-xs uppercase tracking-wide text-muted">
                Relevant coursework
              </p>
              <div className="flex flex-wrap gap-2">
                {e.coursework.map((c) => (
                  <Tag key={c}>{c}</Tag>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </Shell>
  );
}

// ── Skills ──────────────────────────────────────────────────────
export function Skills() {
  return (
    <Shell>
      <Reveal>
        <SectionHeading eyebrow="// skills" title="Toolbox" />
      </Reveal>
      <div className="grid gap-6 md:grid-cols-2">
        {Object.entries(skills).map(([group, items], i) => (
          <Reveal key={group} delay={i * 80}>
            <div className="card rounded-2xl p-6">
              <h3 className="mb-4 font-semibold text-fg">{group}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Shell>
  );
}

// ── Journey timeline ────────────────────────────────────────────
export function Journey() {
  return (
    <Shell>
      <Reveal>
        <SectionHeading
          eyebrow="// journey"
          title="My journey so far"
          sub="A short timeline of milestones from school to research to industry."
        />
      </Reveal>
      <div className="relative ml-3 border-l border-border pl-8">
        {journey.map((j, i) => (
          <Reveal key={j.title} delay={i * 60}>
            <div className="relative pb-10 last:pb-0">
              <span className="absolute -left-[41px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-bg">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              <p className="font-mono text-xs text-accent-2">{j.date}</p>
              <h3 className="mt-1 text-lg font-semibold text-fg">{j.title}</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                {j.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Shell>
  );
}

// ── Personal ────────────────────────────────────────────────────
const interestIcons = ["brain", "rocket", "layers", "server", "brain"];

export function Personal() {
  return (
    <Shell id="personal" className="scroll-mt-16">
      <Reveal>
        <SectionHeading
          eyebrow="// personal"
          title="Outside of work"
          sub="The things I optimize for when I'm not writing code."
        />
      </Reveal>
      <Reveal>
        <div className="card rounded-2xl p-8">
          <p className="max-w-3xl text-lg leading-relaxed text-body">
            {personal.intro}
          </p>
        </div>
      </Reveal>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {personal.interests.map((it, i) => (
          <Reveal key={it.title} delay={i * 70}>
            <div className="card card-hover h-full rounded-2xl p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <RoleIcon name={interestIcons[i % interestIcons.length]} className="h-5 w-5" />
              </div>
              <h3 className="mb-2 font-semibold text-fg">{it.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{it.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Organizations */}
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {organizations.map((o, i) => (
          <Reveal key={o.name} delay={i * 80}>
            <div className="card card-hover rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-fg">{o.name}</h3>
                <span className="font-mono text-xs text-accent-2">{o.role}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">{o.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Shell>
  );
}
