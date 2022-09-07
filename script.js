let score = 0

let posX = 0;
let posY = 0;

let speed = 3;

let direction = 0;


let oposX = Math.floor(Math.random() * 450);
let oposY = Math.floor(Math.random() * 450);


function loop(){
        

    if (direction == 1){
        posX -= speed;
    }
    else if (direction == 2){
        posY -= speed;
    }
    else if (direction == 3){
        posX += speed;
    }
    else if (direction == 4){
        posY += speed;
    }



    if (posX > 450){posX -= 450}
    else if (posY > 450){posY -= 450}
    else if (posX < 0){posX -= -450}
    else if (posY < 0){posY -= -450}

    // console.log("position X : ",posX)
    // console.log("position Y : ",posY)
    // console.log()
    // console.log("objectif position X : ",oposX)
    // console.log("objectif position Y : ",oposY)


    if ((oposX-25 <= posX) && (posX <= oposX+25) && (oposY-25 <= posY) && (posY <= oposY+25)){
        oposX = Math.floor(Math.random() * 450);
        oposY = Math.floor(Math.random() * 450);
        
        

        score += 1;
        console.log("score = ",score);
       
        
        document.getElementById("score").textContent = score;
           
    
    }

    document.getElementById("objectif").style.transform = "translate(" + oposX + "px," + oposY + "px)";

    document.getElementById("snake").style.transform = "translate(" + posX + "px," + posY + "px)";

    setTimeout(loop, 20);
}

loop();


document.addEventListener("keydown", (event) => {
    if (event.keyCode === 37) {
        console.log("LEFT");
        direction = 1
        
        return;
    }
});
    
document.addEventListener("keydown", (event) => {
    if (event.keyCode === 38) {
        console.log("UP");
        direction = 2
       
        return;
    }
});

document.addEventListener("keydown", (event) => {
    if (event.keyCode === 39) {
        console.log("RIGHT");
        direction = 3
      
        return;
    }
});
    

document.addEventListener("keydown", (event) => {
    if (event.keyCode === 40) {
        console.log("DOWN");
        direction = 4
     
        return;
    }
});
    