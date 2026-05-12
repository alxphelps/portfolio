import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const pillars = [
  {
    title: "AWS at production scale",
    bullets: [
      "EC2, EKS, S3, RDS, VPC, IAM, Auto Scaling, AMIs",
      "Networking, security groups, and cost-aware design",
      "Linux and Windows workloads where needed",
    ],
  },
  {
    title: "Platform engineering & CI/CD",
    bullets: [
      "Bamboo and GitHub Actions pipelines from scratch",
      "Terraform and Packer for repeatable infrastructure",
      "Artifactory, Chef, and legacy integration patterns",
    ],
  },
  {
    title: "Secrets, service discovery, and observability",
    bullets: [
      "HashiCorp Vault and Consul in production",
      "Datadog, Prometheus, and Grafana for real-time signal",
      "Migration experience (e.g. metrics pipelines to Prometheus)",
    ],
  },
];

const stack = [
  "AWS",
  "EKS",
  "Terraform",
  "Packer",
  "Vault",
  "Consul",
  "Docker",
  "Kubernetes",
  "Bamboo",
  "GitHub Actions",
  "Datadog",
  "Prometheus",
  "Grafana",
  "Python",
  "Bash",
  "PowerShell",
  "Java",
];

export function Expertise() {
  return (
    <section id="expertise" className="scroll-mt-24 border-t border-border/60 bg-secondary/10 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Expertise</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Eight years operating and evolving serious production platforms.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From AT&T through American Express (formerly Kabbage): Kubernetes leadership, metrics modernization,
            and full-stack AWS responsibility for workloads that cannot afford ambiguity.
          </p>
          <div className="mt-10 space-y-8">
            {pillars.map((p) => (
              <div key={p.title}>
                <h3 className="text-base font-semibold">{p.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-2xl border border-border/80 bg-card/50 p-6 shadow-sm backdrop-blur-md lg:sticky lg:top-24">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Tech stack</h3>
          <Separator className="my-4 bg-border" />
          <div className="flex flex-wrap gap-2">
            {stack.map((s) => (
              <Badge key={s} variant="secondary" className="font-normal">
                {s}
              </Badge>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Comfortable spanning application and infrastructure layers—REST APIs, Java services, and the automation
            that keeps them deployable.
          </p>
        </aside>
      </div>
    </section>
  );
}
