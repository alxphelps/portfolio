#!/bin/bash
# Runs on EC2 via SSM Run Command. Placeholders replaced by the workflow before send.
set -euo pipefail

IMAGE_URI="__IMAGE_URI__"
AWS_REGION="__AWS_REGION__"
COMPOSE_FILE="/portfolio-compose.yml"
COMPOSE_PROJECT="portfolio"

REGISTRY="${IMAGE_URI%%/*}"

echo "Logging in to ECR (${REGISTRY})..."
aws ecr get-login-password --region "${AWS_REGION}" \
  | docker login --username AWS --password-stdin "${REGISTRY}"

echo "Writing ${COMPOSE_FILE}..."
cat > "${COMPOSE_FILE}" <<EOF
services:
  portfolio:
    image: ${IMAGE_URI}
    container_name: portfolio
    ports:
      - "3000:3000"
    restart: unless-stopped
EOF

echo "Pulling and starting containers..."
docker compose -p "${COMPOSE_PROJECT}" -f "${COMPOSE_FILE}" pull
docker compose -p "${COMPOSE_PROJECT}" -f "${COMPOSE_FILE}" up -d --remove-orphans

echo "Deploy complete: ${IMAGE_URI}"
docker compose -p "${COMPOSE_PROJECT}" -f "${COMPOSE_FILE}" ps
