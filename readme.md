# Deploy

docker build . -t xameeramir/cra-docker
docker run -p 8080:80 xameeramir/cra-docker
