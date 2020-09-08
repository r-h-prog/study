let myObj = {
  id: 2,
  printId() {
    //　ここでのthisはmyObjを指す
    console.log(this.id);
  },
};

myObj.printId();

const sayFoo = function () {
  console.log(this['foo']);
};

foo = 'foo';

const mySecondObj = {
  foo: 'aaaaa',
  sayFoo,
};

// トップレベルで呼ぶと'foo'を返す。グローバルオブジェクトのfooを指す。15行目
sayFoo();

// ここではmySecondObjを指すので'aaaaa'がかえる
mySecondObj.sayFoo();

function MyObj(id) {
  this.id = id;
}

MyObj.prototype.printId = function (id) {
  // この時thisはnewInstanceを指す。
  console.log(this.id);
};

// この時thisはnewInstanceを指す。newInstanceがidプロパティを持つイメージ
const newInstance = new MyObj(5);

const outer = {
  func1: function () {
    console.log(this);

    const func2 = function () {
      console.log(this);

      const func3 = function () {
        console.log(this);
      };
    };
  },
};

// この時一番上のthisはouterを参照している。
// ２番目のthisはグローバルオブジェクトのwindowオブジェクトを指す
// 入れ子になった関数内のthisはグローバルオブジェクトを指す
// 入れ子ないでもthisを使いたい場合はlet _that = thisのように一度変数に保存して使う
outer.func1();
