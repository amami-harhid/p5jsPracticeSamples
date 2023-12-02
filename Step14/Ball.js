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