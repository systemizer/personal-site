build:
	yarn build

deploy: build
	aws s3 sync --exclude ".git/*" --exclude ".gitignore" --exclude "*~" ./build/ s3://robertmcqueen.com/
