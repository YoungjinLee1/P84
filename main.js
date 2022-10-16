canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

var car1_width = 120;
var car1_height = 70;
var car1_image = "car1.png";
var car1_x = 10;
var car1_y = 10;

var car2_width = 120;
var car2_height = 70;
var car2_image = "car1.png";
var car2_x = 10;
var car2_y = 100;

var background_image = "racing.jpg";

function add() {
  background_imgTag = new Image();
  background_imgTag.onload = uploadBackground;
  background_imgTag.src = background_image;

  car1_imgTag = new Image();
  car1_imgTag.onload = uploadcar1;
  car1_imgTag.src = car1_image;

  car2_imgTag = new Image();
  car2_imgTag.onload = uploadcar2;
  car2_imgTag.src = car2_image;
}

function uploadBackground() {
  ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
  ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2() {
  ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

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
  if (keyPressed == '65') {
    car2_left();
    console.log("key a");
  }
  if (keyPressed == '68') {
    car2_right();
    console.log("key d");
  }
  if (keyPressed == '83') {
    car2_down();
    console.log("key s");
  }
  if (car1_x > 800) {
    console.log("Car 1 won!");
    document.getElementById('Car status').innerHTML = "Car 1 won!";
  }
}

function car1_up() {
  if (car1_y >= 0) {
    car1_y = car1_y - 10;
    console.log("When up arrow key is pressed");
    uploadBackground();
    uploadcar1();
    uploadcar2();
  }
}

function car1_down() {
  if (car1_y <= 600) {
    car1_y = car1_y + 10;
    console.log("When down arrow key is pressed");
    uploadBackground();
    uploadcar1();
    uploadcar2();
  }
}

function car1_left() {
  if (car1_x >= 0) {
    car1_x = car1_x - 10;
    console.log("When left arrow key is pressed");
    uploadBackground();
    uploadcar1();
    uploadcar2();
  }
}

function car1_right() {
  if (car1_x <= 800) {
    car1_x = car1_x + 10;
    console.log("When right arrow key is pressed");
    uploadBackground();
    uploadcar1();
    uploadcar2();
  }
}

function car2_up() {
  if (car2_y >= 0) {
    car2_y = car2_y - 10;
    console.log("When key w is pressed");
    uploadBackground();
    uploadcar1();
    uploadcar2();
  }
}

function car2_down() {
  if (car2_y <= 600) {
    car2_y = car2_y + 10;
    console.log("When key s is pressed");
    uploadBackground();
    uploadcar1();
    uploadcar2();
  }
}

function car2_left() {
  if (car2_x >= 0) {
    car2_x = car2_x - 10;
    console.log("When key a is pressed");
    uploadBackground();
    uploadcar1();
    uploadcar2();
  }
}

function car2_right() {
  if (car2_x <= 800) {
    car2_x = car2_x + 10;
    console.log("When key d is pressed");
    uploadBackground();
    uploadcar1();
    uploadcar2();
  }
}