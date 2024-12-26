1.build a image
docker build -t express_image .



2. build a container
docker run --name <container_name>  <image_name>

docker run -d -p 8000:8000 --name express_container express_image


3.


