//【Step04】
//
//  backgroundの色を　変数を使って指定しよう
//  0 ～ 255 の範囲
//
const W = innerWidth;   // コンテンツを表示する領域の横の長さ
const H = innerHeight;  // コンテンツを表示する領域の横の長さ

// ここに色の変数を書く

function setup() {
  createCanvas( W, H ); 
}
  
function draw() {
  
  background( 220, 220, 220 );
}