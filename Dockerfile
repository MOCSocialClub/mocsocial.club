FROM bitnami/wordpress-nginx:latest AS base

SHELL ["/bin/bash", "-c"]

USER root

RUN mkdir -p /var/lib/apt/lists/partial && \
    apt-get update && \
    apt-get install -y \
    openssh-server;
    
RUN curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar && \
    chmod +x wp-cli.phar && \
    mv wp-cli.phar /usr/local/bin/wp && \
    curl https://raw.githubusercontent.com/wp-cli/wp-cli/v2.11.0/utils/wp-completion.bash -o /etc/bash_completion.d/wp-completion.bash; \
    echo "source /etc/bash_completion.d/wp-completion.bash" >> ~/.bashrc;

RUN apt-get install -y \
    supervisor && \
    mkdir -p /var/log/nginx \
    /var/log/supervisor \
    /var/log/php \
    /var/log/php-fpm \
    /var/log/sshd \
    /var/log/wordpress \
    /run/sshd \
    /bitnami/wordpress \
    /bitnami/wordpress/wp-content \
    /bitnami/wordpress/wp-content/uploads \
    /bitnami/nginx/conf/vhosts


COPY root /
COPY . /opt/bitnami/wordpress
COPY ./bitnami /bitnami

# ENTRYPOINT [ "/usr/bin/supervisord", "-c", "/etc/supervisor/supervisord.conf" ]