# example4

A simple example with a web server Nginx and a volume on Docker.

## Usage

```
docker container run -d -p 8080:80 -v ./www:/usr/share/nginx/html --name web nginx:latest
docker ps

curl -i localhost:8080

docker stop web
docker rm web
```