# TypeScript まとめ

## Interface

オブジェクトの方の定義に使う

```tsx
interface NAME {
  first: string;
  // last?のようにはてなマークを付けると、要素がなくてもエラーが出ない
  last: string;
}

let nameObj: NAME = { fitst: "Yamada", last: "Taro" };
```

## Intersection Types

複数のタイプを結合する

```tsx
type PROFILE = {
  age: number;
  city: string;
};

type LOGIN = {
  username: string;
  password: string;
};

type USER = PROFILE & LOGIN;

const userA: USER = {
  age: 30,
  city: "Tokyo",
  username: "xxx",
  password: "yyy",
};
```
