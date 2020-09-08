# メモ書き

## セレクタの指定

### A B{~}

セレクタの次に半角スペースを入れセレクタを指定することで、指定の親要素内のすべての子要素に装飾が適用されます。
また、装飾の範囲は孫要素など、階層が深くなってもすべてに適用されます。

```html
<div>divタグの内容</div>
<div>
  <span>divタグの子要素のspanタグの内容</span>
  <div>
    <p><span>divタグの孫要素のspanタグの内容</span></p>
  </div>
</div>
<span>spanタグの内容</span>
```

```css
div span {
  color: #f80206;
}
```

![image.png](https://www.asobou.co.jp/blog/wp-content/uploads/2019/04/img003-8.jpg)

### A>B{~}

セレクタの次に「>」を入れセレクタを指定することで、指定の親要素内の一階層下の子要素に装飾が適用されます。

```html
<div>divタグの内容</div>
<div>
  <span>divタグの子要素のspanタグの内容</span>
  <div>
    <p><span>divタグの孫要素のspanタグの内容</span></p>
  </div>
</div>
<span>spanタグの内容</span>
```

```css
div > span {
  color: #f80206;
}
```

![image.png](https://www.asobou.co.jp/blog/wp-content/uploads/2019/04/img003-9.jpg)

### .A.B{~}

A と B の二つのクラスが付与された要素を指定する

```html
<div id="container">
  <button class="btn float">Button</button>
</div>
```

```css
.btn.float {
  color: white;
}
```

### box-shadow

```css
.box-shadow {
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

## z-index が有効になる条件

```css
/* positionプロパティがstatic以外になっていること */
```

ローカルスタックコンテキストに注意

## position: sticky;を使う時の注意点

親要素に overflow: hidden が振られていると期待した動きにならない

## CSS で 3D アニメーションをする場合

```css
transform-style: preserve-3d
  上のようにすることで子要素を3Dで表現することができる;
```

## 中央に配置する方法

```css
.parent {
  position: relative;
}

.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
/* このようにした場合要素は重なる */
```

```css
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 重ならない */
```

## ローダーのアニメーションを作成したい場合参考になるサイト

[SpinKit](https://github.com/tobiasahlin/SpinKit)

## animation プロパティ

### animation-timing-function

アニメーションの緩急を決める

### animation-delay

アニメーションが開始するまでの遅延時間を決める

### animation-iteration-count

アニメーションの繰り返し数を決める

### animation-direction

reverse とすると 100%から 0%に変化する

### animation-fill-mode

forwards とすると、アニメーション終了時の状態で画面に残る

### object-fit: cover

background-size: cover と同じ効果を img セレクタに付与するもの

## DOMContentLoaded vs load

- DOMContentLoaded
  - html 要素が DOM に変換されたタイミングで発火。document オブジェクトに対しても利用できる
- load
  - 画像などが全てダウンロードされたタイミングで発火。window オブジェクトに対してしか利用できない

## display: inline-block としてインライン要素として扱うと空白文字などが無視される。表示させる場合は nbsp を使う

## DOM の更新は最小限に抑えた方が良い

## スクロール検知には IntersectionObserver を利用する

```js
// 監視対象のDOMを取得
const child = document.querySelector('.child');
// callback関数(cb)を渡して初期化処理
const io = new IntersectionObserver(cb);
// 監視したい対象のDOMを登録する
io.observe(child);

// childが画面に入った時と外に出る時にcallback関数（cb）が呼ばれる

const cb = function (entries, observer) {
  entries.forEach((entry) => {
    // ioには複数のDOM(entries)を登録することができるため、それぞれを1つずつ(entry)取り出していく
    if (entry.isIntersecting) {
      // 画面に入ってきたらinviewクラスを付与する
      entry.target.classList.add('inview');
      // 1回呼び出して、それ以降監視したくない場合は引数observerにunobserveメソッドを使う
      // entry.targetは監視対象のDOMを指す（child）
      observer.unobserve(entry.target);
    } else {
      // 画面から出たらinviewクラスを外す
      entry.target.classList.remove('inview');
    }
  });
};

// IntersectionObserverオブジェクトにはoptionsを引数にとれる
const options = {
  //  親要素との交差点を監視したい場合設定する
  root: null,
  // 画面の監視開始位置を決める
  rootMargin: '300px 0px',
  // DOMの監視開始位置を決める
  threshold: [0, 0.5, 1],
};
```

## スクロール監視をやめたい時は disconnect メソッドを使う

## touch-start はスマホでタッチした際に発火するイベント。click イベントよりも反応が早い

## pace.js(ローダー)の使い方

ローディング時にボディに pace-running クラスが付与されるので以下のようにすると良い

```css
/* 画像がチラつく場合はtransitionが原因で起こることがある。そのときは終点できちんとプロパティを指定する */
.pace-done #global-container {
  transition: opacity 1s;
  opacity: 1;
}

#global-container {
  opacity: 0;
}
```

##
