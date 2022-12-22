# example2

A simple example with Node.js and Redis on Docker.

## Usage

```
docker container run -d --name redis redis:latest
docker ps

docker build . -t <MyName>/<MyImage>:1.0.0
docker images

docker network create MyNetwork
docker network connect MyNetwork redis
docker inspect MyNetwork

docker container run -d -p 8080:80 --network MyNetwork <MyName>/<MyImage:1.0.0
docker ps
docker logs <ID>

curl -i localhost:8080
curl -i localhost:8080

docker stop <ID>
docker stop redis

docker rm <ID>
docker rm redis
```