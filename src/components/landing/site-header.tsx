"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

const nav = [
  { href: "#expertise", label: "Expertise" },
  { href: "#what-i-do", label: "What I can do" },
  { href: "#work", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl">
      <div className="page-shell relative flex h-[clamp(4.25rem,8vh,5.5rem)] items-center">
        <Link href="/" className="z-20 flex shrink-0 items-center gap-2.5">
          <span className="relative flex h-9 w-9 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/[0.04]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={site.headerImagePath}
              alt={site.name}
              className="h-full w-full object-cover object-top"
            />
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-semibold tracking-tight text-foreground">{site.shortName}</span>
            <span className="text-[11px] text-muted-foreground">{site.title}</span>
          </span>
        </Link>

        <nav
          className="absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 rounded-full p-[1px] md:flex"
          style={{
            background: "linear-gradient(120deg, hsl(263 70% 50% / 0.55), hsl(280 70% 50% / 0.35), hsl(25 95% 50% / 0.45))",
          }}
          aria-label="Primary"
        >
          <div className="flex items-center gap-0.5 rounded-full bg-background/90 px-1.5 py-1.5 backdrop-blur-md">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-2 py-2 text-[11px] text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground sm:px-2.5 sm:text-xs lg:px-3.5 lg:text-sm"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        <button
          type="button"
          className="ml-auto inline-flex items-center justify-center rounded-lg p-2 text-muted-foreground md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "border-t border-white/5 bg-background/95 px-4 py-4 backdrop-blur-xl md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <div className="flex flex-col gap-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
