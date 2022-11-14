FROM node:18.12.1-bullseye-slim
RUN apt-get update && apt-get install -y --no-install-recommends dumb-init

ENV NODE_ENV production

WORKDIR /app

COPY --chown=node:node src /app/src
COPY --chown=node:node app.js package.json package-lock.json ./
RUN npm ci --only=production

USER node

EXPOSE 3000

ENV PORT 3000

CMD ["dumb-init", "node", "app.js"]