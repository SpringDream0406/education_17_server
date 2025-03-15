#  어떤 이미지를 사용할지
FROM node:20.18.0 AS development

WORKDIR /usr/src/app

# package.json 복사해오기
COPY package*.json ./

# pnpm-lock.yaml 복사해오기
COPY package-lock.json ./

# 나머지 파일/폴더 복사해오기
COPY . .

# 의존성 설치
RUN npm install

# 커맨드 실행
CMD ["npm", "run","start:dev"]