//【Step07】
//
//  変数を使って円を描こう ( ellipse )
//
const W = innerWidth;   // コンテンツを表示する領域の横の長さ
const H = innerHeight;  // コンテンツを表示する領域の横の長さ
let r, g, b;
function setup() {
  createCanvas( W, H ); 
  r = 255; g = 255; b = 255;
}
  
function draw() {
  background( r, g, b );
  // (↓) ここに円を描画する変数を書く( 値はランダム関数を使う )
  let _x = 200;
  let _y = 200;
  let _r = 50;
  ellipse( _x, _y, _r );
}