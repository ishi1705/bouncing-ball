// Create global variables for ball position, ball properties
let ball = {
  x: 100,
  y: 100,
  diameter: 50,
  xSpeed: 3,
  ySpeed: 5
};

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('purple');

  // Create a ball on the screen
   fill('lightpink')
  ellipse(ball.x, ball.y, ball.diameter, ball.diameter);

  // Move the ball continuously until it reaches the boundary of the screen

   ball.x += ball.xSpeed;
  ball.y += ball.ySpeed;
  
  // When the ball reaches the boundary, reverse the movement
  if (ball.x < ball.diameter / 2 || ball.x > width - ball.diameter / 2) {
    ball.xSpeed *= -1;
  }

  if (ball.y < ball.diameter / 2 || ball.y > height - ball.diameter / 2) {
    ball.ySpeed *= -1;
  }
}



