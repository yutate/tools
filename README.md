# Ad Strategy Studio

**Decide before you build.**

広告戦略の意思決定を支援するブラウザ完結型ツール。  
「何をやるか（Strategy）」を決めてから「どうやるか（Plan）」を設計する。

🔗 **[https://yutate.github.io/ad-strategy-studio/](https://yutate.github.io/ad-strategy-studio/)**

---

## コンセプト

従来のメディアプランナーは「予算をどう配分するか」から始まる。  
このツールは「なぜこの媒体に入れるか」から始まる。

```
Brief（入力）
  → Insight（意図の解釈）
    → Strategy（Simulator）
      → Scenario（選択）
        → Plan（数値設計）
```

---

## 主な機能

### 1. Intent Analysis
ターゲット詳細・目的・備考テキストから購買意図を自動推定する。

| Intent Type | 例 | Strategy |
|---|---|---|
| `comparison` | 比較検討中、乗り換えを検討 | balanced |
| `learning` | 不安、初心者、リスクが心配 | balanced（YouTube強化） |
| `transaction` | 申込みたい、契約を決めた | conversion_focus |
| `impulse` | お得、限定、ポイント | score依存 |

### 2. Ad Strategy Decision Simulator（AdCP PoC）
4つのSeller Agentが各媒体の提案を行い、Allocator Agentが戦略タイプに応じて配分を決定する。

**Seller Agents**
- TikTok Agent — 若年層リーチ、クリエイティブ依存
- YouTube Agent — ブランドリーチ、中程度のコントロール
- Google Agent — 検索意図×CVR、AI自動化が進む
- Meta Agent — リターゲ×中間ファネル、バランス型

**Allocator Agent**
- `conversion_focus` → Google 40% / Meta 25% / YouTube 20% / TikTok 15%
- `awareness_focus` → YouTube 40% / TikTok 30% / Meta 20% / Google 10%
- `test_learning` → 最大35% / 最小15%のフラット配分
- `balanced` → scoreベース比例

**Decision Quality Layer**
- Confidence（データ品質から算出）
- Data Quality（low / medium / high）
- Decision Tension（戦略上のトレードオフ）
- Intent Strength / Intent Type

### 3. Scenario Agent
3つの戦略シナリオを比較提示し、1つを選択してPlanに進む。

| Scenario | 特徴 |
|---|---|
| Aggressive Growth | TikTok×YouTube中心、リーチ最大化 |
| Conversion Safe | Google×Meta中心、CV効率優先 |
| Balanced Learning | 均等配分、実績データ収集優先 |

### 4. Planner
**数値はコード、意味はAI。**

- 配分% / 月額 / 想定CV数はJavaScriptが確定計算
- AIは媒体ごとの役割・配信方針・初月アクションのみ生成
- 数値の再計算・再生成をAIに委ねない

---

## 対応AIモデル

| モデル | 用途 |
|---|---|
| Claude Sonnet | メイン推奨（高精度） |
| Claude Haiku | 高速・低コスト |
| Gemini 2.5 Flash Lite | 無料枠あり |
| GPT-4o | OpenAI |

APIキーはlocalStorageに保存。サーバーへの送信なし。

---

## AdCP（Ad Context Protocol）対応

本ツールはAdCP（広告文脈プロトコル）のPoC実装を含む。

```json
{
  "adcp_version": "draft",
  "buying_mode": "brief",
  "intent_strength": "high",
  "intent_type": "comparison",
  "strategy_type": "balanced",
  "allocation": [...]
}
```

将来的にSeller Agent APIとの連携、自動発注、楽天データ連携などへの拡張を想定したコメントをコード内に残している。

---

## Strategy Transfer JSON

SimulatorからPlannerへの連携仕様。

```json
{
  "transfer_version": "draft_v1",
  "source": "ad_strategy_decision_simulator_poc",
  "strategy_type": "conversion_focus",
  "intent_type": "transaction",
  "confidence": 0.72,
  "allocation": [
    { "channel_group": "Google", "percent": 40 }
  ]
}
```

---

## 技術仕様

- **構成**: HTML / CSS / Vanilla JS（単一ファイル）
- **依存ライブラリ**: なし
- **ホスティング**: GitHub Pages
- **データ保存**: localStorage（サーバー不使用）
- **API**: Anthropic / Google AI / OpenAI（直接呼び出し）

---

## バージョン履歴

| Version | 内容 |
|---|---|
| v6.0 | Ad Strategy Studio として完全リビルド。Step UI / Insight / Scenario選択 / JS数値生成Planner |
| v5.11 | Intent Type Layer（comparison / learning / transaction / impulse） |
| v5.10 | Intent Strength Layer |
| v5.9 | 分離前最終整理、Layer Definition |
| v5.8 | Strategy Transfer JSON / Constraint Matching強化 |
| v5.7 | Minimum Input Mode / 媒体別制約のAllocator反映 |
| v5.6 | Decision Quality Layer |
| v5.4 | Scenario Agent |
| v5.3 | Allocator Agent |
| v5.2 | 4媒体構成（TikTok / YouTube / Google / Meta） |
| v5.0 | AdCP PoC初期実装 |

---

## 設計思想

```
// Seller Agents propose.
// Allocator Agent decides.
// Human approves.

// Intent drives direction.
// Context refines judgment.
// Data increases confidence.
// Constraints override optimization when required.
// Human makes the final decision.
```

---

## ライセンス

Private / Personal use
