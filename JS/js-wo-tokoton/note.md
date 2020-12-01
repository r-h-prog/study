# まとめ

## Udemy Javascriptをとことんやってみよう

### 関数のスコープ

関数内で定義された変数は関数外では使用できない

### 属性を追加する時

```js
// setAttributeを使用するより、valueメソッドを使う方が良い

// 好ましくない
el.setAttribute('type', 'text');

// 好ましい
el.type = 'text';
```

### タグ内部の文字を編集したい場合

```js
el.textContent = '文字列';
```

### タグを作成する場合

```js
// クリエイトエレメントメソッドを利用する
const el = document.createElement('a');

el.href = 'https://google.com';
```

### DOMに要素を追加

指定したDOMの中に要素を追加したい場合は appendChild を利用する

```js
target.appendChild(newElement);
```

### 同階層に要素を追加したい場合

```js
target.parentNode.appendChild(newElement);
```

### 追加する位置を指定したい場合

```js
// insertBeforeを利用する
// referenceで挿入したい位置を指定する
DOMel.insertBefore(newElement, reference);
```

### 兄弟要素の取得

兄弟要素を取得するには nextElementSibling を利用する

### 直下の子要素の取得

最初の子要素を取得するには firstElementChild を利用する

### stopPropagetion

バブリングした時に意図しないイベントが発生するのを止める

```js
// バブリングとは
target.addEventListener('click', (e) => {
  e.stopPropagetion();
});
```

### preventDefaultとは

a タグをクリックしてもリンク先に飛ばないようにするメソッド

```js
e.preventDefault();
```

### ラジオボタン使用時の注意

ラジオボタンでは、id 名と同じ名前を label タグの for 属性につける

### form要素の取得

Form 要素は document.forms でまとめて取得できる

### XSS 対策

```js
// element.innerHTML, document.write, insertAdjacentHTML, evalはできるだけ使わない
```

### CORS
