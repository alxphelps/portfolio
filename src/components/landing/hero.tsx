import Link from "next/link";
import { ArrowRight, Shield, Target, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pt-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-muted-foreground">{site.name}</p>
          <div className="mb-6 mt-2 flex flex-wrap items-center justify-center gap-2">
            <Badge variant="secondary" className="border-border/80 bg-secondary/80 font-normal text-muted-foreground">
              AWS · EKS · Terraform
            </Badge>
            <Badge variant="outline" className="font-normal text-muted-foreground">
              Vault · Consul · CI/CD
            </Badge>
          </div>
          <h1 className="text-balance bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
            Production AWS and Kubernetes—built to scale, secured, and operated with confidence.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
            {site.title} with 8+ years designing and running cloud platforms: cost-aware AWS, EKS, Terraform and
            Packer, Vault and Consul, Bamboo and GitHub Actions, and observability with Datadog, Prometheus, and
            Grafana. I focus on reliability, clear delivery, and systems your team can own.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Button size="lg" className="gap-2 shadow-lg shadow-primary/20" asChild>
              <Link href="#contact">
                Email {site.name.split(" ")[0]}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#about">About &amp; capabilities</Link>
            </Button>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-4 sm:grid-cols-3">
          {[
            {
              icon: Zap,
              title: "Ship faster, safely",
              body: "CI/CD, environments, and Terraform workflows that keep releases predictable in regulated and high-scale settings.",
            },
            {
              icon: Shield,
              title: "Security in the foundation",
              body: "IAM, VPC design, secrets with Vault and AWS, and patterns that auditors and on-call engineers both understand.",
            },
            {
              icon: Target,
              title: "Cost and clarity",
              body: "Right-sizing, scaling, and observability so spend and risk stay visible—not surprises at month-end.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border/70 bg-card/40 p-5 text-left shadow-sm backdrop-blur"
            >
              <item.icon className="mb-3 h-5 w-5 text-primary" aria-hidden />
              <h2 className="text-sm font-semibold tracking-tight">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
