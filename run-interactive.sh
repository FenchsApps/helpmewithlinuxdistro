#!/bin/bash

CONTAINER_NAME="helpmewithlinuxdistro-interactive"
IMAGE_NAME="helpmewithlinuxdistro"

podman build -t ${IMAGE_NAME} .

echo "Help Me With Linux Distro"

if podman ps -a --format "{{.Names}}" | grep -q "^${CONTAINER_NAME}$"; then
    echo "stopping..."
    podman stop $CONTAINER_NAME
    podman rm $CONTAINER_NAME
fi

echo "running..."
podman run -it --rm \
    --name $CONTAINER_NAME \
    -p 9002:9002 \
    $IMAGE_NAME

echo "container stopped"
