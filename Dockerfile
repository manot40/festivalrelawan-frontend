FROM node:16-alpine

WORKDIR /usr/app

COPY package.json package-lock.json ./

RUN npm ci

ARG API_URL=https://www.indorelawan.org
ARG STORAGE_URL=https://www.indorelawan.org

ENV NODE_ENV=production
ENV NEXT_PUBLIC_API_URL $API_URL
ENV NEXT_PUBLIC_STORAGE_URL $STORAGE_URL

COPY ./ .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]