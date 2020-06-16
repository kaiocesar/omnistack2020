SHELL := /bin/bash


build:
	docker build -t kaiocesar/node-web-app .

up:
	docker run -p 4003:4003 -d kaiocesar/node-web-app
