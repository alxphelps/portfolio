import { Badge } from "@/components/ui/badge";
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
    title: "Vault and Consul",
    summary:
      "Deployed and operated HashiCorp stacks for secrets and service discovery—patterns that balanced developer speed with audit and rotation requirements.",
    tags: ["Vault", "Consul"],
  },
  {
    eyebrow: "Delivery & migration",
    title: "Cloud migration and CI/CD standardization",
    summary:
      "Led large-scale infrastructure moves into AWS and standardized Terraform and Packer workflows so teams could ship with fewer surprises and clearer ownership.",
    tags: ["Terraform", "Packer", "CI/CD"],
  },
];

export function CaseStudies() {
  return (
    <section id="work" className="section-pad scroll-mt-24">
      <div className="page-shell">
        <div className="max-w-3xl xl:max-w-4xl">
          <p className="text-sm font-medium uppercase tracking-widest text-primary xl:text-base">Experience</p>
          <h2 className="mt-[clamp(0.75rem,2vh,1.5rem)] text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-tight tracking-tight">
            Highlights from production platform work.
          </h2>
          <p className="mt-[clamp(1rem,2vh,1.5rem)] text-[clamp(1rem,1.2vw,1.125rem)] text-muted-foreground">
            Senior DevOps Engineer at American Express (formerly Kabbage) and Specialist Applications Developer at
            AT&T—Kubernetes, AWS, and delivery pipelines at scale.
          </p>
        </div>

        <div className="mt-[clamp(2.5rem,6vh,4.5rem)] grid gap-[clamp(1.25rem,3vw,2rem)] lg:grid-cols-3 lg:gap-[clamp(1.5rem,4vw,2.5rem)]">
          {cases.map((c) => (
            <Card
              key={c.title}
              className="flex flex-col border-white/10 bg-gradient-to-b from-card/90 to-card/30 p-[clamp(0.25rem,1vw,0.5rem)]"
            >
              <CardHeader className="space-y-[clamp(0.5rem,1.5vh,1rem)] p-[clamp(1.25rem,2vw,1.75rem)]">
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{c.eyebrow}</p>
                <CardTitle className="text-[clamp(1.125rem,1.5vw,1.375rem)] leading-snug">{c.title}</CardTitle>
                <CardDescription className="text-[clamp(0.9375rem,1.1vw,1.0625rem)] leading-relaxed">
                  {c.summary}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto flex flex-wrap gap-2 px-[clamp(1.25rem,2vw,1.75rem)] pb-[clamp(1.25rem,2vw,1.75rem)] pt-0">
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
