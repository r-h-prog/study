# まとめ

## ディープラーニング の基礎

### ニューラルネットワークの理論

#### 線形変換

![スクリーンショット 2020-11-12 19.45.19](https://i.imgur.com/Nm4Prb4.png)

![スクリーンショット 2020-11-12 19.46.05](https://i.imgur.com/JffmlB8.png)

![スクリーンショット 2020-11-12 19.46.29](https://i.imgur.com/5P0rZb1.png)

#### 非線形変換

![スクリーンショット 2020-11-12 19.47.59](https://i.imgur.com/7coLElK.png)

#### 目的関数

![スクリーンショット 2020-11-15 12.30.05](https://i.imgur.com/MmC83I6.png)

##### 平均二乗誤差

![スクリーンショット 2020-11-15 12.31.37](https://i.imgur.com/ntzDc4M.png)

##### 二値交差エントロピー

![スクリーンショット 2020-11-15 12.33.44](https://i.imgur.com/w08eTSM.png)

#####　勾配降下法

![スクリーンショット 2020-11-16 23.17.17](https://i.imgur.com/GHbdVFf.png)
![スクリーンショット 2020-11-16 23.18.54](https://i.imgur.com/79X9FHa.png)
![スクリーンショット 2020-11-16 23.21.29](https://i.imgur.com/xzQHVf8.png)
![20_2](https://i.imgur.com/kZUourw.gif)

##### ミニバッチ学習

![enter image description here](https://downloads.ctfassets.net/3dz5fr6wehdq/rJMOiuF8uLhYFV4xSAM2b/ccfb6f716a3df8fcd75adac249e065ec/20_3.gif)

![スクリーンショット 2020-11-19 22.51.39](https://i.imgur.com/BbMKUfh.png)

### Pytorch

PyTorch ではネットワーク内での計算を行う場合に、torch.nn (nn) を用いる場合と torch.nn.functional (F) を用いる場合の 2 通りの選択肢がありました。この違いは以下の通りです。



nn：調整すべきパラメータを持つ

F：調整すべきパラメータを持たない


nn.Linear で定義した全結合層は、重み \mathbf{W}W やバイアス bb といったデータから調整すべきパラメータを持っていました。それに対して、ReLU 関数や平均二乗誤差では関数の処理内でパラメータを持っていません。PyTorch ではこの基準で nn か F のどちらに格納されているか決まっているため、これを理解しておくと欲しい機能があるときに探しやすくなります。

