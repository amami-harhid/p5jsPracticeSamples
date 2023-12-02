//【Step15 final】
//
//  自由落下 する Ball-Functionを作り インスタンスとして利用
//  5個のインスタンスを配列に格納し、配列を繰り返しで利用する
//
const W = innerWidth;   // コンテンツを表示する領域の横の長さ
const H = innerHeight;  // コンテンツを表示する領域の横の長さ
let r, g, b;
const ballArray = [];   // Ball インスタンス用の配列( 空 )

function setup() {
  createCanvas( W, H ); 
  r = g = b = 0;

  // ５回繰り返す処理
  Array(5).fill().forEach(()=>{
    // x座標と 半径、パワーはランダムにする
    let _x = random(0,W);
    let _y = H; // y だけ固定
    let _r = random(20, 100);
    let _power = random(-25, -40);
    let ball = new Ball(_x, _y, _r, _power);
    ballArray.push( ball );
  });
}
  
function draw() {
  background( r, g, b, 10 );

  let _c = color(
    random(0,255),
    random(0,255),
    random(0,255),
  ); 
  fill(_c);
  noStroke();
  
  ballArray.forEach((ball)=>{
    ball.move();
    ellipse( ball.info.x, ball.info.y, ball.info.r );
  });
}

/*
 *  Ball Function
 */
function Ball(x, y, r, power) {
  this._x = x;
  this._y = y;
  this._r = r;
  this._directionX = 1;
  this._power = power;
  this._speed = this._power;
  
  // X方向の動き
  this._moveX = function() {
      this._x += this._directionX * 10;
      if( this._x < 0 || W < this._x ) {
          this._directionX *= -1;
      }
  };
  // Y方向の動き
  this._moveY = function() {
      this._y += this._speed;
      this._speed += 1;
      if( this._y > H ) {
          this._speed = this._power;
      }
  };
  // 動きをまとめる
  this.move = function() {
      this._moveX();
      this._moveY();
  }

  // Getter の定義
  // ball.info.x で _x の値を取り出せるようにしている
  // infoの中でthisは infoであるため
  // infoの中でBallのthisを使うためにselfへ退避させる
  let self = this;
  this.info = {
      get x() {
          return self._x;
      },
      get y() {
          return self._y;
      },
      get r() {
          return self._r;
      },
  };
}