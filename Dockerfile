FROM node:18.13-alpine
ARG NPM_TOKEN
ARG BASE_URL
ARG BEGA_ID_ENDPOINT_BASE
ARG CONNECT_IOT_API_BASE
ARG NEXTAUTH_JWT_SECRET

RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

COPY . .
COPY netlify/.npmrc .npmrc

RUN npm i --loglevel verbose -g pnpm
RUN pnpm install --loglevel verbose
RUN pnpm build

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

EXPOSE 3000

CMD ["pnpm", "start"]
