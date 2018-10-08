var can1;
var can2;

var ctx1;
var ctx2;

var lastTime;
var deltaTime;

var canWidth;
var canHeight;

var ane;
var fruit;

var mom;

//滑鼠座標xy
var mx;
var my;
var bgPic = new Image();
document.body.onload = game;

function game() {
  init();
  lastTime = Date.now();
  deltaTime = 0;
  gameloop();
}

function init() {
  //拿到canvas
  can1 = document.getElementById('canvas1'); //這裡放魚
  ctx1 = can1.getContext('2d');
  can2 = document.getElementById('canvas2'); //這裡放背景特效
  ctx2 = can2.getContext('2d');

  can1.addEventListener('mousemove', onmousemove, false);

  canWidth = can1.width;
  canHeight = can1.height;
  //加仔圖片
  bgPic.src = "./img/background.jpg";
  ane = new aneObj();
  ane.init();
  fruit = new fruitObj();
  fruit.init();
  mom = new momObj();
  mom.init();
  baby = new babyObj();
  baby.init();
  mx = canWidth * 0.5;
  my = canHeight * 0.5;
}

function gameloop() {
  window.requestAnimationFrame(gameloop);
  var now = Date.now();
  deltaTime = now - lastTime;
  if (deltaTime > 40) {
    deltaTime = 40;
  }
  lastTime = now;
  drawBackground();
  ane.draw();
  fruitMonitor();
  fruit.draw();
  ctx1.clearRect(0, 0, canWidth, canHeight);
  mom.draw();
  baby.draw();
  momFruitsCollision();
}

function onmousemove(e) {
  if (e.offSetX || e.layerX) {
    mx = e.offSetX == undefined ? e.layerX : e.offSetX;
    my = e.offSetY == undefined ? e.layerY : e.offSetY;
  }
}