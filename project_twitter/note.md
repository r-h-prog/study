# まとめ

## 何も動作しないボタンを作りたい場合はtype属性にbuttonを指定する

## grid-template-columns

[Qiita](https://qiita.com/kura07/items/e633b35e33e43240d363)

```css
div{
  /* 1frを2回繰り返すと言うこと */
  /* frは大きさを比率で表す新しい単位 */
  /* https://kumonosublog.com/coding/css/grid_layout_fr_auto/ */
  grid-template-columns: repeat(2, 1fr);
}
```
