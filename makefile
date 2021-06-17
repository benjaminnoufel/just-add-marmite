.PHONY: development build start lint

development:
	docker-compose run --service-ports node run dev

build:
	docker-compose run yarn run build

start:
	docker-compose run --service-ports -d yarn run start

lint:
	docker-compose run yarn run lint

install:
	docker-compose run node install
