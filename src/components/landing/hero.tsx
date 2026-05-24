"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { site } from "@/lib/site";
import { expertiseIntro, expertisePillars } from "@/lib/expertise-content";

const socialLinks = [
  { href: site.github, label: "GitHub", icon: Github },
  { href: site.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: site.emailHref, label: "Email", icon: Mail },
] as const;

export function Hero() {
  const [showPhoto, setShowPhoto] = useState(true);
  const onImageError = useCallback(() => setShowPhoto(false), []);

  return (
    <section
      id="expertise"
      className="section-pad scroll-mt-24 min-h-[calc(100dvh-4.25rem)] xl:min-h-[calc(100dvh-5.5rem)]"
    >
      <div className="page-shell grid items-start gap-fluid-lg lg:grid-cols-[min(100%,clamp(220px,20vw,280px))_1fr] lg:gap-fluid-xl">
        {/* Left: photo, name, location, social */}
        <aside className="flex w-full max-w-[260px] flex-col space-fluid lg:max-w-none">
          <div className="w-full max-w-[220px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-3 shadow-xl shadow-black/30 sm:max-w-[240px]">
            {showPhoto ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={site.profileImagePath}
                alt={site.name}
                className="mx-auto block h-auto w-full object-contain"
                onError={onImageError}
              />
            ) : (
              <div className="flex aspect-square w-full flex-col items-center justify-center rounded-xl bg-gradient-to-br from-violet-950/80 to-zinc-950 p-8 text-center">
                <span className="text-5xl font-bold text-gradient-brand">AP</span>
                <p className="mt-3 text-sm text-muted-foreground">Add public/headshot.png</p>
              </div>
            )}
          </div>

          <div className="profile-glass-card w-full max-w-[220px] sm:max-w-[240px]">
            <div className="profile-glass-card__inner px-3.5 py-3 sm:px-4 sm:py-3.5">
              <h1 className="text-lg font-semibold leading-tight tracking-tight text-white sm:text-xl">
                {site.name}
              </h1>
              <ul className="mt-2.5 space-y-2">
                {site.employment.map((job) => (
                  <li key={job.company}>
                    <p className="text-[0.8125rem] font-medium leading-snug text-white/90 sm:text-sm">{job.company}</p>
                    <p className="text-xs leading-snug text-white/50 sm:text-[0.8125rem]">{job.dates}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-2.5 flex items-center gap-1.5 text-xs text-white/75 sm:text-sm">
                <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden />
                {site.location}
              </p>
            </div>
          </div>

          <div className="flex gap-[clamp(0.75rem,2vw,1.25rem)]">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex h-[clamp(2.75rem,5vw,3.25rem)] w-[clamp(2.75rem,5vw,3.25rem)] items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-muted-foreground shadow-lg shadow-black/20 transition-all hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-foreground"
                aria-label={label}
              >
                <Icon className="h-5 w-5 xl:h-[1.35rem] xl:w-[1.35rem]" />
              </Link>
            ))}
          </div>
        </aside>

        {/* Right: Expertise */}
        <div className="flex flex-col lg:pt-[clamp(0.5rem,2vh,2rem)]">
          <p className="text-sm font-medium uppercase tracking-widest text-violet-400 xl:text-base">Expertise</p>
          <h2 className="mt-[clamp(0.75rem,2vh,1.5rem)] max-w-3xl text-[clamp(1.5rem,3.5vw,2.75rem)] font-semibold leading-tight tracking-tight xl:max-w-4xl">
            {expertiseIntro.title}
          </h2>
          <p className="mt-[clamp(1rem,2.5vh,1.75rem)] max-w-3xl text-[clamp(1rem,1.5vw,1.25rem)] leading-relaxed text-muted-foreground xl:max-w-4xl">
            {expertiseIntro.summary}
          </p>

          <div className="mt-[clamp(2rem,5vh,3.5rem)] space-y-[clamp(1.75rem,4vh,3rem)]">
            {expertisePillars.map((p) => (
              <div key={p.title}>
                <h3 className="text-[clamp(1rem,1.4vw,1.125rem)] font-semibold text-foreground">{p.title}</h3>
                <ul className="mt-[clamp(0.75rem,2vh,1.25rem)] space-y-[clamp(0.5rem,1.5vh,0.875rem)] text-[clamp(0.875rem,1.2vw,1.0625rem)] text-muted-foreground">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-[clamp(2rem,5vh,3.5rem)] flex flex-wrap gap-3">
            <Badge variant="secondary" className="border-white/10 bg-white/[0.06] px-3 py-1 text-sm">
              8+ years production
            </Badge>
            <Badge variant="outline" className="border-white/15 px-3 py-1 text-sm">
              US time zones
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
