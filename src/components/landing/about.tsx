"use client";

import { useCallback, useState } from "react";
import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { site } from "@/lib/site";

const helpWith = [
  "AWS cost optimization — find waste, right-size, improve scaling",
  "CI/CD pipelines — Bamboo, GitHub Actions, safer releases",
  "Infrastructure as Code — Terraform (and Packer) you can trust",
  "EKS setup, upgrades, and troubleshooting",
  "Secure foundations — VPCs, IAM, Secrets Manager, Vault",
  "Production debugging — stabilize what is already running",
];

const recent = [
  "AWS production workloads: EC2, EKS, S3, RDS, VPC, Auto Scaling",
  "CI/CD from the ground up — build, deploy, repeat",
  "HashiCorp Vault and Consul in production",
  "Containerized services with Docker and Kubernetes",
];

export function About() {
  const [showPhoto, setShowPhoto] = useState(true);

  const onImageError = useCallback(() => {
    setShowPhoto(false);
  }, []);

  return (
    <section id="about" className="scroll-mt-24 border-t border-border/60 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">About</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Senior DevOps / infrastructure engineer with hands-on experience in production AWS at scale.
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
          I help teams reduce cloud spend, tighten deployment reliability, and simplify infrastructure—whether you are
          fixing a broken setup or optimizing what already runs. Practical, efficient work over slideware.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[280px_1fr] lg:items-start">
          <div className="flex flex-col items-center gap-4 lg:items-start">
            <div className="relative h-52 w-52 shrink-0 overflow-hidden rounded-2xl border border-border/80 bg-secondary/40 shadow-lg sm:h-60 sm:w-60">
              {showPhoto ? (
                // eslint-disable-next-line @next/next/no-img-element -- intentional for graceful missing-file fallback
                <img
                  src={site.profileImagePath}
                  alt={site.name}
                  className="h-full w-full object-cover"
                  onError={onImageError}
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-primary/25 to-accent/20">
                  <span className="text-4xl font-semibold tracking-tight text-foreground">AP</span>
                  <span className="mt-1 text-xs text-muted-foreground">Add public/headshot.png</span>
                </div>
              )}
            </div>
            <div className="text-center text-sm text-muted-foreground lg:text-left">
              <p className="font-medium text-foreground">{site.name}</p>
              <p>{site.title}</p>
              <p className="mt-2 inline-flex items-center justify-center gap-1 lg:justify-start">
                <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden />
                {site.location}
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
              <Badge variant="secondary">8+ years production</Badge>
              <Badge variant="outline">US time zones</Badge>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="text-base font-semibold">What I can help with</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {helpWith.map((line) => (
                  <li key={line} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>

            <Separator className="bg-border" />

            <div>
              <h3 className="text-base font-semibold">Recent focus</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {recent.map((line) => (
                  <li key={line} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
