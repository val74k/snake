var posX = 0
var posY = 0

var distance = 50

document.addEventListener("keydown", (event) => {
    if (event.keyCode === 37) {
        console.log("LEFT")
        posX = posX - distance
        document.getElementById("snake").style.transform = "translate(" + posX + "px," + posY + "px)";
        return;
    }
});
    
document.addEventListener("keydown", (event) => {
    if (event.keyCode === 38) {
        console.log("UP")
        posY = posY - distance
        document.getElementById("snake").style.transform = "translate(" + posX + "px," + posY + "px)";
        return;
    }
});

document.addEventListener("keydown", (event) => {
    if (event.keyCode === 39) {
        console.log("RIGHT")
        posX = posX + distance
        document.getElementById("snake").style.transform = "translate(" + posX + "px," + posY + "px)";
        return;
    }
});
    

document.addEventListener("keydown", (event) => {
    if (event.keyCode === 40) {
        console.log("DOWN")
        posY = posY + distance
        document.getElementById("snake").style.transform = "translate(" + posX + "px," + posY + "px)";
        return;
    }
});
    