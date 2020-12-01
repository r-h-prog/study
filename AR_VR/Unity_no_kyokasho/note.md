# まとめ

## ステップ

1. 画面上のオブジェクトを全て書き出す
2. オブジェクトを動かすためのコントローラスクリプトを決める
3. オブジェクトを自動生成するためのジェネレータスクリプトを決める
4. UIを更新するための監督スクリプトを用意する
5. スクリプトを作る流れを考える

## 前のフレームから何秒たったか

```test.cs
Time.deltaTime
```

## Vector3

３次元の値をひとまとめに扱うためのクラス（正しくは構造体）
２次元の値の場合はVector2

```cs
// 使用例
Vector2 playerPos = new Vector2(3.0f, 4.0f);
```

## magnitudeメンバ変数

ベクトルを長さに変換する

```cs
// 使用例
Vector2 startPos = new Vector2(2.0f, 1.0f);
Vector2 endPos = new Vector2(8.0f, 5.0f);
Vector2 dir = endPos - startPos;

float len = dir.magnitude;
```

## Game > VSync

実行したときのフレームの描画速度をモニターの更新速度に合わせる


## Input.GetMouseButtonDown

 Input.GetMouseButtonDownはマウスがクリックされた瞬間に一度だけtrueを返す。引数が0なら左クリック、１なら右クリック、２なら中クリック

```cs
// マウスが押されたら回転速度を設定する
    if (Input.GetMouseButtonDown(0))
    {
      // マウスがクリックされると、毎度10度の速度で回転する
      this.rotSpeed = 10;
    }
    // 回転速度分、ルーレットを回転させる
    transform.Rotate(0, 0, this.rotSpeed);

    // ルーレットを減速させる（追加）
    this.rotSpeed *= 0.96f;
```

## iphoneのビルド方法

p.140あたり

## SwhipeCar

### マウスをクリックすると車が走り出して止まるスクリプト

```cs
float speed = 0;

void Start(){

}
 void Update(){
   if(Input.GetMouseButtonDown(0)){
     this.speed = 0.2f;
   }

   transform.Translate(this.speed, 0, 0);
   this.speed *= 0.98f;
 }
```

### スワイプの長さで移動距離を決めるスクリプト

```cs
float speed = 0;
Vector2 startPos;

void Start(){

}

void Update(){

  // スワイプの長さを決める
    if (Input.GetMouseButtonDown(0))
    {
      // マウスをクリックした座標
      this.startPos = Input.mousePosition;
    }
    else if (Input.GetMouseButtonUp(0))
    {
      // マウスを離した座標
      Vector2 endPos = Input.mousePosition;
      float swipeLength = endPos.x - this.startPos.x;

      // スワイプの長さを初速度に変換する
      this.speed = swipeLength / 500.0f;

      // 効果音再生
      GetComponent<AudioSource>().Play();
    }
    transform.Translate(this.speed, 0, 0);
    this.speed *= 0.98f;
}
```

### EventSystemとは

UI部品を追加するときに追加されるオブジェクト。

### RectTransform

- ピボット
  - 回転や拡大・縮小時に使う中心座標
- アンカー
  - UI部品を置くときに基準になる位置を指定するもの

### 「距離情報を表示する」スクリプト

```cs
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI; // UI部品を使うために必要

public class GameDirector : MonoBehaviour
{

  GameObject car;
  GameObject flag;
  GameObject distance;
  // Start is called before the first frame update
  void Start()
  {
    // シーン中からオブジェクトを探すために、Findメソッドを使う
    // Findメソッドはオブジェクト名を引数に取り、引数名と同じものがゲームシーン中にあれば、そのオブジェクトを返す。
    this.car = GameObject.Find("car");
    this.flag = GameObject.Find("flag");
    this.distance = GameObject.Find("Distance");
  }

  // Update is called once per frame
  void Update()
  {
    float length = this.flag.transform.position.x - this.car.transform.position.x;
    if (length >= 0)
    {
      this.distance.GetComponent<Text>().text = "ゴールまで" + length.ToString("F2") + "m";
    }
    else
    {
      this.distance.GetComponent<Text>().text = "ゲームオーバー";
    }

  }
}

```

### 効果音を鳴らすには

1. AudioSourceコンポーネントをアタッチする
   1. Play on Awakeにチェックが入っていると、ゲームが開始した時点で自動的に音が再生される
2. AudioSourceコンポーネントに効果音をセット
3. 効果音を鳴らしたいタイミングに合わせて、スクリプトからPlayメソッドを呼ぶ

```cs
// 効果音再生
      GetComponent<AudioSource>().Play();
```

### 矢印が押されたときに移動する

```cs
// 左矢印が押されたとき
if(Input.GetKeyDown(KeyCode.LeftArrow)){
  transform.Translate(-3,0,0) // 左に３動かす
}
```
