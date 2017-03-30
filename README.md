Install Docker
--------------

Docer install [https://docs.docker.com/engine/installation/](https://docs.docker.com/engine/installation/)

or 

`wget -qO- https://get.docker.com/ | sh`

`sudo usermod -aG docker $(whoami)`

Onstall compose [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)

or

Install Docker Compose with command 

`curl -L "https://github.com/docker/compose/releases/download/1.8.1/docker-compose-$(uname -s)-$(uname -m)" > docker-compose`


Change permission on execute

`sudo chmod +x docker-compose`

Move compose on local bin

`sudo mv ./docker-compose /usr/local/bin/docker-compose`


MySQL apply
-----------

`sudo docker ps`

``` bash
suver@Inspiron:~$ sudo docker ps
CONTAINER ID        IMAGE                   COMMAND                  CREATED             STATUS              PORTS                                                                     NAMES
4ab2faf8e1ea        willdurand/elk          "/usr/bin/supervisord"   57 seconds ago      Up 55 seconds       0.0.0.0:81->80/tcp                                                        simple_elasticsearch
ef5b339028cb        nginx                   "nginx -g 'daemon off"   57 seconds ago      Up 56 seconds       0.0.0.0:80->80/tcp, 0.0.0.0:443->443/tcp                                  simple_nginx
24ad6f312c01        simple-php56            "php-fpm"                58 seconds ago      Up 57 seconds       9000/tcp, 18999/tcp                                                       simple_php
51c2a2c58389        phpmyadmin/phpmyadmin   "/run.sh phpmyadmin"     58 seconds ago      Up 57 seconds       80/tcp                                                                    simple_phpmyadmin
6656f59d97a5        mysql                   "docker-entrypoint.sh"   59 seconds ago      Up 58 seconds       0.0.0.0:3306->3306/tcp                                                    simple_mysql
0f62e50fabf2        memcache                "/usr/bin/memcached -"   8 minutes ago       Up About a minute   0.0.0.0:11211->11211/tcp                                                  simple_memcache
e39b1a43da21        rabbitmq:management     "docker-entrypoint.sh"   25 minutes ago      Up About a minute   4369/tcp, 5671-5672/tcp, 15671/tcp, 25672/tcp, 0.0.0.0:15672->15672/tcp   simple_rabbitmq

```


`sudo docker exec -it simple_mysql_1 mysql -uroot -proot -e "create database simpl"`

```bash

suver@Inspiron:~$ sudo docker exec -it simple_mysql mysql -u root -proot -e "create database simple_farpse"
mysql: [Warning] Using a password on the command line interface can be insecure.

```


`sudo docker exec -it dockersimplefarpse_php-fpm_1 ./yii migrate`





CONNECT TO CONTAINER
--------------------

run command if you wont connect to the container `sudo docker exec -t -i <CONTAINER_ID OR CONTAINER_NAME>  /bin/bash`. 
Whera CONTAINER_ID OR CONTAINER_NAME it NAME or CONTAINER ID from result command `sudo docker ps`



INSTIALL SCRIPT AND START APPLICATION
-------------------------------------

For composer components install execute command `sudo docker exec -it dockersimplefarpse_project_1 composer install`.
 
Next step you need apply migaritions. Run commands `sudo docker exec -it dockersimplefarpse_project_1 ./yii migrate`


USE SERVISES
------------

* [https://travis-ci.org/](https://travis-ci.org/)

* [Local Kibana](http://localhost:81/)

* [Local PhpMyAdmin](http://phpmyadmin.dev/)
