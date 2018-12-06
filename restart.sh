#!/bin/bash
#start nginx
nginx
# start mongodb
mongod --dbpath=/mongodbData/db --logpath=/mongodbData/logs/mongodb.log --fork
# start huxinmin
pm2 start app.js
