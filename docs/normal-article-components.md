# 通常記事共通パーツ

基準は `articles/latest/latest-booster.html` の本文パーツです。通常記事のリライト・新規作成では、ここにある class と HTML 構造を優先して使います。本文内リンクに汎用 `.btn` は使いません。

## 目次

用途:
記事冒頭で h2 セクションへ移動する目次に使います。

使用HTML:

```html
<section class="box toc-box">
  <div class="box-head"><h2>目次</h2></div>
  <div class="box-body">
    <ol class="toc toc-simple">
      <li><a href="#basics">基本情報</a></li>
      <li><a href="#summary">まとめ</a></li>
    </ol>
  </div>
</section>
```

使用するclass:
`toc-box`, `toc`, `toc-simple`

## 見出し

用途:
通常記事の本文構造を作ります。

使用HTML:

```html
<section id="basics">
  <h2>基本情報</h2>
  <h3>小見出し</h3>
  <h4>補足見出し</h4>
</section>
```

注意点:
h2 は3〜5個程度にします。見出し下は原則「画像 or テーブル or カード → pタグ」です。

## 基本情報テーブル

用途:
商品情報、改定情報、比較情報などを整理します。

使用HTML:

```html
<table class="table">
  <thead><tr><th>項目</th><th>内容</th></tr></thead>
  <tbody>
    <tr><td>発売日</td><td>2026年5月30日予定</td></tr>
  </tbody>
</table>
```

使用するclass:
`table`

## リーダー一覧テーブル

用途:
3列以上で列幅を保ちたいリーダー一覧に使います。スマホでは横スクロールします。

使用HTML:

```html
<div class="leader-table-scroll">
  <table class="table card-table leader-table">
    <thead><tr><th>リーダー名</th><th>色</th><th>効果</th></tr></thead>
    <tbody>
      <tr><td>モンキー・D・ルフィ</td><td>緑/青</td><td>効果テキスト</td></tr>
    </tbody>
  </table>
</div>
```

使用するclass:
`leader-table-scroll`, `table`, `card-table`, `leader-table`

## 画像表示

用途:
本文中のメイン画像や商品画像を表示します。

使用HTML:

```html
<figure class="set-visual">
  <img alt="画像の説明" loading="lazy" src="https://ik.imagekit.io/opcard/onepiece/articles/.../image.png"/>
</figure>
```

使用するclass:
`set-visual`

注意点:
画像URLは ImageKit の現行ルール `https://ik.imagekit.io/opcard/onepiece/...` にします。

## 3枚横並び画像

用途:
注目カードやコミックパラレルなど、3枚の画像を並べるときに使います。

使用HTML:

```html
<div class="comic-parallel-gallery">
  <figure class="comic-parallel-card"><img alt="カード1" loading="lazy" src="..."/></figure>
  <figure class="comic-parallel-card"><img alt="カード2" loading="lazy" src="..."/></figure>
  <figure class="comic-parallel-card"><img alt="カード3" loading="lazy" src="..."/></figure>
</div>
```

使用するclass:
`comic-parallel-gallery`, `comic-parallel-card`

## シンプルカード

用途:
注目ポイント、影響、買うべき人などをカード型で並べるときに使います。

使用HTML:

```html
<div class="card-grid two">
  <div class="card-item">
    <div class="label">注目</div>
    <h4>カード見出し</h4>
    <p>説明文。</p>
  </div>
</div>
```

使用するclass:
`card-grid`, `two`, `card-item`, `label`

## まとめカード

用途:
記事末尾の要点整理に使います。

使用HTML:

```html
<section class="summary-section-fix" id="summary">
  <h2>まとめ</h2>
  <div class="summary-card-grid">
    <div class="summary-card">
      <span class="summary-label">基本情報</span>
      <strong>要点</strong>
      <p>短い説明。</p>
    </div>
  </div>
  <div class="summary-action-box">
    <strong>次にやること</strong>
    <ul class="summary-action-list">
      <li>確認項目。</li>
    </ul>
  </div>
</section>
```

使用するclass:
`summary-section-fix`, `summary-card-grid`, `summary-card`, `summary-label`, `summary-action-box`, `summary-action-list`

## 記事内ボタンリンク

用途:
pタグ下に関連記事への遷移ボタンを置くときに使います。

使用HTML:

```html
<div class="deck-rating-link-wrap">
  <a class="deck-rating-link" href="../meta/new-set-deck-review.html">新弾デッキ評価</a>
</div>
```

または:

```html
<div class="price-ranking-link-wrap">
  <a class="price-ranking-link" href="../guides/featured/expensive-card-ranking.html">高額カードランキング</a>
</div>
```

使用するclass:
`deck-rating-link-wrap`, `deck-rating-link`, `price-ranking-link-wrap`, `price-ranking-link`

禁止:
通常記事本文内では `<a class="btn">...</a>` を使いません。`href="#"` も残しません。

## 注意・補足テキスト

用途:
本文中の補足、注意点、読み方のコツに使います。

使用HTML:

```html
<div class="tip">
  <strong>補足</strong>
  <p>補足説明。</p>
</div>
```

使用するclass:
`tip`

## 禁止する使い方

- 通常記事本文内で `.btn` を使う
- 既存パーツがあるのに新しいボタン・カードclassを作る
- `href="#"` を残す
- base64画像を本文に直埋めする
- ImageKit旧URL `https://ik.imagekit.io/opcard/onepiece/decks/...` を使う
