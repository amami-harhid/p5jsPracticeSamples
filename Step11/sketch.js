//【Step11】
//
//  横に動かす ( x座標の操作 )
//  端についたら反対方向へ
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

  _x += 1;
  // (↓) ここに 右端、左端に円中心が到達したときの操作を書く

  
  let _c = color(
    random(0,255),
    random(0,255),
    random(0,255),
  ); 
  fill(_c);
  noStroke();
  ellipse( _x, _y, _r );
}