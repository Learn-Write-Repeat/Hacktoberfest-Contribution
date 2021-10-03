# Load balancer using Docker with NginX image
This is a simple configuration of Dockerfile and NginX to run a load balancer Container

## Usage

How To Use : 
ps. if you on linux, add `sudo` before docker command

1. Install docker in your local machine. refer to [This](https://docs.docker.com/get-docker/) Tutorial and choose according to your local machine operating system
2. Clone this repository using `git clone https://github.com/Learn-Write-Repeat/Hacktoberfest-Contribution.git`
3. cd into `/Hacktoberfest-Contribution/contributions/load_balancer_using_docker_with_NginX_image`
4. Modify the nginx.conf according to your configuration
5. run `docker build -t load-balancer-nginx .` to build the image of this Dockerfile. The image will be named load-balancer-nginx
6. check if the image is ready using `docker images`
7. make a container using the image that previously build using `docker run --name load-balancer-nginx -d -p 80:80 load-balancer-nginx`
8. Your Load Balancer is ready to use

- The `-p` flags in `docker run` is to tell docker to forward the port 80 at the container into port 80 in your host machine
- The `-d` in `docker run` flags is to tell docker to run the container in background