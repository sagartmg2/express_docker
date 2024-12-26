
#base node image
FROM node:alpine


#set working directory
WORKDIR /server

#copy package.json to working directory
COPY package*.json ./
# COPY package*.json /server

#install dependencies
RUN npm install

#copy all files to working directory
COPY . .

#expose port
EXPOSE 8000

#start app  
CMD ["npm", "start"]    

# docker build -t node-server .


