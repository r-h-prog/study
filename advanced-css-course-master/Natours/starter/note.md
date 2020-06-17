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
