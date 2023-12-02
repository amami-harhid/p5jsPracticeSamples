/*
* 円を描いてみよう
*/
const W = innerWidth;
const H = innerHeight;
let r, g, b;
let ball;  // ball インスタンスを入れておくための変数

function setup() {
    createCanvas(W, H);
    r = 255; g = 255; b = 255;
  
    // Ball をもとに インスタンス ball を作る
    ball = new Ball(0, H, 50, 25);
  }

  function draw() {
    background(r,g,b);
    // ↓ ここに円を描くコードを記述する
    fill('red');
    stroke('red');
    
    // インスタンス ball の x,y,r を取り出して円を描く。
    ellipse(ball.info.x, ball.info.y, ball.info.r);
  
    // インスタンス ball の move 命令を実行する( x, y を変化させる )
    ball.move(); 
  }