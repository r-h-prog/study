# Seq2Seq

## モデル

**私は山下です。**


上の文章に対してRNNを用いる。
「私」がRNNに入力される。
RNNは前情報を引き継ぐので、「は」が入力されるとき、「私」は保持したまま。これを続けて行く。
最後の「。」(EOS)が入力されたことをトリガーとして、次の文章が出力される。

結論：「。」（EOS）がトリガーになって次の文章が出力される。
