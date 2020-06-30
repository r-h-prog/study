# まとめ

## レスポンシブ画像

- srcsetを使う
- pictureを使う

```html
<picture class="footer__logo">
    <source srcset="img/logo-green-small-1x.png 1x, img/logo-green-small-2x.png 2x"
            media="(max-width: 37.5em)">
    <img srcset="img/logo-green-1x.png 1x, img/logo-green-2x.png 2x" alt="Full logo" src="img/logo-green-2x.png">
</picture>
```

```html
<!-- 画像の大きさを画面幅で割る -->
<img src="img/nat-1.jpg 300w, img/nat-1-large.jpg 1000w" sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw">
```

## 背景をぼかす

background-filterを利用する

## サポートしていないブラウザでも、プロパティを使えるようにする

@supportsを利用する

```scss
@supports (-webkit-backdrop-filter: blur(10px)) or (backdrop-filter: blur(10px)) {
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
        background-color: rgba($color-black, .3);
    }
```

## 要素が回転した時に裏面から表面が見えないようにする

```css
backface-visibility: hidden;
```

## heightが0になってしまう時

子要素のpositionをabsoluteなどした時に、親要素の高さが失われることがある。
そのような時には子要素の高さを親要素にも設定する。

## 子要素が親要素からはみ出ている場合はoverflowをhiddenにする

## background-blend-modeはCSSで写真を加工する

## 画像の周りに文字を回り込ませるにはshape-outsideプロパティを利用する

## backface-visibilityをhiddenにすると解決する問題が結構あるらしい

## object-fitをcoverに設定すると、アスペクト比を保ったまま親要素を埋める。ただし、切り取る
