#!/bin/sh

# load env vars from file if present
# Otherwise the should already be present
if [[ -f .env.deploy ]]; then
	. .env.deploy
fi

# Run docker compose on host, force build and recreate
sudo DOCKER_HOST=ssh://${SSH_USER}@${SSH_HOST} docker compose -f docker-compose-prod.yml up -d --build --force-recreate
# Post build cleanup
sudo DOCKER_HOST=ssh://${SSH_USER}@${SSH_HOST} docker system prune -f

echo "Finished!"
exit 0