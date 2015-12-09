FROM ashdev/docker-nodejs:v4.2.2
MAINTAINER AshDev <ashdevfr@gmail.com>

ENV workdir_path /home/workspace
WORKDIR ${workdir_path}

RUN npm install -g gulp bower

ADD .bowerrc ${workdir_path}
ADD package.json ${workdir_path}
ADD bower.json ${workdir_path}
ADD Gulpfile.js ${workdir_path}
ADD app ${workdir_path}/app

RUN git config --global url."https://".insteadOf git://

RUN npm install

RUN bower install --config.interactive=false --allow-root

EXPOSE 3000

VOLUME ${workdir_path}

CMD ["npm", "start"]
