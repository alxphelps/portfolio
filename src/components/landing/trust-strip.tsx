import { toolsAndPlatforms } from "@/lib/expertise-content";

export function TrustStrip() {
  return (
    <section className="section-pad-sm border-y border-white/5 bg-white/[0.02]">
      <div className="page-shell">
        <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground xl:text-sm">
          Tools &amp; platforms
        </p>
        <div className="mt-[clamp(1.5rem,4vh,2.5rem)] flex flex-wrap items-center justify-center gap-x-[clamp(1.5rem,4vw,3.5rem)] gap-y-[clamp(1rem,2vh,1.75rem)]">
          {toolsAndPlatforms.map((label) => (
            <span
              key={label}
              className="text-[clamp(0.875rem,1.2vw,1.0625rem)] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
