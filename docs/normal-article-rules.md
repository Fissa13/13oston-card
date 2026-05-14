# 通常記事作成・リライトルール

通常記事は `articles/latest/latest-booster.html` の本文パーツを正とします。新規記事やリライトでは、`docs/normal-article-components.md` のclassとHTML構造を使ってください。

## 基本方針

- 通常記事では `latest-booster.html` の本文パーツだけを使う。
- 新しいボタン、カード、テーブルの独自デザインを勝手に作らない。
- 必要なデザインは `assets/css/article-common.css` の通常記事共通パーツへ寄せる。
- 記事ごとに同じCSSを増殖させない。
- 既存本文を活かす場合も、構成とパーツは通常記事共通パーツへ揃える。

## 本文構成

- 目次を作る。
- h2の大見出しは3〜5個程度にする。
- 必要に応じてh3、h4を使う。
- 見出し下は原則「画像 or テーブル or カード → pタグ」にする。
- テーブルだけ、またはpタグだけが続く単調な構成にしない。
- まとめは `summary-section-fix` と `summary-card-grid` を使う。

## ボタンリンク

- 本文内の関連リンクは必ず `deck-rating-link` または `price-ranking-link` を使う。
- wrapper は `deck-rating-link-wrap` または `price-ranking-link-wrap` を使う。
- 通常記事本文内で `.btn` は使わない。
- `href="#"` は残さない。
- 文言とhrefを決めてから公開前にリンク切れを確認する。

## カード

- シンプルなカード型説明は `card-grid two` と `card-item` を使う。
- ラベルは `label` を使う。
- まとめカードは `summary-card-grid` と `summary-card` を使う。
- 独自のカードclassを増やす前に、既存classで表現できないか確認する。

## テーブル

- 基本情報や比較表は `table` を使う。
- 横スクロールが必要な3列以上のリーダー一覧は `leader-table-scroll` と `leader-table` を使う。
- 注目カード用の比率調整が必要な表は `notable-card-table` を使う。
- スマホで列がつぶれる場合は、既存の横スクロールパターンを使い、新しいテーブルデザインを作らない。

## 画像

- 画像URLは `https://ik.imagekit.io/opcard/onepiece/...` 形式にする。
- 対応するローカル実体は `imagekit-upload/onepiece/...` に置く。
- base64画像をHTMLに残さない。
- 旧URL `https://ik.imagekit.io/opcard/onepiece/decks/...` は使わない。
- 本文のメイン画像は `set-visual` を使う。
- 3枚横並び画像は `comic-parallel-gallery` と `comic-parallel-card` を使う。

## 作業後チェック

- `href="#"` が残っていない。
- 通常記事本文内で `.btn` を使っていない。
- ImageKit URLが `https://ik.imagekit.io/opcard/onepiece/...` になっている。
- ImageKit URLに対応する `imagekit-upload/onepiece/...` のファイルが存在する。
- `data:image` が残っていない。
- 本文パーツのclassが `docs/normal-article-components.md` と一致している。
- 共通CSSで表現できるデザインを記事内CSSとして重複追加していない。
