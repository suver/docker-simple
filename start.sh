#!/bin/bash bash

/etc/init.d/mysql stop

/etc/init.d/nginx stop

/etc/init.d/php5.6-fpm stop

/etc/init.d/memcached stop

/etc/init.d/mongodb stop

/etc/init.d/redis-server stop

/etc/init.d/rabbitmq-server stop

docker-compose up
