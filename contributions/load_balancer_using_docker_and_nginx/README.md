# Load balancer using Docker with NginX image
This is a simple configuration of Dockerfile and NginX to run a load balancer

## Usage

How To Use : 
ps. if you on linux, add `sudo` before docker command

1. cd into this directory
2. run `docker build -t load-balancer-nginx .`
3. check if the image is ready using `docker images`
4. make a container using the image that previously build using `docker run --name load-balancer-nginx -d -p 80:80 load-balancer-nginx`

- The `-p` flags is to tell docker to forward the port 80 at the container into port 80 in your host machine
- The `-d` flags is to tell docker to run the container in background