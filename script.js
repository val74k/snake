var posX = 0;
var posY = 0;

var speed = 5;

var direction = 0





function loop(){
        

    if (direction == 1){
        posX -= speed
    }
    else if (direction == 2){
        posY -= speed
    }
    else if (direction == 3){
        posX += speed
    }
    else if (direction == 4){
        posY += speed
    }


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
    