var fixedRect, movingRect;

function setup() {
  createCanvas(800, 400);
  fixedRect = createSprite(200, 200, 80, 40);
  movingRect = createSprite(500, 200, 40, 80);
}

function draw() {
  background("lightblue");

  textSize(20);

  text("Width of fixed object: " + fixedRect.width / 2, 400, 100);
  text("Width of moving object: " + movingRect.width / 2, 400, 150);
  text("diffrence x position:" + (movingRect.x - fixedRect.x), 400, 200);


  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if (movingRect.x - fixedRect.x <= (movingRect.width + fixedRect.width) / 2
    && fixedRect.x - movingRect.x <= (movingRect.width + fixedRect.width) / 2
    && movingRect.y - fixedRect.y <= (movingRect.height + fixedRect.height) / 2
    && fixedRect.y - movingRect.y <= (movingRect.height + fixedRect.height) / 2) {
    movingRect.shapeColor = "green"
    fixedRect.shapeColor = "green"
  }
  else {
    movingRect.shapeColor = "yellow"
    fixedRect.shapeColor = "red"
  }

  drawSprites();
}