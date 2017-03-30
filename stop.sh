#!/bin/bash bash


docker-compose stop

/etc/init.d/mysql start

/etc/init.d/nginx start

/etc/init.d/php5.6-fpm start

/etc/init.d/memcached start

/etc/init.d/mongodb start

/etc/init.d/redis-server start

/etc/init.d/rabbitmq-server start

