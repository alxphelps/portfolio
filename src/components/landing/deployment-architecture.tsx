import type { ComponentType, ReactNode } from "react";
import {
  ArrowRight,
  Box,
  Cloud,
  Container,
  ExternalLink,
  Github,
  Globe,
  Lock,
  Server,
  Workflow,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { deployArchitecture, deployFlowSteps, terraformResources } from "@/lib/deploy-architecture";

function FlowNode({
  icon: Icon,
  label,
  sub,
  accent = "violet",
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
  sub?: string;
  accent?: "violet" | "orange" | "fuchsia";
}) {
  const ring =
    accent === "orange"
      ? "from-orange-500/30 to-violet-500/10"
      : accent === "fuchsia"
        ? "from-fuchsia-500/30 to-violet-500/10"
        : "from-violet-500/35 to-fuchsia-500/10";

  return (
    <div
      className={`flex min-w-[9.5rem] flex-col items-center rounded-2xl border border-white/10 bg-gradient-to-b ${ring} p-4 text-center shadow-lg shadow-black/25 backdrop-blur-sm`}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-background/80">
        <Icon className="h-5 w-5 text-violet-300" aria-hidden />
      </div>
      <p className="mt-3 text-sm font-semibold text-foreground">{label}</p>
      {sub ? <p className="mt-1 text-xs leading-snug text-muted-foreground">{sub}</p> : null}
    </div>
  );
}

function FlowArrow({ className }: { className?: string }) {
  return (
    <div className={`flex shrink-0 items-center justify-center text-violet-400/70 ${className ?? ""}`} aria-hidden>
      <ArrowRight className="h-5 w-5" />
    </div>
  );
}

function DiagramRow({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-6">
      <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">{title}</p>
      <div className="flex flex-col items-center gap-4 lg:flex-row lg:flex-wrap lg:justify-center lg:gap-3">
        {children}
      </div>
    </div>
  );
}

function FileLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-xs text-violet-300 underline-offset-4 hover:text-violet-200 hover:underline"
    >
      {label}
      <ExternalLink className="h-3 w-3" aria-hidden />
    </a>
  );
}

export function DeploymentArchitecture() {
  const { terraformProject, siteHost, awsRegion, ecrRepository, vpcCidr, amiNamePattern, ssmTargetTag } =
    deployArchitecture;

  return (
    <section id="architecture" className="section-pad scroll-mt-24 border-t border-white/5">
      <div className="page-shell">
        <p className="text-sm font-medium uppercase tracking-widest text-violet-400">Platform</p>
        <h2 className="mt-3 max-w-3xl text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-tight tracking-tight">
          How this site is deployed on AWS
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <a
            href={deployArchitecture.portfolioRepoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-foreground hover:border-violet-500/30"
          >
            <Github className="h-3.5 w-3.5" aria-hidden />
            portfolio repo
          </a>
          <a
            href={deployArchitecture.terraformRepoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-foreground hover:border-violet-500/30"
          >
            <Github className="h-3.5 w-3.5" aria-hidden />
            terraform-infra repo
          </a>
        </div>

        <div className="mt-10 space-y-5">
          <DiagramRow title="CI/CD pipeline">
            <FlowNode icon={Github} label="GitHub" sub="" />
            <FlowArrow className="hidden lg:flex" />
            <FlowNode icon={Workflow} label="GitHub Actions" sub="" accent="fuchsia" />
            <FlowArrow className="hidden lg:flex" />
            <FlowNode icon={Box} label="Amazon ECR" sub="" accent="orange" />
            <FlowArrow className="hidden lg:flex" />
            <FlowNode icon={Server} label="SSM Run Command" sub="" />
            <FlowArrow className="hidden lg:flex" />
            <FlowNode icon={Container} label="Docker Compose" sub="" />
          </DiagramRow>

          <DiagramRow title="Infrastructure">
            <FlowNode icon={Globe} label="Route 53" sub="" />
            <FlowArrow className="hidden lg:flex" />
            <FlowNode icon={Lock} label="ALB + ACM" sub="" accent="fuchsia" />
            <FlowArrow className="hidden lg:flex" />
            <FlowNode icon={Server} label="EC2 (ASG)" sub="" />
            <FlowArrow className="hidden lg:flex" />
            <FlowNode icon={Cloud} label="nginx → app" sub="" accent="orange" />
          </DiagramRow>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div>
            <h3 className="text-base font-semibold text-foreground">Deploy steps</h3>
            <ol className="mt-4 space-y-4">
              {deployFlowSteps.map((s) => (
                <li key={s.step} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-violet-500/30 bg-violet-500/10 text-xs font-semibold text-violet-300">
                    {s.step}
                  </span>
                  <div>
                    <p className="font-medium text-foreground">{s.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
                    <div className="mt-1.5">
                      <FileLink href={s.fileUrl} label={s.fileLabel} />
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <h3 className="text-base font-semibold text-foreground">
              Provisioned in {" "}
              <a
                href={deployArchitecture.terraformRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-300 hover:text-violet-200 underline underline-offset-4"
              >
                terraform-infra
              </a>
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {terraformResources.map((resource) => (
                <li key={resource.label} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400/90" />
                  <div>
                    <p>{resource.label}</p>
                    <FileLink href={resource.fileUrl} label={resource.fileLabel} />
                  </div>
                </li>
              ))}
            </ul>
            
          </div>
        </div>
      </div>
    </section>
  );
}
