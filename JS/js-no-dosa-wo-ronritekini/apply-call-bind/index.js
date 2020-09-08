function greet() {
  // callメソッドの引数はargumentsに格納される
  console.log(arguments);
  // argumentsのままだと使いにくいので、配列に格納して使う
  let slicedArray = [].slice.call(arguments);
  let hi = `hey ${this.name}`;
  console.log(hi);
}

let obj = {
  name: 'TOM',
};

// callを使うと、callの引数がthisの参照先のオブジェクトになる
greet.call(obj);
// greet.call(obj, 1, 2, 3);
// applyは配列を引数にとる
greet.apply(obj, [1, 2, 3]);

let myObj = {
  id: 42,
  print() {
    // 1. this(myObj)
    setTimeout(
      function () {
        // 2.this(window)
        console.log(this.id);
        // bindをつけないとundifinedになる
        // 入れ子ないのthisはグローバルオブジェクトを指す
        // setTimeoutはwindowオブジェクトのメソッド
        // bindすることで1番目のthisを参照する
      }.bind(this),
      1000
    );
  },
};

myObj.print();
