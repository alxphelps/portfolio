export const expertiseIntro = {
  title: "Eight years designing, operating, and improving production infrastructure.",
  summary:
    "Hands-on experience with Kubernetes platforms, observability modernization, and Infrastructure as Code powering reliable, scalable production environments.",
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
  "Amazon EKS, EC2, S3, RDS, VPC, IAM, Auto Scaling, AMIs",
  "Kubernetes",
  "Docker",
  "Terraform",
  "Packer",
  "Vault",
  "Consul",
  "GitHub Actions",
  "Bamboo",
  "Artifactory",
  "Chef",
  "Linux",
  "Windows",
  "Datadog",
  "Prometheus",
  "Grafana",
  "Python",
  "Bash",
  "PowerShell",
  "Java",
] as const;
