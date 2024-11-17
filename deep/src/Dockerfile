FROM denoland/deno
ARG APP_USER=www-data 

COPY . /code/
WORKDIR /code/

## Front
RUN apt-get update && apt-get install -y curl unzip nginx
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
     && apt-get install -y nodejs
RUN curl -fsSL https://deno.land/x/install/install.sh | bash
WORKDIR /code/front-src
RUN npm install
WORKDIR /code
RUN chown -R ${APP_USER}:${APP_USER} /code/front-src
ENV DENO_DIR=/code/front-src
ARG FLAG
ARG random
WORKDIR /flag
RUN echo "#!/bin/bash\n echo ${FLAG}" > "/flag/random" 
## run
WORKDIR /code
RUN chmod +x "./docker-entrypoint.sh"

COPY nginx/nginx.conf /etc/nginx/nginx.conf
RUN echo "daemon off;" >> /etc/nginx/nginx.conf
 
ENTRYPOINT ["/bin/bash","-c","./docker-entrypoint.sh"]

