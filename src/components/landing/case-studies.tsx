import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const cases = [
  {
    eyebrow: "Enterprise fintech",
    title: "EKS platform for regulated production workloads",
    summary:
      "Designed and scaled Kubernetes on AWS for services with strict uptime and security expectations—node lifecycle, add-ons, and operational playbooks the whole org could follow.",
    tags: ["EKS", "AWS", "Terraform"],
  },
  {
    eyebrow: "Secrets & identity",
    title: "Vault and Consul in production",
    summary:
      "Deployed and operated HashiCorp stacks for secrets and service discovery—patterns that balanced developer speed with audit and rotation requirements.",
    tags: ["Vault", "Consul"],
  },
  {
    eyebrow: "Delivery & migration",
    title: "Cloud migration and CI/CD hardening",
    summary:
      "Led large-scale infrastructure moves into AWS and standardized Terraform and Packer workflows so teams could ship with fewer surprises and clearer ownership.",
    tags: ["Terraform", "Packer", "CI/CD"],
  },
];

export function CaseStudies() {
  return (
    <section id="work" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">Career highlights</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Representative outcomes—not a substitute for a full resume conversation.
            </h2>
            <p className="mt-3 text-muted-foreground">
              Roles have included Senior DevOps Engineer at American Express (formerly Kabbage) and Specialist
              Applications Developer at AT&T. Happy to walk through specifics on a call.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="#contact" className="gap-1">
              Discuss your environment
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {cases.map((c) => (
            <Card key={c.title} className="flex flex-col border-border/80 bg-gradient-to-b from-card/80 to-card/40">
              <CardHeader>
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{c.eyebrow}</p>
                <CardTitle className="mt-2 text-xl leading-snug">{c.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{c.summary}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto flex flex-wrap gap-2 pt-2">
                {c.tags.map((t) => (
                  <Badge key={t} variant="outline" className="font-normal text-muted-foreground">
                    {t}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
