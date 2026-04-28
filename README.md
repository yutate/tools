# Yuta's Tools

マーケティング × AI × Z世代リサーチのためのシングルファイルHTMLツール群。
すべて `yutate.github.io/tools/` 以下で公開。

→ **[ポータル](https://yutate.github.io/tools/)**

---

## ツール一覧

### Intelligence

| ツール | URL | 概要 |
|--------|-----|------|
| Think Drill | [/tools/think-drill.html](https://yutate.github.io/tools/think-drill.html) | 問いカードを選んで潜る思考探索ツール |
| JSON Synthesis | [/tools/json-synthesis.html](https://yutate.github.io/tools/json-synthesis.html) | 複数JSONをAIで横断分析・合成 |

### Research

| ツール | URL | 概要 |
|--------|-----|------|
| Z世代 Signal（個人） | [/genz/](https://yutate.github.io/genz/) | 日本のZ世代トレンドを週次トラッキング |
| Z世代 Signal（チーム） | [/genz/team/](https://yutate.github.io/genz/team/) | チーム向けビュー |
| Persona Talk | [/genz/persona.html](https://yutate.github.io/genz/persona.html) | AIが生成するZ世代ペルソナとの対話 |

### Marketing Tools

| ツール | URL | 概要 |
|--------|-----|------|
| Media Planner | [/media-planner/](https://yutate.github.io/media-planner/media-planner.html) | CV最適化・シナリオ分析対応のメディアプランAI |
| ズレない顧客設計 | [/customer-design/](https://yutate.github.io/customer-design/) | 3-4ターン会話フローで顧客設計を前に進める装置 |
| Resonance Map | [/resonance-map/](https://yutate.github.io/resonance-map/) | 思考をノードで可視化するマインドマップツール |

### Intelligence（外部リポジトリ）

| ツール | URL | 概要 |
|--------|-----|------|
| ATLAS Dashboard | [/Atlas/](https://yutate.github.io/Atlas/) | 日次ATLASログの可視化・検索 |
| note Analyzer | [/note-analyzer/](https://yutate.github.io/note-analyzer/) | note.comの文体・テーマ変遷をAI分析 |

### Team & Learning

| ツール | URL | 概要 |
|--------|-----|------|
| Yuta User Manual | [/Yuta-User-manual/](https://yutate.github.io/Yuta-User-manual/) | 3AI統合マニュアル・検定テスト |

---

## このリポジトリに含まれるファイル

```
tools/
├── index.html          # ポータル（全ツール入口）
├── think-drill.html    # 思考探索ツール
└── json-synthesis.html # JSON横断分析ツール
```

その他のツールは各リポジトリで管理。

---

## 共通仕様

- インストール不要・シングルファイルHTML
- APIキーはツール内でlocalStorageに保存
- 対応AI: Claude Sonnet / Haiku / Gemini 2.0 Flash / GPT-4o（ツールによる）

---

## Think Drill 詳細

行き詰まりを「掘り下げる」思考探索ツール。問いを入力すると、AIが3〜4枚の問いカードを生成。カードを選んで潜るたびに思考が深くなる。

### 機能

| 機能 | 内容 |
|------|------|
| 2モード | 広げる（可能性を拡張）/ 絞る（本質に向かう） |
| 問いカード | タップするたびに深く掘れる、深さをdotで可視化 |
| パンくず | どこから来たか見えて、任意の深さに戻れる |
| まとめて見る | 軌跡を縦に俯瞰、コピー＋JSON書き出し対応 |
| マルチAI | Claude Sonnet 4.6 / Haiku 4.5 / Gemini 2.5 Flash / Flash-Lite / GPT-4o / GPT-4o mini |

APIキーはlocalStorageにモデルごとに保存。

---

## JSON Synthesis 詳細

複数のJSONファイルをAIで横断分析するツール。
zgene.json・ATLASログ・メディアプランナー出力など構造がバラバラなJSONを読み込んで分析する。

### 使い方

1. `json-synthesis.html` をブラウザで開く
2. **Step 1** — JSONファイルをドロップ or テキスト貼り付けで読み込む（複数可・APIキー不要）
3. **Step 2** — AIモデルとAPIキーを設定 → 分析モードを選んで `SYNTHESIZE`

### 分析モード

| モード | 内容 |
|--------|------|
| まとめ | 各JSONの性格と横断テーマをサマリー |
| 仮説 | データから3〜5個の仮説を生成、★で有望度を表示 |
| 問い | データが答えていない問いと次のアクションを提示 |
| Yuta | マーケ・Z世代・AI観点での示唆とnote記事ネタ |

### 想定ユースケース

- `zgene.json` + ATLASログを横断して週次テーマを抽出
- メディアプランナー出力 + トレンドデータを掛け合わせて仮説生成
- 複数プロジェクトのJSONをまとめてnote記事のネタ出し
- Yutaモードで「見落としている視点」を引き出す
