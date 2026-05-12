import { Badge } from "@/components/ui/badge";

const steps = [
  {
    phase: "01 — Discovery",
    title: "Map reality, not slideware",
    body: "Architecture interviews, read-only access, and a candid assessment of risk, debt, and quick wins.",
  },
  {
    phase: "02 — Design",
    title: "Decision records your team can defend",
    body: "Options with trade-offs, explicit non-goals, and diagrams that survive the first production incident.",
  },
  {
    phase: "03 — Build",
    title: "Pair-heavy implementation",
    body: "Terraform, pipelines, and cluster changes land through the same review bar as your internal work.",
  },
  {
    phase: "04 — Handoff",
    title: "Make yourself optional",
    body: "Runbooks, dashboards, and enablement so the system keeps evolving without a permanent dependency.",
  },
];

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 border-t border-border/60 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">How engagements run</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            A cadence that respects your calendar and your incident budget.
          </h2>
        </div>

        <ol className="mt-12 space-y-8 border-l border-border/80 pl-8">
          {steps.map((s) => (
            <li key={s.phase} className="relative">
              <span className="absolute -left-[39px] top-1 flex h-5 w-5 items-center justify-center rounded-full border border-primary/40 bg-background text-[10px] font-semibold text-primary">
                •
              </span>
              <Badge variant="secondary" className="font-mono text-[11px] uppercase tracking-wider">
                {s.phase}
              </Badge>
              <h3 className="mt-2 text-lg font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
