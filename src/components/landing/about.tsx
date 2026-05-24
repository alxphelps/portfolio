const capabilities = [
  "AWS at scale — EC2, EKS, S3, RDS, VPC, IAM, and cost-aware design",
  "CI/CD — Bamboo, GitHub Actions, and repeatable release pipelines",
  "Infrastructure as Code — Terraform and Packer workflows teams can own",
  "Managed Kubernetes platform lifecycle, upgrades, and operational troubleshooting in production environments.",
  "Security & secrets — VPCs, IAM, Secrets Manager, Vault, and Consul",
  "Observability — Datadog, Prometheus, and Grafana with signal over noise",
];

const recent = [
  "AWS production workloads: EC2, EKS, S3, RDS, VPC, Auto Scaling",
  "CI/CD from the ground up — build, deploy, repeat",
  "HashiCorp Vault and Consul in production",
  "Containerized services with Docker and Kubernetes",
];

export function About() {
  return (
    <section className="section-pad border-t border-white/5">
      <div id="what-i-do" className="page-shell scroll-mt-24">
        <div className="grid gap-fluid-lg lg:grid-cols-2 lg:gap-fluid-xl">
          <div>
            <h3 className="text-[clamp(1.125rem,1.8vw,1.375rem)] font-semibold text-foreground">What I can do</h3>
            <ul className="mt-[clamp(1rem,3vh,2rem)] space-y-[clamp(0.75rem,2vh,1.25rem)] text-[clamp(0.875rem,1.2vw,1.0625rem)] leading-relaxed text-muted-foreground">
              {capabilities.map((line) => (
                <li key={line} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-violet-500 to-orange-400" />
                  {line}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[clamp(1.125rem,1.8vw,1.375rem)] font-semibold text-foreground">Recent focus</h3>
            <ul className="mt-[clamp(1rem,3vh,2rem)] space-y-[clamp(0.75rem,2vh,1.25rem)] text-[clamp(0.875rem,1.2vw,1.0625rem)] leading-relaxed text-muted-foreground">
              {recent.map((line) => (
                <li key={line} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400/90" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
