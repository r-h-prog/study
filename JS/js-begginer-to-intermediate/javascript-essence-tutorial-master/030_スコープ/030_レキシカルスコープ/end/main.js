let a = 2;
function fn1() {
  // bはブロック内で定義されているため、ブロック外では参照できない。fn2をブロック外に出すとbは参照できない
  let b = 1;
  function fn2() {
    let c = 3;
    console.log(b);
  }
  fn2();
}
fn1();
