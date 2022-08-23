FROM node:15

WORKDIR /app
COPY package.json /app/

RUN npm install 
#RUN npm install mongoose
#RUN npm install redis connect-redis express-session
#ARG NODE_ENV
#RUN if [ "$NODE_ENV" = "development"]; \
#    then npm install; \
#    else npm install --only-production; \
#    fi

##COPY ALL FILES INTO THE IMAGE
COPY . /app/

ENV PORT 5000
EXPOSE $PORT 

CMD ["node", "index.js"]

