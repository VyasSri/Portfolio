import { profile } from "@/lib/data";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  ArrowIcon,
} from "./Icons";
import Reveal from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="ring-grad relative overflow-hidden rounded-3xl bg-card p-10 text-center sm:p-16">
            <div className="pointer-events-none absolute inset-0 grid-bg grid-mask opacity-50" />
            <div className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/20 blur-[110px]" />
            <div className="relative">
              <p className="font-mono text-sm text-accent-2">// contact</p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight text-fg sm:text-5xl">
                Let&apos;s talk
              </h2>
              <p className="mx-auto mt-4 max-w-md leading-relaxed text-muted">
                Open to new-grad and internship opportunities in ML and backend
                engineering. Reach out for a virtual coffee chat or just to say hi.
              </p>

              <a
                href={profile.socials.email}
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-transform hover:scale-[1.03]"
              >
                <MailIcon className="h-4 w-4" />
                {profile.email}
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted">
                <PhoneIcon className="h-4 w-4 text-accent" />
                {profile.phone}
              </div>

              <div className="mt-8 flex items-center justify-center gap-3">
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
          </div>
        </Reveal>
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

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &amp;
          Tailwind.
        </p>
        <p className="font-mono text-xs">Designed in Austin, TX ✦</p>
      </div>
    </footer>
  );
}
