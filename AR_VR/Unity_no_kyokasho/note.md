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
