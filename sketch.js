let button1, button2;
let img;
let iframe;

function preload() {
  img = loadImage('asi.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  button1 = createButton('自我介紹');
  button1.position(10, 10);
  button1.size(100, 50);
  button1.style('font-size', '20px');
  button1.mousePressed(showIframe);
  button1.mouseOver(showImage);
  button1.mouseOut(hideImage);
  
  button2 = createButton('作品簡介');
  button2.position(120, 10);
  button2.size(100, 50);
  button2.style('font-size', '20px');
  button2.mouseOver(showImageLeft);
  button2.mouseOut(hideImage);
}

function draw() {
  background(220);
  if (mouseIsOverButton(button2)) {
    image(img, windowWidth / 2 - 100, windowHeight / 2 + 100, 100, 100);
  }
}

function showImage() {
  clear();
  background(220);
  image(img, 10, 70, 100, 100);
  // 重新繪製按鈕，避免被清除
  button1.position(10, 10);
  button2.position(120, 10);
}

function hideImage() {
  clear();
  background(220);
  // 重新繪製按鈕，避免被清除
  button1.position(10, 10);
  button2.position(120, 10);
}

function showIframe() {
  if (!iframe) {
    iframe = createElement('iframe');
    iframe.attribute('src', 'https://jjiu888.github.io/20250317/');
    iframe.position(windowWidth / 2 - 200, windowHeight / 2 + 100);
    iframe.size(400, 300);
  }
}

function mouseIsOverButton(button) {
  const x = button.x;
  const y = button.y;
  const w = button.width;
  const h = button.height;
  return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}

function showImageLeft() {
  clear();
  background(220);
  image(img, windowWidth - 110, windowHeight / 2 - 50, 100, 100);
  // 重新繪製按鈕，避免被清除
  button1.position(10, 10);
  button2.position(120, 10);
}

