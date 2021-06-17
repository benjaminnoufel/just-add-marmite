.PHONY: development build start lint

development:
	docker-compose run --service-ports node run dev

build:
	docker-compose run node run build

start:
	docker-compose run --service-ports -d node run start

lint:
	docker-compose run node run lint

install:
	docker-compose run node install
