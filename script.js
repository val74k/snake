if (document.cookie.length > 0) {
  let score_tablecookie = document.cookie.split(";");
  for (var i = 0; i < score_tablecookie.length; i++) {
    if (score_tablecookie[i].indexOf("last_score=") != -1) {
      last_score = score_tablecookie[i].substring(
        last_score.length + score_tablecookie[i].indexOf(last_score),
        score_tablecookie[i].length
      );
    }
    if (score_tablecookie[i].indexOf("best_score=") != -1) {
      best_score = score_tablecookie[i].substring(
        best_score.length + score_tablecookie[i].indexOf(best_score),
        score_tablecookie[i].length
      );
    }
  }
  document.getElementById("last_score").textContent = last_score;
  document.getElementById("best_score").textContent = best_score;
}

console.log("best score : ", best_score);
console.log("last score : ", last_score);

let score = 0;

let posX = 0;
let posY = 0;

let speed = 3;
let running = speed;

let direction = 0;

let margin = 50;

let oposX = Math.floor(Math.random() * 450);
let oposY = Math.floor(Math.random() * 450);

let mode = 0;

let div_name = 1;




// console.log(navigator.userAgent);
// navigator = navigator.userAgent;

// if (navigator.includes("Firefox")) {
//   speed += 5;
//   console.log("firefox");
// } else if (navigator.includes("Chrome")) {
//   console.log("chrome");
// }




// function godmode() {
//   speed = 5;

//   if (posX > 450) {
//     posX -= 450;
//   } else if (posY > 450) {
//     posY -= 450;
//   } else if (posX < 0) {
//     posX -= -450;
//   } else if (posY < 0) {
//     posY -= -450;
//   }
// }

function clear() {
  if (score > best_score) {
    best_score = score;
  }
  last_score = score;

  score = 0;

  running = 0;
  posY = 0;
  posX = 0;
  speed = 3;

  console.log("posX : ", posX);
  console.log("posY : ", posY);

  document.getElementById("last_score").textContent = last_score;
  document.getElementById("score").textContent = score;
  document.getElementById("score_center").textContent = score;
  document.getElementById("best_score").textContent = best_score;

  document.cookie = "last_score =" + last_score;
  document.cookie = "best_score =" + best_score;
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
    document.getElementById("score_center").textContent = score;

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

function button_top(){
  console.log("UP");
  running = speed;
  direction = 2;
}

function button_right(){
  console.log("RIGHT");
  running = speed;
  direction = 3;
}

function button_down(){
  console.log("DOWN");
  running = speed;
  direction = 4;
}

function button_left(){
  console.log("LEFT");
  running = speed;
  direction = 1;
}


document.addEventListener("keydown", (event) => {
  if (event.keyCode === 37) {
    console.log("LEFT");
    running = speed;
    direction = 1;

    return;
  } else if (event.keyCode === 38) {
    console.log("UP");
    running = speed;
    direction = 2;

    return;
  } else if (event.keyCode === 39) {
    console.log("RIGHT");
    running = speed;
    direction = 3;

    return;
  } else if (event.keyCode === 40) {
    console.log("DOWN");
    running = speed;
    direction = 4;

    return;
  }
  //            ZQSD
  //
  else if (event.keyCode === 81) {
    console.log("LEFT");
    running = speed;
    direction = 1;

    return;
  } else if (event.keyCode === 90) {
    console.log("UP");
    running = speed;
    direction = 2;

    return;
  } else if (event.keyCode === 68) {
    console.log("RIGHT");
    running = speed;
    direction = 3;

    return;
  } else if (event.keyCode === 83) {
    console.log("DOWN");
    running = speed;
    direction = 4;

    return;
  }
});

