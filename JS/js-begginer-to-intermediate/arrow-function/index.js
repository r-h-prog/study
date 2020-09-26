// letで定義した変数はscriptオブジェクトに格納される
let noramlFn;

// varで定義された変数や無名関数はglobalオブジェクトに格納される

normalFn = {
  id: 43,
  counter: function () {
    console.log(this.id);

    // アローファンクション内のthisは無視され、スコープチェーンを辿って、6行目のthisを見つける
    window.setTimeout(() => {
      console.log(this.id);
    }, 1000);
  },
};

normalFn.counter();
