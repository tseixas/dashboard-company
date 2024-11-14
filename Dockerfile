FROM node:18
WORKDIR /home/node/api

COPY api/package*.json ./

COPY --chown=node:node ./api .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:dev"]
