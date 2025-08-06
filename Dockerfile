# Nodeの公式イメージを使う（軽量版）
FROM node:20-alpine

# 作業ディレクトリを作成
WORKDIR /app

# package.jsonとlockファイルをコピー
COPY application/package*.json ./

# 依存関係をインストール
RUN npm install

# ソースコードをコピー
COPY application .

# Next.jsの開発サーバーを起動
CMD ["npm", "run", "dev"]
