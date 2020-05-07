# メモ書き

## セレクタの指定

### A B{~}

セレクタの次に半角スペースを入れセレクタを指定することで、指定の親要素内のすべての子要素に装飾が適用されます。
また、装飾の範囲は孫要素など、階層が深くなってもすべてに適用されます。

```html
<div>divタグの内容</div>
<div>
    <span>divタグの子要素のspanタグの内容</span>
    <div><p><span>divタグの孫要素のspanタグの内容</span></p></div>
</div>
<span>spanタグの内容</span>
```

```css
div span {
    color: #F80206;
}
```

![image.png](https://www.asobou.co.jp/blog/wp-content/uploads/2019/04/img003-8.jpg)

### A>B{~}

セレクタの次に「>」を入れセレクタを指定することで、指定の親要素内の一階層下の子要素に装飾が適用されます。

```html
<div>divタグの内容</div>
<div>
    <span>divタグの子要素のspanタグの内容</span>
    <div><p><span>divタグの孫要素のspanタグの内容</span></p></div>
</div>
<span>spanタグの内容</span>
```

```css
div > span {
    color: #F80206;
}
```

![image.png](https://www.asobou.co.jp/blog/wp-content/uploads/2019/04/img003-9.jpg)

### .A.B{~}

AとBの二つのクラスが付与された要素を指定する

```html
<div id="container">
    <button class="btn float">Button</button>
</div>
```

```css
.btn.float{
    color:white;
}
```

### box-shadow

```css
.box-shadow{
    box-shadow: 左右の向きpx 上下の向きpx ぼかしpx 広がりpx 色　内側指定;
}

/* 例 .box{box-shadow: 2px 2px 4px -2px gray inset} */
```

参考: [サルワカ](https://saruwakakun.com/html-css/basic/box-shadow)

## ブロック要素の左右中央揃え

```css
width: 100px;
margin: 0 auto;
/* marginで左右中央揃えをする場合はwidthに値を指定していなければならない */
```

## transform -- translate

```css
transform: translate(100%, 100%);
/* 上のようにすると物体の分だけx軸方向とy軸方向に移動する */
```

## transform -- skew

```css
transform: skew(-30deg);
/* 上のようにすると平行四辺形ができる */
```

## transform -- transform-origin

```css
transform-origin: center center;
/* 上のようにすると中心を軸として回転させる */
```

## z-indexが有効になる条件

```css
/* positionプロパティがstatic以外になっていること */
```

ローカルスタックコンテキストに注意

## position: sticky;を使う時の注意点

親要素にoverflow: hiddenが振られていると期待した動きにならない

## CSSで3Dアニメーションをする場合

```css
transform-style: preserve-3d
上のようにすることで子要素を3Dで表現することができる
```

## 中央に配置する方法

```css
.parent{
    position: relative;
}

.child{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
/* このようにした場合要素は重なる */
```

```css
.parent{
    display: flex;
    justify-content: center;
    align-items: center;
}
/* 重ならない */
```

## ローダーのアニメーションを作成したい場合参考になるサイト

[SpinKit](https://github.com/tobiasahlin/SpinKit)

## animationプロパティ

### animation-timing-function

アニメーションの緩急を決める

### animation-delay

アニメーションが開始するまでの遅延時間を決める

### animation-iteration-count

アニメーションの繰り返し数を決める

### animation-direction

reverseとすると100%から0%に変化する

### animation-fill-mode

forwardsとすると、アニメーション終了時の状態で画面に残る

