import { Cloud, DollarSign, GitBranch, LineChart, Lock, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const items = [
  {
    icon: DollarSign,
    title: "AWS cost optimization",
    description:
      "Find waste, right-size EC2 and databases, tune autoscaling, and make spend visible before finance asks.",
  },
  {
    icon: GitBranch,
    title: "CI/CD pipelines",
    description:
      "Bamboo, GitHub Actions, and release patterns that are reviewable, repeatable, and safe for production.",
  },
  {
    icon: Cloud,
    title: "EKS and container platforms",
    description:
      "Cluster lifecycle, upgrades, networking, add-ons, and troubleshooting when workloads misbehave in prod.",
  },
  {
    icon: Lock,
    title: "Secure infrastructure",
    description:
      "VPCs, security groups, IAM, Secrets Manager, and HashiCorp Vault patterns for real compliance pressure.",
  },
  {
    icon: LineChart,
    title: "Observability",
    description:
      "Datadog, Prometheus, and Grafana wired so on-call gets signal—not noise—when things degrade.",
  },
  {
    icon: Wrench,
    title: "Production stabilization",
    description:
      "Debug flaky deploys, brittle Terraform, and mysterious prod-only failures; document what changed and why.",
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Services</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Hands-on help across the AWS and delivery stack.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Advisory, implementation, or pairing with your team—focused on practical outcomes: lower risk, clearer
            ownership, and infrastructure that does not get in the way of shipping.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Card key={item.title} className="group overflow-hidden transition-colors hover:border-primary/40">
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/60 text-primary">
                  <item.icon className="h-5 w-5" aria-hidden />
                </div>
                <CardTitle className="mt-4 text-lg">{item.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">/</span> Terraform &amp; Packer where it fits
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">/</span> Bash, Python, PowerShell automation
                  </li>
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
