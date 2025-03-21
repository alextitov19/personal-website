docker build --platform linux/amd64 -t personal-website:v1.0.0 .

aws ecr get-login-password --profile personal --region us-east-1 | docker login --username AWS --password-stdin 471112521203.dkr.ecr.us-east-1.amazonaws.com

docker tag personal-website:v1.0.0 471112521203.dkr.ecr.us-east-1.amazonaws.com/personal-website:v1.0.0

docker push 471112521203.dkr.ecr.us-east-1.amazonaws.com/personal-website:v1.0.0