# まとめ

## 関数内で定義された変数は関数外では使用できない

## 属性を追加する時

```js

// setAttributeを使用するより、valueメソッドを使う方が良い

// 好ましくない
el.setAttribute('type', 'text');

// 好ましい
el.type = 'text';
```

## タグ内部の文字を編集したい場合

```js

el.textContent = '文字列';

```

## タグを作成する場合

```js
// クリエイトエレメントメソッドを利用する
const el = document.createElement('a');

el.href = 'https://google.com';
```

## 指定したDOMの中に要素を追加したい場合はappendChildを利用する

```js
target.appendChild(newElement);
```

## 同階層に要素を追加したい場合

```js
target.parentNode.appendChild(newElement);
```

## 追加する位置を指定したい場合

```js
// insertBeforeを利用する
// referenceで挿入したい位置を指定する
DOMel.insertBefore(newElement, reference);
```

## 兄弟要素を取得するにはnextElementSiblingを利用する

## 最初の子要素を取得するにはfirstElementChildを利用する

## バブリングした時に意図しないイベントが発生するのを止める

```js
target.addEventListener('click', (e) => {
  e.stopPropagetion();
});
```

## aタグをクリックしてもリンク先に飛ばないようにするには

```js
e.preventDefault();
```
