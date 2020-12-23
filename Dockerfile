FROM node:latest
USER root

WORKDIR /home/app

COPY . /home/app

#RUN cd /home/app/part_1 && \
#    npm install

#RUN cd /home/app/task_10_testing/part_1 && \
#    ./node_modules/mocha/bin/mocha

#CMD [ "bash -c", "cd /home/app/task_10_testing/part_1 && ./node_modules/mocha/bin/mocha" ]
