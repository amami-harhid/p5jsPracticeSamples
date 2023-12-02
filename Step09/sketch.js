//【Step09】
//
//  残像を残そう
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
  // (↓) background 関数の 色のパラメータの後に 残像パラメータを追加してみる( 0 ～ 50 ～ )
  background( r, g, b );
  let _x = random( 0, W );
  let _y = random( 0, H );
  let _r = random( 10, 100 );

  let _c = color(
    random(0,255),
    random(0,255),
    random(0,255),
  ); 
  fill(_c);
  noStroke();
  ellipse( _x, _y, _r );
}