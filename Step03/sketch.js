//
//  backgroundの色を変えてみよう
//  0 ～ 255 の範囲
//
const W = innerWidth;   // コンテンツを表示する領域の横の長さ
const H = innerHeight;  // コンテンツを表示する領域の横の長さ
function setup() {
    createCanvas( W, H ); 
  }
  
  function draw() {
    background( 220, 220, 220 );  // ⇒ 色の数値を変えてみよう。
  }