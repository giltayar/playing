FROM node:10

ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./
RUN npm ci --production && \
    npm cache clear --force
COPY . .

CMD ["node", "scripts/run-test-google-pubsub-problem.js", "-e", "foo", "-l", "-c", "1000000", "-w", "3"]
