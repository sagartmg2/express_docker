1.build a image
docker build -t express_image .



2. build a container
docker run --name <container_name>  <image_name>

docker run -d -p 8000:8000 --name express_container express_image


3. volumes setup.
    docker run -d -p 8000:8000 -v $(pwd):/server --name express_container express_image

    bind voulume except node moduels


    docker run -d -p 8000:8000 -v $(pwd):/server -v /server/node_modules --name express_container express_image

    





> docker compose up : if there are old images and if Dockerfile has not been changed, then it uses caching and uses old 

in that case,

docker compose build --no-cache
and then
docker compose up