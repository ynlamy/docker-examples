# Usage

```
docker build . -t <MyName>/<MyImage>:1.0.0
docker images

docker container run -d -p 8080:80 <MyName>/<MyImage>:1.0.0
docker ps
docker logs <ID>

curl -i localhost:8080

docker stop <ID>
docker rm <ID>
```
