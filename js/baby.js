var babyObj = function() {
  this.x;
  this.y;
  this.angle;
  this.babyEye = new Image();
  this.babyBody = new Image();
  this.babyTail = new Image();
};
babyObj.prototype.init = function() {
  this.x = canWidth * 0.5 - 50;
  this.y = canHeight * 0.5 + 50;
  this.angle = 0;
  this.babyEye.src = './img/babyEye0.png';
  this.babyBody.src = './img/babyFade0.png';
  this.babyTail.src = './img/babyTail0.png';
};
babyObj.prototype.draw = function() {
  this.x = lerpDistance(mx, this.x, 0.995);
  this.y = lerpDistance(my, this.y, 0.995);

  //計算角度
  var deltaY = my - this.y;
  var deltaX = mx - this.x;
  var bata = Math.atan2(deltaY, deltaX) + Math.PI;
  this.angle = lerpAngle(bata, this.angle, 0.6);

  ctx1.save();
  ctx1.translate(this.x, this.y);
  ctx1.rotate(this.angle);
  ctx1.drawImage(this.babyTail, -this.babyTail.width * 0.5 + 24, -this.babyTail.height * 0.5);
  ctx1.drawImage(this.babyBody, -this.babyBody.width * 0.5, -this.babyBody.height * 0.5);
  ctx1.drawImage(this.babyEye, -this.babyEye.width * 0.5, -this.babyEye.height * 0.5);

  ctx1.restore();
};