const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const scoreDisplay = document.getElementById("score");

let score = 0;
let jumpCount = 0; 

function jump() {
    if (!dino.classList.contains("jump")) {
        dino.classList.add("jump");
        setTimeout(function () {
            dino.classList.remove("jump");
        }, 300);
        jumpCount++; 
        scoreDisplay.innerText = "Score:" + jumpCount; 
    }
}

let isAlive = setInterval(function () {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        clearInterval(isAlive);
        alert("Game Over!");
    }
}, 10);

document.addEventListener("keydown", function (event) {
    if (event.code === 'Space') {
        jump();
    }
});

setInterval(function () {
    cactus.style.left = parseInt(window.getComputedStyle(cactus).getPropertyValue("left")) - 3 + "px";
    
    if (parseInt(window.getComputedStyle(cactus).getPropertyValue("left")) < 0) {
        score++;
        scoreDisplay.innerText = score;
    }
}, 10);
