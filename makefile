.PHONY: development build start lint

development:
	docker-compose run node --service-ports run dev

build:
	yarn run build

start:
	yarn run start

lint:
	yarn run lint

