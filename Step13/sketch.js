//【Step13】
//
//  自由落下
//  x 座標と y 座標の操作
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
let _directionX = 1;
let _directionY = 1;
function draw() {
  background( r, g, b, 10 );

  _x += _directionX * 1;
  if ( _x < 0 || W < _x ) {
    _directionX *= -1;
  }
  // (↓) この下の y 座標操作を、自由落下に変更する
  _y += _directionY * 5; // 5 動く
  if ( _y < H/2 || H < _y ) {
    _directionY *= -1;
  }
  
  
  let _c = color(
    random(0,255),
    random(0,255),
    random(0,255),
  ); 
  fill(_c);
  noStroke();
  ellipse( _x, _y, _r );
}