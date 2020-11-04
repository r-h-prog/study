# まとめ

## ARビギナー講座

### ARFoungationの基本フロー

![スクリーンショット 2020-10-25 13.31.12](https://i.imgur.com/wBx8uPR.png)

### AR Plane Manager(平面認識するときに使用するコンポーネント)

- "AR Default Plane"のPrefabを作成し、"AR Plane Manager"のPlane Prefab項目にアタッチする

### AR Session

- AR機能を管理するための必須コンポーネント
- アプリが起動した際、スマホがAR機能に対応しているか、対応しているならAR機能を初期化、起動する一連の処理を実行
- 開発者はこのコンポーネントを呼び出すことで、AR昨日の対応可否についてメッセージを出すことができる

### Session Origin

- UnityのカメラをARようのカメラとして自動的に変換するコンポーネント

### Session Origin > AR Camera

- AR Pose Driver
  - これをアタッチすることでスマホのIMU(ジャイロや加速度センサー)の機能を使って、スマホを動かした情報をAR CameraのTransform情報にアップデートすることができる

- AR Camera Manager
  - スマホのカメラをコントローするための機能
  - Light Estimation Mode
    - カメラが取得した映像から擬似光源を作り、それをARで表示させたCGオブジェクトの光源に利用する設定が出来ます。
- AR Camera Background
  - カメラ映像に対して背景を加えることができる機能
  - Use Custom Material
    - 背景に特定の色などを指定するときに使用する

![スクリーンショット 2020-10-25 14.18.42](https://i.imgur.com/3gqtNtN.png)

### AR Tracked Image Component(画像認識するときに使用するコンポーネント)

- Serialized Livrary
  - 認識させたい画像を登録します。専用のファイルを使用します。
- Max number Of Moving Images
  - ARマーカを同時認識させる上限数を指定します。
- Tracked Image Prefab
  - 認識したときに表示するオブジェクトのPrefabを登録します。

![スクリーンショット 2020-10-25 14.30.38](https://i.imgur.com/60YLLRh.png)

#### Referenced Image Libraryの作成

- プロジェクト内でCreate > XR > Referenced Image Libraryを作成
- Specify Sizeにチェックを入れPhisycal Sizeを入力

### 作成したReferenced Image LibraryをAR Tracked Image Componentに登録し、max numberの値も変更
