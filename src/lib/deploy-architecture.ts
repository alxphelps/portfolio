/** Deployment story — aligned with ../terraform-infra and .github/workflows/ecr-push.yml */
export const deployArchitecture = {
  terraformProject: "terraform-infra",
  siteHost: "portfolio.alxphelps.com",
  domain: "alxphelps.com",
  awsRegion: "us-east-1",
  ecrRepository: "alxphelps/portfolio",
  githubOrg: "alxphelps",
  githubRepo: "portfolio",
  vpcCidr: "10.0.0.0/16",
  amiNamePattern: "docker-compose-ami-*",
  ssmTargetTag: "Project=portfolio",
  portfolioRepoUrl: "https://github.com/alxphelps/portfolio",
  terraformRepoUrl: "https://github.com/alxphelps/terraform-infra",
} as const;

export const deployFlowSteps = [
  {
    step: "01",
    title: "Push to GitHub",
    detail: "A merge to `main` in `alxphelps/portfolio` starts the deploy workflow.",
    fileLabel: "Portfolio repo",
    fileUrl: "https://github.com/alxphelps/portfolio",
  },
  {
    step: "02",
    title: "Build & push (OIDC)",
    detail:
      "GitHub Actions assumes `portfolio-github-deploy` (OIDC) and pushes the Docker image to ECR `alxphelps/portfolio`",
    fileLabel: "Workflow file",
    fileUrl: "https://github.com/alxphelps/portfolio/blob/main/.github/workflows/build-push-deploy-cicd.yml",
  },
  {
    step: "03",
    title: "SSM deploy",
    detail:
      "The workflow runs `AWS-RunShellScript` against EC2 instances tagged `Project=portfolio`: ECR login, refresh `/portfolio-compose.yml`, `docker compose pull` and `up -d`.",
    fileLabel: "SSM deploy script",
    fileUrl: "https://github.com/alxphelps/portfolio/blob/main/deploy/ssm-deploy.sh",
  },
  {
    step: "04",
    title: "Live traffic",
    detail:
      "Route 53 (`portfolio.alxphelps.com`) → public ALB (ACM TLS) → nginx on the instance (:443) → Next.js container (:3000).",
    fileLabel: "ALB + listener config",
    fileUrl: "https://github.com/alxphelps/terraform-infra/blob/main/alb.tf",
  },
] as const;

export const terraformResources = [
  {
    label: "VPC + public subnets (2 AZs)",
    fileLabel: "vpc.tf",
    fileUrl: "https://github.com/alxphelps/terraform-infra/blob/main/vpc.tf",
  },
  {
    label: "Application Load Balancer (HTTP→HTTPS redirect)",
    fileLabel: "alb.tf",
    fileUrl: "https://github.com/alxphelps/terraform-infra/blob/main/alb.tf",
  },
  {
    label: "ACM certificate + Route 53 alias records",
    fileLabel: "acm.tf + route53.tf",
    fileUrl: "https://github.com/alxphelps/terraform-infra/blob/main/acm.tf",
  },
  {
    label: "Auto Scaling Group + launch template",
    fileLabel: "asg.tf",
    fileUrl: "https://github.com/alxphelps/terraform-infra/blob/main/asg.tf",
  },
  {
    label: "IAM: GitHub OIDC deploy role, app instance profile, Packer role",
    fileLabel: "iam.tf",
    fileUrl: "https://github.com/alxphelps/terraform-infra/blob/main/iam.tf",
  },
  {
    label: "Security groups: ALB ↔ app on HTTPS :443",
    fileLabel: "security_groups.tf",
    fileUrl: "https://github.com/alxphelps/terraform-infra/blob/main/security_groups.tf",
  },
] as const;
