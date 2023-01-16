## 前提条件

1. [Node.js](https://nodejs.org/en/) (v16+)をインストールする
2. [yarn](https://yarnpkg.com/getting-started/install)をインストールする

## はじめに

1. `git clone https://github.com/infini-talk`
2. `cd infini-talk`
3. 下記ポートフォワーディングする

- DEV

  ルート ディレクトリに[.env.local](google.com)ファイルを作成する

     ```bash
     # 依存関係をインストールする
     $ yarn install

     # コマンド実行
     $ yarn start:dev
     ```

- PRO

   ルート ディレクトリに[.env.production.local](google.com)ファイルを作成する

     ```bash
     # ソースコードをビルドする
     $ yarn build

     # コマンド実行
     $ serve -s build
     ```

## 配備

- このリポジトリは、Github 　 CI/CD を使用して自動デプロイを実装します
- Cloudfront サービスを使用して AWS 　 S3 にデプロイする
- CI/CD の設定: `/.github/deploy.yml`
- 参照: [Github アクションで CI/CD パイプラインをセットアップする方法](https://medium.com/@schmidphilipp1995/set-up-a-ci-cd-pipeline-for-your-webapp-on-aws-with-github-actions-within-5-minutes-810b10749833)

## Git フロー

1. developから開発ブランチを切ります

- 通常タスク: `git branch feature/<タスク ID>/ブランチ名`
- バグ修正タスク: `git branch bugfix/<バグ ID>/ブランチ名`

2. ESLintでコードを修正
3. 実装できたらcommit/push
4. PR作成(developに向けて下さい)
5. レビュアーにレビュー依頼(テストケース作成を依頼したときはテストケースのレビューも粂に投げて下さい)

### コミットのメッセージ

`[タスク ID]: <メッセージ>`

```
fix：バグ修正
add：新しい機能の追加
update：機能の更新
change：仕様変更
clean：整理（リファクタリングなど）
```

### PR

`[タスク ID] <プルリクエストのタイトル>`

## ディレクトリ構造

### 概要

```
src
├── authentication 
├── common
│   ├── constants
│   ├── decorators
│   ├── guards
│   ├── interfaces
│   ├── middlewares
│   ├── models
│   └── validators
├── configs 
├── models 
├── utils 
├── app.controller.ts 
├── app.module.ts
├── app.service.ts
├── main.ts
├── package.json
└── README.md 
```

### 詳細

- **authentication** - セッションログインハンドラー	
- **common**
  - **constants** - 定数の定義
  - **decorators** - カスタムデコレータ
  - **guards** - ガード
  - **interfaces** - Typescriptのインターフェース定義
  - **middlewares** - ミドルウェア
  - **models** - カスタムクラス
  - **validators** - カスタムバリデーター
- **configs** - 環境にロードされる変数タイプ
- **models** - すべての関連データモデル
- **utils** - ヘルパー関数		
- **package.json** - プロジェクトの依存関係が含まれています

## ライセンス

このプロジェクトはジェイエムエス・ユナイテッド株式会社に登録されています。
