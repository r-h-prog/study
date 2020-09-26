// letで定義した変数はscriptオブジェクトに格納される
let a = 0;
// varで定義された変数や無名関数はglobalオブジェクトに格納される
var b = 0;
function c() {}

console.log(b);

window.d = 1;
let d = 2;
console.log(d);

if (true) {
  let c = 1;

  // ブロックスコープ内で定義された無名関数はどこからでも呼び出せるため、letで変数定義することでブロック内のみ呼び出せるようにする
  let d = function () {
    console.log('d is called');
  };
}

d();
console.log(c);
