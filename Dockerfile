FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 0011
CMD ["node", "index.js"]
