//【Step06】
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
  // (↓) ここに円を描画する変数を書く

  ellipse( 200, 200, 50);
}