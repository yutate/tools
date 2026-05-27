# Synthetic Meaning Space

**クリエイティブに複数の仮想Personaが「どう見えたか」を語り合う意味探索ツール。**

Behavior PredictionではなくMeaning Exploration。広告・バナー・LP・OOHなどのクリエイティブを投入すると、5種類のSynthetic Personaが第一印象・解釈・感情・違和感を語り合い、意味のズレと改善ポイントを出力する。

🔗 https://yutate.github.io/synthetic-meaning/

---

## What it does

1. **Creative Understanding** — クリエイティブの主訴求・情報量・誤解されやすい点をAIが構造化
2. **Persona別 第一印象** — 5種のSynthetic Personaが7軸スコア＋コメントで反応
3. **仮想ユーザー座談会** — Persona同士が議論し、解釈の対立・共通認識を可視化
4. **Meaning Diagnosis レポート** — 訴求の強み・意味のズレ・改善提案・次に検証すべき論点を出力

## Personas

| Persona | 特性 |
|---|---|
| Z世代女子大生 | SNS高接触・デザイン重視・条件複雑で離脱 |
| 新社会人男性 | 信頼性重視・失敗回避・公式感に反応 |
| ポイント最適化層 | SPU熟知・条件改悪に厳しい |
| ライトユーザー | 直感派・「結局いくら得か」が分からないと離脱 |
| ブランド感度層 | 世界観重視・過剰な販促感に敏感 |

## Score Axes

`理解しやすさ` `自分ごと感` `信頼感` `お得感` `面倒感` `怪しさ` `行動意欲`

## Usage

1. AIモデルを選択してAPIキーを入力・保存（ローカルストレージに保持）
2. クリエイティブ内容をテキストまたは画像で入力
3. 商材・媒体・訴求意図・避けたい印象を任意入力
4. 使用するPersonaを選択（未選択で全5体）
5. 「診断スタート」→ Step 2〜5が順次生成される
6. レポートをHTMLダウンロードまたはテキストコピー

## Tech Stack

- Vanilla HTML / CSS / JavaScript（単一ファイル）
- Multi-AI対応：Claude Sonnet / Claude Haiku / Gemini 2.5 Flash / GPT-4o
- APIキーはlocalStorageに保存（サーバー送信なし）
- GitHub Pages でホスティング

## Design

- カラー：深紅 `#c0392b` × Gold `#d4a017`
- フォント：Playfair Display / IBM Plex Mono / Noto Sans JP

---

*Part of [Yuta's Tools](https://yutate.github.io/tools/)*
