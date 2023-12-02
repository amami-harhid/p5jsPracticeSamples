//【Step14】
//
//  自由落下 する Ball-Functionを作り インスタンスとして利用
//
const W = innerWidth;   // コンテンツを表示する領域の横の長さ
const H = innerHeight;  // コンテンツを表示する領域の横の長さ
let r, g, b;
function setup() {
  createCanvas( W, H ); 
  r = g = b = 0;
}
  
let _x = 0;
let _y = H;
let _r = 50;
let _directionX = 1;
const _power = -25;
let _speed = _power;

function draw() {
  background( r, g, b, 10 );

  // (↓) x, y 座標の操作を Ball　Function化する。
  _x += _directionX * 10;
  if ( _x < 0 || W < _x ) {
    _directionX *= -1;
  }
  
  _y += _speed;
  _speed += 1;
  if( _y > H ) {
    _speed = _power;
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

// (↓) Ball Function を書く