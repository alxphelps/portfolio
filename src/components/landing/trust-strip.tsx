const labels = [
  "Amazon EKS",
  "Terraform",
  "Packer",
  "Vault",
  "Consul",
  "GitHub Actions",
  "Bamboo",
  "Datadog",
  "Docker",
  "Prometheus",
  "Grafana",
];

export function TrustStrip() {
  return (
    <section className="border-y border-border/60 bg-secondary/20 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Tools &amp; platforms
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {labels.map((label) => (
            <span
              key={label}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
