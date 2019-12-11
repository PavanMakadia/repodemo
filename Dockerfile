FROM node:10.15.1

# Create Working dir and set it.
RUN mkdir -p /usr/src/node-mongo/logs
WORKDIR /usr/src/node-mongo

# Copy pakage*.json files to working dir
COPY package*.json /usr/src/node-mongo/

# Insall api dependencies
RUN npm install

# Copy source code to working dir 
COPY . /usr/src/node-mongo




# Expose ports
EXPOSE 3000 

# Run Command
CMD ["node", "server.js"]