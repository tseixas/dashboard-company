
# FROM node:21.5.0-bullseye-slim 

# WORKDIR /home/node/web

# ENV NODE_ENV=${NODE_ENV}

# USER node:node

# COPY --chown=node:node ./web .
# RUN npm install
# RUN mkdir -p .next
# RUN chown node:node . node_modules .next

# RUN npm run build

# EXPOSE 3001

# CMD ["npm", "run", "dev"]


FROM node:20
WORKDIR /home/node/web

ENV NODE_ENV=${NODE_ENV}

COPY web/package*.json ./

# COPY --chown=node:node ./web .

RUN npm install

RUN npm run build
COPY --from=builder /web/.next ./.next
COPY --from=builder /web/package*.json ./

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
