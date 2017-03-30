FROM php:5.6-fpm

# Install modules
RUN apt-get update && apt-get install -y unzip\
        libfreetype6-dev \
        libjpeg-dev \
        imagemagick \
        php5-imagick \
        php5-gd \
        libjpeg62-turbo-dev \
        libpng-dev \
        libpng12-dev \
        git \
	    wget \
        zlib1g-dev \
        g++ \
        libc-client-dev \
        # for curl extension
        curl \
        libcurl3 \
        libcurl3-dev \
        php5-curl \
        # for intl extension
        libicu-dev \
        # for mcrypt extension
        libmcrypt-dev \
        # for mongodb
        libssl-dev \
        # for rabbit mq
        librabbitmq-dev \
        # for zero mq
        libsodium-dev \
        # for memcached
        libmemcached-dev \
        php5-memcached \
        # for postgres
        libpq-dev \
        # for soap
        libxml2 \
        libxml2-dev \
        libkrb5-dev \
        #&& pecl install mongodb \
        # prooph mongo db adapter uses deprecated ext currently
        #&& pecl install mongo \
        && pecl install amqp \
#        && pecl install memcached \
        && pecl install redis-2.2.8 \
        && pecl install memcache \
        && pecl install xdebug \
	    && pecl install imagick \
        && rm -r /var/lib/apt/lists/* \
        && docker-php-ext-configure bcmath --enable-bcmath \
        && docker-php-ext-configure intl --enable-intl \
        && docker-php-ext-configure pcntl --enable-pcntl \
        && docker-php-ext-configure pdo_mysql --with-pdo-mysql \
#        && docker-php-ext-configure pdo_pgsql --with-pgsql \
        && docker-php-ext-configure mbstring --enable-mbstring \
        && docker-php-ext-configure soap --enable-soap \
        && docker-php-ext-configure gd --with-gd --with-jpeg-dir --enable-gd-native-ttf --with-freetype-dir \
        && docker-php-ext-install \
            bcmath \
            intl \
            mcrypt \
            pcntl \
            pdo_mysql \
            pdo_pgsql \
#            mbstring \
            soap \
            mysqli \
            gd \
            zip \
#        && docker-php-ext-enable \
#            memcache \
#            xdebug \

        && apt-get install -y libssl-dev \
        && pecl install mongo \
        && pecl install mongodb \
#        && docker-php-ext-enable \
#            mongodb \
#            mongo \

        && apt-get install -y libc-client-dev libkrb5-dev \
        && docker-php-ext-configure imap --with-kerberos --with-imap-ssl  \
        && docker-php-ext-install -j$(nproc) imap \

        && docker-php-ext-configure opcache --enable-opcache \
        && docker-php-ext-install opcache
        # install zeromq
#        && curl -L http://download.zeromq.org/zeromq-${ZEROMQ_VERSION}.tar.gz | tar zx \
#        && cd zeromq-${ZEROMQ_VERSION} \
#        && ./configure \
#        && make \
#        && make install \
#        && ldconfig \
#        && pecl install zmq-1.1.3 \
#        && rm -rf /var/www \
#        && mkdir -p /var/www \
#        && pkg-config

RUN apt-get update && apt-get install -y libmagickwand-dev --no-install-recommends && rm -rf /var/lib/apt/lists/*
RUN pecl install imagick-beta

# Possible values for ext-name:
# bcmath bz2 calendar ctype curl dba dom enchant exif fileinfo filter ftp gd gettext gmp hash iconv imap interbase intl
# json ldap mbstring mcrypt mssql mysql mysqli oci8 odbc opcache pcntl pdo pdo_dblib pdo_firebird pdo_mysql pdo_oci
# pdo_odbc pdo_pgsql pdo_sqlite pgsql phar posix pspell readline recode reflection session shmop simplexml snmp soap
# sockets spl standard sybase_ct sysvmsg sysvsem sysvshm tidy tokenizer wddx xml xmlreader xmlrpc xmlwriter xsl zip

# Copy configuration
COPY ./config/xdebug.ini /usr/local/etc/php/conf.d/
COPY ./config/memcache.ini /usr/local/etc/php/conf.d/
COPY ./config/php.ini /usr/local/etc/php/
COPY ./config/amqp.ini /usr/local/etc/php/conf.d/
COPY ./config/mongo.ini /usr/local/etc/php/conf.d/
COPY ./config/mongodb.ini /usr/local/etc/php/conf.d/
COPY ./config/fpm/php-fpm.conf /usr/local/etc/
COPY ./config/fpm/pool.d /usr/local/etc/pool.d
COPY ./config/redis.ini /usr/local/etc/php/conf.d/
COPY ./config/memcached.ini /usr/local/etc/php/conf.d/
COPY ./config/xdebug.ini /usr/local/etc/php/conf.d/
#COPY ./config/gd.ini /usr/local/etc/php/conf.d/
#COPY ./config/imagick.ini /usr/local/etc/php/conf.d/

#COPY ./config/opcache.ini /usr/local/etc/php/conf.d/
#COPY ./config/zmq.ini /usr/local/etc/php/conf.d/
COPY ./config/php.ini /usr/local/etc/php/php.ini

# Install SASS
#RUN apt-get install -y ruby-full rubygems-integration
#RUN gem install sass

EXPOSE 9000
EXPOSE 18999

RUN curl -sS https://getcomposer.org/installer | php
RUN mv composer.phar /usr/local/bin/composer

RUN composer global require "fxp/composer-asset-plugin:~1.1"

WORKDIR /var/www

env PATH "$PATH:/var/www/vendor/codeception/codeception"

CMD ["php-fpm"]

