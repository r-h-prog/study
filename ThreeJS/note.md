# ics.mediaのまとめ

## 入門編

### 3D表示用のJavaScriptを用意

WebGLのレンダリングをするためのレンダラーを作成する。

```js
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#myCanvas')
});
```

デフォルトではレンダラーのサイズが小さいため、setSize()メソッドでサイズを設定します。

```js
renderer.setSize(960, 540);
```

### シーンを作成する

シーンを作成する

```js
const scene = new THREE.Scene();
```

### カメラを作成する

```js
const camera = new THREE.PerspectiveCamera(45, 960 / 540);
```

### 立方体を作る

メッシュ：表示オブジェクト。メッシュを作成するには、ジオメトリ（形状）とマテリアル（素材）の２種類を用意する必要がある。

箱状の形状を作成するにはBoxGeometoryを使用する

```js
// new THREE.BoxGeometry(幅, 高さ, 奥行き)
const geometory = new THREE.BoxGeometry(500, 500, 500);
```

```js
const material = new THREE.MeshNormalMaterial();
```

```js
const box = new THREE.Mesh(geometry, material);
scene.add(box);
```

### アニメーション

JavaScriptでアニメーションをさせるには、時間経過で関数を呼び続ける必要がある

```js
// 初回実行
tick();

function tick(){

  // requestAnimationFrame()は引数として渡された関数を、毎フレーム実行します。
  requestAnimationFrame(tick);

  renderer.render(scene, camera);
}
```

## ライト

### THREE.DirectionalLightクラス

DirectionalLightクラスは特定の方向に放射される光。光源は無限に離れているものとして、そこから発生する光線はすべて平行になります。

```js
// 平行光源を作成
// new THREE.DirectionalLight(色, 光の強さ)
const light = new THREE.DirectionalLight(0xFFFFFF, 1);
scene.add(light);
```

### THREE.AmbientLightクラス

AmbientLightクラスは環境光源を実現するクラスです。3D空間全体に均等に光を当てます。一律に明るくしたいときに使うといいでしょう。陰影や影(cast shadow)ができないので、この光源だけだと立体感を表現することはできません。

```js
// 環境光源を作成
// new THREE.AmbientLight(色, 光の強さ)
const light = new THREE.AmbientLight(0xFFFFFF, 1.0);
```

### THREE.HemisphereLightクラス

HemisphereLightクラスはAmbientLightクラスに似ていますが、上からの光の色と下からの光の色を分けられます。下からの光は反射光として、屋外での光の見え方に近くなります。

```js
// 半球光源を作成
// new THREE.HemisphereLight(空の色, 地の色, 光の強さ)
const light = new THREE.HemisphereLight(0x888888, 0x0000FF, 1.0);
```

### THREE.PointLightクラス

PointLightクラスは単一点からあらゆる方向から放射される光源です。わかりやすい例としては、裸電球です。裸電球は周辺を明るくします。

## THREE.SpotLightクラス

SpotLightクラスは、単一の点から一方向に放出され、円錐に沿って放出される光源です。わかりやすい例としては懐中電灯や、ステージのスポットライトを想像するといいでしょう。

## 　影の利用時の設定

1. レンダラーで影を有効に設定する
2. 光源の影を有効にする
3. 影を落としたいMeshオブジェクトを設定する
4. 影を受けるMeshオブジェクトを設定する

ここで注意する必要があるのは「影を落とす」と「影を受ける」の2点です。 それぞれcastShadowプロパティー（影を落とす属性）とreceiveShadowプロパティー（影を受ける属性）をそれぞれ設定します

1. レンダラーのshadowMapプロパティーで有効にします。

 ```js
// レンダラー：シャドウを有効にする
renderer.shadowMap.enabled = true;
 ```

2. 光源に対して、castShadowプロパティーを有効にします。光源は向きをもつSpotLightやPointLightを利用します。

 ```js
// 照明を作成
const light = new THREE.SpotLight(0xFFFFFF, 2, 100, Math.PI / 4, 1);
// ライトに影を有効にする
light.castShadow = true;
scene.add(light);
 ```

3. 影をつけたいメッシュに対して、receiveShadowプロパティーを有効にします。

```js
// 床を作成
const meshFloor = new THREE.Mesh(
  new THREE.BoxGeometry(2000, 0.1, 2000),
  new THREE.MeshStandardMaterial());
// 影を受け付ける
meshFloor.receiveShadow = true;
scene.add(meshFloor);
```

4. 影を落とすメッシュに対して、castShadowプロパティーを有効にします。

```js
// オブジェクトを作成
const meshKnot = new THREE.Mesh(
  new THREE.TorusKnotGeometry(3, 1, 100, 16),
  new THREE.MeshStandardMaterial());
// 影を落とす
meshKnot.castShadow = true;
scene.add(meshKnot);
```

## カメラ

- **THREE.PerspectiveCamera** : 遠近感が適用されるカメラ
- **THREE.OrthographicCamera** : 平行投影が適用されるカメラ

### PerspectiveCamera

遠近感を表現できるカメラです。PerspectiveCameraインスタンスのfovプロパティーを設定することで、カメラの視野角を変更できます。視野角とはカメラが映し出せる範囲のことです。

```js
// new THREE.PerspectiveCamera(視野角, アスペクト比, near, far)
const camera = new THREE.PerspectiveCamera(45, width / height, 1, 2000);
```

### OrthographicCamera

OrthographicCameraは平行投影を表現できるカメラです。このカメラには遠近感がないので、手前にある3Dオブジェクトも奥にある3Dオブジェクトも同じ大きさで表示されます。

```js
// new THREE.OrthographicCamera(left, right, top, bottom, near, far)
const camera = new THREE.OrthographicCamera(-480, +480, 270, -270, 1, 1000);
```

## フォグ

### フォグの設定方法

フォグを設定するにはTHREE.Sceneオブジェクトのfogプロパティーに、THREE.Fogインスタンスを代入します。

```js
// シーンを作成
const scene = new THREE.Scene();

// フォグを設定
// new THREE.Fog(色, 開始距離, 終点距離);
scene.fog = new THREE.Fog(0x000000, 50, 2000);
```
