FROM bitnami/wordpress-nginx:latest AS base

SHELL ["/bin/bash", "-c"]

RUN mkdir -p /var/lib/apt/lists/partial && \
    apt-get update && \
    apt-get install -y \
    openssh-server;
    
RUN curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar && \
    chmod +x wp-cli.phar && \
    mv wp-cli.phar /usr/local/bin/wp && \
    curl https://raw.githubusercontent.com/wp-cli/wp-cli/v2.11.0/utils/wp-completion.bash -o /etc/bash_completion.d/wp-completion.bash; \
    echo "source /etc/bash_completion.d/wp-completion.bash" >> ~/.bashrc;

COPY root /

ENTRYPOINT [ "bash", "/usr/local/sbin/wordpress-with-sshd-entrypoint" ]