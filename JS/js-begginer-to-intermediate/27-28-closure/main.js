function incrementFactory() {
  let num = 0;

  function a() {
    num = num + 1;
    console.log(num);
  }

  return a;
}

// incrementFactoryが実行された時のみnumの初期化が行われる
const increment = incrementFactory();

// ここでは関数の戻り値が毎度呼ばれているので、a()が毎度呼ばれていることになる
increment();
increment();
increment();
increment();
