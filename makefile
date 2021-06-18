.PHONY: development build start lint install stop

include .env

development:
	docker-compose run --service-ports node run dev

build:
	docker-compose run node run build

start:
	docker-compose run --service-ports -d --name ${CONTAINER_NAME} node run start

lint:
	docker-compose run node run lint

install:
	docker-compose run node install

stop:
	docker stop ${CONTAINER_NAME}
