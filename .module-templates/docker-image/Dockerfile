FROM node:10
ARG NPM_FILE

ENV NODE_ENV=production

COPY package*.json ./
RUN echo $NPM_FILE >.npmrc && \
    npm ci --production && \
    npm cache clear --force && rm -f .npmrc
COPY . .

EXPOSE 80
ENV PORT=80

CMD ["node", "scripts/run-templatetemplate.js"]
