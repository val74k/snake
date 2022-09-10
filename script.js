let score = 0;
let last_score = 0;
let best_score = 0;

let posX = 0;
let posY = 0;

let speed = 3;
let running = speed;

let direction = 0;

let margin = 45;

let oposX = Math.floor(Math.random() * 450);
let oposY = Math.floor(Math.random() * 450);

let mode = 0;
let modename = "hard";

let div_name = 1;

function godmode() {
  speed = 5;

  if (posX > 450) {
    posX -= 450;
  } else if (posY > 450) {
    posY -= 450;
  } else if (posX < 0) {
    posX -= -450;
  } else if (posY < 0) {
    posY -= -450;
  }
}

function clear() {
  if (score > best_score) {
    best_score = score;
  }
  last_score = score;
  running = 0;
  posY = 0;
  posX = 0;
  speed = 3;
  score = 0;
  document.getElementById("last_score").textContent = last_score;
  document.getElementById("score").textContent = score;
  document.getElementById("best_score").textContent = best_score;
}

function loop() {
  if (direction == 1) {
    posX -= running;
  } else if (direction == 2) {
    posY -= running;
  } else if (direction == 3) {
    posX += running;
  } else if (direction == 4) {
    posY += running;
  }

  if (posX > 450) {
    clear();
  } else if (posY > 450) {
    clear();
  } else if (posX < 0) {
    clear();
  } else if (posY < 0) {
    clear();
  }

  // console.log("position X : ",posX)
  // console.log("position Y : ",posY)
  // console.log()
  // console.log("objectif position X : ",oposX)
  // console.log("objectif position Y : ",oposY)

  if (
    oposX - margin <= posX &&
    posX <= oposX + margin &&
    oposY - margin <= posY &&
    posY <= oposY + margin
  ) {
    oposX = Math.floor(Math.random() * 450);
    oposY = Math.floor(Math.random() * 450);

    score += 1;
    speed += 1;
    console.log("score = ", score);
    document.getElementById("score").textContent = score;

    div_name += 1;
    var new_div = document.createElement("div");
    new_div.className = "test";
  }

  document.getElementById("objectif").style.transform =
    "translate(" + oposX + "px," + oposY + "px)";

  document.getElementById("snake").style.transform =
    "translate(" + posX + "px," + posY + "px)";

  setTimeout(loop, 20);
}

loop();

document.addEventListener("keydown", (event) => {
  if (event.keyCode === 37) {
    console.log("LEFT");
    running = speed;
    direction = 1;

    return;
  }
});

document.addEventListener("keydown", (event) => {
  if (event.keyCode === 38) {
    console.log("UP");
    running = speed;
    direction = 2;

    return;
  }
});

document.addEventListener("keydown", (event) => {
  if (event.keyCode === 39) {
    console.log("RIGHT");
    running = speed;
    direction = 3;

    return;
  }
});

document.addEventListener("keydown", (event) => {
  if (event.keyCode === 40) {
    console.log("DOWN");
    running = speed;
    direction = 4;

    return;
  }
});
