FROM ubuntu:14.04


# Install packages
RUN DEBIAN_FRONTEND=noninteractive apt-get update
RUN DEBIAN_FRONTEND=noninteractive apt-get -y install memcached

# memcached public variable 

EXPOSE 11211

CMD ["/usr/bin/memcached", "-u", "memcache", "-v"]
