canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

var car1_width = 120;
var car1_height = 70;
var car1_image = "";
var car1_x = 10;
var car1_y = 10;

var car2_width = 120;
var car2_height = 70;
var car2_image = "";
var car2_x = 10;
var car2_y = 100;

function add() {
  background_imgTag = new Image();
  background_imgTag.onload = uploadBackground;
  background_imgTag.src = background_image;

  background_imgTag = new Image();
  background_imgTag.onload = uploadcar1;
  background_imgTag.src = car1_image;
}

function uploadBackground() {
  ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
  ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

window.addEventListener("keydown", my_keyDown);

function my_keydown(e) {
  keyPressed = e.keyCode;
  console.log(keyPressed);
  if (keyPressed == '38') {
    car1_up();
    console.log('up arrow key');
  }
  if (keyPressed == '40') {
    car1_down();
    console.log('down arrow key');
  }
  if (keyPressed == '37') {
    car1_left();
    console.log('left arrow key');
  }
  if (keyPressed == '39') {
    car1_right();
    console.log('right arrow key');
  }
  if (keyPressed == '87') {
    car2_up();
    console.log("key w");
  }
}