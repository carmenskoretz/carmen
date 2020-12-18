
function catModal() {
var close = document.getElementsByClassName("close")[0];
var modal = document.getElementById("catModal");
modal.style.display = "block";

close.onclick = function() {
  modal.style.display = "none";
}
}

function tailModal() {
var close = document.getElementsByClassName("close")[1];
var modal = document.getElementById("tailModal");
modal.style.display = "block";

close.onclick = function() {
  modal.style.display = "none";
}
}

function mushroom1Modal() {
var close = document.getElementsByClassName("close")[2];
var modal = document.getElementById("mushroom1Modal");
modal.style.display = "block";

close.onclick = function() {
  modal.style.display = "none";
}
}

function mushroom2Modal() {
var close = document.getElementsByClassName("close")[3];
var modal = document.getElementById("mushroom2Modal");
modal.style.display = "block";

close.onclick = function() {
  modal.style.display = "none";
}
}

function rabbitModal() {
var close = document.getElementsByClassName("close")[4];
var modal = document.getElementById("rabbitModal");
modal.style.display = "block";

close.onclick = function() {
  modal.style.display = "none";
}
}








let snowflakes = []; // array to hold snowflake objects

function setup() {

  let p = createCanvas(1500, 6700);
  fill(234, 160, 250);
  noStroke();
  p.position(0,0,"absolute");
}

function draw() {
 clear();
  let t = frameCount / 60; // update time

  // create a random number of snowflakes each frame
  for (let i = 0; i < random(1); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }
}

// snowflake class
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(20, 2 * PI);
  this.size = random(3, 6);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 4, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.9; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 1.2);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}
