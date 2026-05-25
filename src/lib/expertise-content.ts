export const expertiseIntro = {
  title: "TEST Eight years building, operating, and improving production infrastructure.",
  summary:
    "Hands-on ownership of Kubernetes platforms, observability modernization, and full-stack AWS infrastructure for high-impact production systems.",
} as const;

export const expertisePillars = [
  {
    title: "AWS at Scale",
    bullets: [
      "EC2, EKS, S3, RDS, VPC, IAM, Auto Scaling, AMIs",
      "Networking, security groups, and cost-aware design",
      "Linux and Windows workloads",
    ],
  },
  {
    title: "Platform Engineering & CI/CD",
    bullets: [
      "Bamboo and GitHub Actions pipelines",
      "Terraform and Packer for repeatable infrastructure",
      "Artifactory, Chef, and legacy integration patterns",
    ],
  },
  {
    title: "Secrets, Service Discovery, and Observability",
    bullets: [
      "HashiCorp Vault and Consul in production",
      "Datadog, Prometheus, and Grafana for real-time signal",
      "Migration experience (e.g. metrics pipelines to Prometheus)",
    ],
  },
] as const;

/** Combined tools & platforms (deduplicated) */
export const toolsAndPlatforms = [
  "AWS",
  "Amazon EKS",
  "Kubernetes",
  "Docker",
  "Terraform",
  "Packer",
  "Vault",
  "Consul",
  "GitHub Actions",
  "Bamboo",
  "Datadog",
  "Prometheus",
  "Grafana",
  "Python",
  "Bash",
  "PowerShell",
  "Java",
] as const;
