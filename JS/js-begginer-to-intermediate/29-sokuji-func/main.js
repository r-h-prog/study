function a() {
  console.log('called');
}

a();

let b = (function () {
  console.log('called');
})();

let c = (function () {
  console.log('called');

  let privateVal = 0;
  let publicVal = 10;

  function privateFn() {
    console.log('privateFn is called');
  }
  function publicFn() {
    console.log('publicFn is called: ' + privateVal++);
  }

  // 以下のようにreturnを定義することで、外からc.publicValのような形で呼び出すことができる
  return {
    publicVal,
    publicFn,
  };
})();

c.publicFn();
c.publicFn();
c.publicFn();
c.publicFn();

console.log(c.publicVal);
