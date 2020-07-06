# TypeScript まとめ

## Interface

オブジェクトの型の定義に使う

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

## Union Types

受け付ける型を限定することができる

```tsx
let arrayUni: (number | string)[];
// trueを入れるとエラーになる
arrayUni = [0, 1, 2, "hello", true];
```

## keyof

指定したキーしか受け取らない

```tsx
type KEYS = {
  primary: string;
  secondary: string;
};
let key: keyof KEYS;
key = "primary";
// primなどとするとエラーになる
// key = "prim"
```

## GEnerics

```tsx:App.tsx
// interface を定義した段階では型は定まっていない
interface GEN<T> {
  item: T;
}

// 実際に使用するときに動的に型を指定できる
const gen0: GEN<string> = { item: "hello" };
const gen2: GEN<number> = { item: 12 };

// 特定の型のみを指定する場合は extends を付ける
interface GEN2<T extends string | number> {
  item: T;
}
```
