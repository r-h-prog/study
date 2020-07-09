import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Data from "./data.json";
import TestComponent from "./TestComponent";

type USERS = typeof Data;

interface NAME {
  first: string;
  // nullも許容している
  last: string | null;
}

let nameObj: NAME = { first: "Yamada", last: "Taro" };

let arrayUni: (number | string)[];
arrayUni = [0, 1, 2, "hello"];
// trueを入れるとエラーになる
// arrayUni = [0, 1, 2, "hello", true];

type KEYS = {
  primary: string;
  secondary: string;
};
let key: keyof KEYS;
key = "primary";
// primなどとするとエラーになる
// key = "prim"

// interfaceを定義した段階では型は定まっていない
interface GEN<T> {
  item: T;
}

// 実際に使用するときに動的に型を指定できる
const gen0: GEN<string> = { item: "hello" };
const gen2: GEN<number> = { item: 12 };

// 特定の型のみを指定する場合はextendsを付ける
interface GEN2<T extends string | number> {
  item: T;
}

function funcGen<T>(props: T) {
  return { item: props };
}

const gen6 = funcGen<string>("test");

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TestComponent text="hello from App"></TestComponent>
      </header>
    </div>
  );
};

export default App;
