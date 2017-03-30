# See https://github.com/docker-library/php/blob/4677ca134fe48d20c820a19becb99198824d78e3/7.0/fpm/Dockerfile
FROM php:7.1-fpm

MAINTAINER Maxence POUTORD <maxence.poutord@gmail.com>

RUN apt-get update && apt-get install -y \
    git \
    unzip

#RUN apt-get update && apt-get install -y \
#    imagick \
#    php7.1-interbase \
#    php7.1-intl \
#    php7.1-mbstring \
#    php7.1-pspell \
#    php71-php-xml \
#    php71-php-xml \
#    php71-php-mbstring \
#    php71-php-mcrypt \
#    php71-php-json \
#    php71-php-imap \
#    php71-php-intl \
#    php71-php-bcmath \
#    php71-php-cli \
#    php71-php-fpm \
#    php71-php-gd \
#    php71-php-mysqlnd \
#    php71-php-pdo \
#    php71-php-pear \
#    php71-php-pecl-amqp \
#    php71-php-pecl-apcu \
#    php71-php-pecl-crypto \
#    php71-php-pecl-gmagick \
#    php71-php-pecl-memcached \
#    php71-php-pecl-mongodb \
#    php71-php-pecl-mysql \
#    php71-php-pecl-pdflib \
#    php71-php-pecl-xdebug \
#    php71-php-pecl-zip

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer --version

# Set timezone
RUN rm /etc/localtime
RUN ln -s /usr/share/zoneinfo/Europe/Paris /etc/localtime
RUN "date"

# Type docker-php-ext-install to see available extensions
RUN docker-php-ext-install pdo pdo_mysql


# install xdebug
RUN pecl install xdebug
RUN docker-php-ext-enable xdebug
RUN echo "error_reporting = E_ALL" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini
RUN echo "display_startup_errors = On" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini
RUN echo "display_errors = On" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini
RUN echo "xdebug.remote_enable=1" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini
RUN echo "xdebug.remote_connect_back=1" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini
RUN echo "xdebug.idekey=\"PHPSTORM\"" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini
RUN echo "xdebug.remote_port=9001" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini


RUN echo 'alias sf="php app/console"' >> ~/.bashrc
RUN echo 'alias sf3="php bin/console"' >> ~/.bashrc

WORKDIR /var/www
