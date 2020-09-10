let noramlFn;

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
