import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function ContactCta() {
  return (
    <section id="contact" className="section-pad scroll-mt-24 pb-[clamp(4rem,10vh,8rem)] pt-[clamp(1rem,3vh,2rem)]">
      <div className="page-shell">
        <div className="rounded-2xl bg-gradient-to-br from-violet-600/55 via-fuchsia-600/35 to-orange-500/45 p-px shadow-2xl shadow-violet-950/40">
          <div className="rounded-2xl border border-white/5 bg-background/95 px-[clamp(1.5rem,4vw,3rem)] py-[clamp(2rem,5vh,3.5rem)] backdrop-blur-xl">
            <div className="flex flex-col gap-[clamp(1.5rem,4vh,2.5rem)] lg:flex-row lg:items-start lg:justify-between lg:gap-fluid-lg">
              <div className="max-w-2xl xl:max-w-3xl">
                <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold tracking-tight">Get in touch</h2>
                <p className="mt-[clamp(0.75rem,2vh,1.25rem)] text-[clamp(1rem,1.2vw,1.125rem)] text-muted-foreground">
                  Open to discussions around Platform Engineering, DevOps, AWS, and infrastructure automation. Usually respond within one business day.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-[clamp(0.75rem,2vh,1rem)] lg:items-end">
                <Button variant="gradient" size="lg" className="gap-2 rounded-full px-8" asChild>
                  <Link href={site.emailHref}>
                    <Mail className="h-4 w-4" />
                    {site.email}
                  </Link>
                </Button>
              </div>
            </div>
            <div className="mt-[clamp(2rem,5vh,3rem)] flex flex-col gap-3 border-t border-white/10 pt-[clamp(1.5rem,4vh,2.5rem)] text-[clamp(0.875rem,1.1vw,1rem)] text-muted-foreground sm:flex-row sm:flex-wrap sm:items-center sm:gap-[clamp(1rem,3vw,2rem)]">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 shrink-0" aria-hidden />
                {site.location}
              </span>
              <span className="hidden sm:inline" aria-hidden>
                ·
              </span>
              <Link href={site.linkedin} className="hover:text-foreground" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </Link>
              <span className="hidden sm:inline" aria-hidden>
                ·
              </span>
              <Link href={site.github} className="hover:text-foreground" target="_blank" rel="noopener noreferrer">
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
