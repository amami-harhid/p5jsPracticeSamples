//【Step08】
//
//  円の色を変える
//    color() 関数
//    fill() 関数
//    stroke(), noStroke() 関数
//
const W = innerWidth;   // コンテンツを表示する領域の横の長さ
const H = innerHeight;  // コンテンツを表示する領域の横の長さ
let r, g, b;
function setup() {
  createCanvas( W, H ); 
  r = 255; g = 255; b = 255;
  frameRate( 10 );  // フレーム切り替えを 標準30 から 10 に変える。
}
  
function draw() {
  background( r, g, b );
  // (↓) ここに円を描画する変数を書く( 値はランダム関数を使う )
  let _x = random( 0, W );
  let _y = random( 0, H );
  let _r = random( 10, 100 );

  // (↓) ここに色の定義、fill関数、noStroke()関数を書く。

  ellipse( _x, _y, _r );
}