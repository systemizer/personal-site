deploy:
	aws s3 sync --exclude "venv/*" --exclude ".git/*" --exclude ".gitignore" --exclude "*~" --exclude "deploy-to-s3" ./build/ s3://robertmcqueen.com/
