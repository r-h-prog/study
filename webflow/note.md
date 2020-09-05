# まとめ

## webflow について

### プロパティを継承したクラスの作成

クラスをコピーした後に、rename

### 理想の画像サイズ

300kb 未満

[画像圧縮ツール:imagecompressor.com](https://imagecompressor.com/ja/)

### 画面を縮小した時にレイアウトが崩れる場合

minwidth などの値を設定する
margin,padding を設定する

### hover した時に画面が全体的に下がったり、上がったりする場合

通常時でも hover 時の追加要素を透明状態で入れておく

### fivicon のサイズ

32\*32

### webclip のサイズ

256\*256

### description の文字数

155 文字以内

### flex child 要素の高さが合わない問題

flex child はデフォルトで親要素の高さいっぱいまでストレッチする。
その時 child 要素の高さを設定することで解決できることがある。
