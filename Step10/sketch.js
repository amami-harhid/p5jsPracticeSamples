//【Step10】
//
//  横に動かす ( x座標の操作 )
//
const W = innerWidth;   // コンテンツを表示する領域の横の長さ
const H = innerHeight;  // コンテンツを表示する領域の横の長さ
let r, g, b;
function setup() {
  createCanvas( W, H ); 
  r = 255; g = 255; b = 255;
}
  
let _x = 0;
let _y = H / 2;
let _r = 50;
function draw() {
  background( r, g, b, 10 );

  // (↓) ここに x座標の操作を書く

  let _c = color(
    random(0,255),
    random(0,255),
    random(0,255),
  ); 
  fill(_c);
  noStroke();
  ellipse( _x, _y, _r );
}