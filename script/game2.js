const player = document.getElementById("player");
const playerLeft = document.getElementById("playerLeft");
const playerWalk1 = document.getElementById("playerWalk1");
const playerWalk2 = document.getElementById("playerWalk2");
const playerLeftWalk1 = document.getElementById("playerLeftWalk1");
const playerLeftWalk2 = document.getElementById("playerLeftWalk2");
const textBox = document.getElementById("textContainer");

const burnBtn = document.getElementById("burnBtn");
const enterBtn = document.getElementById("enterBtn");
const fire = document.getElementById("fire");
const textText = document.getElementById("textText");

const playerContainer = document.getElementById("player");
const backGround = document.getElementById("backGround");
const backGroundFront = document.getElementById("backGroundFront");

const upBtn = document.getElementById("upBtn");
const leftBtn = document.getElementById("leftBtn");
const downBtn = document.getElementById("downBtn");
const rightBtn = document.getElementById("rightBtn");

document.addEventListener("keydown", function(event) {
    switch (event.key) {
        case "ArrowUp":
            upBtn.onclick();
            break;
        case "ArrowDown":
            downBtn.onclick();
            break;
        case "ArrowLeft":
            leftBtn.onclick();
            break;
        case "ArrowRight":
            rightBtn.onclick();
            break;
    }
});

let currentX = 0;
let currentY = 0;
let currentZ = 0;

let currentPlayerX = 0;
let currentPlayerY = 0;
let currentPlayerZ = 0;

rightBtn.onclick = function() {

    if (currentX <= -2230) {
        currentPlayerX -= 40;
        textBox.style.visibility = "visible";
        playerContainer.style.transform = `translate(${currentPlayerX}px, ${currentPlayerY}px) rotate(${currentPlayerZ}deg)`;

        return
    };
   
    if (playerWalk1.style.display === "none") {
        currentX -= 40;
        playerLeft.style.display = "none";
        playerLeftWalk1.style.display = "none";
        playerLeftWalk2.style.display = "none";
        playerWalk1.style.display = "block";
        playerWalk2.style.display = "none";
    } else {
        player.style.display = "none";
        currentX -= 40;
        playerLeft.style.display = "none";
        playerLeftWalk1.style.display = "none";
        playerLeftWalk2.style.display = "none";
        playerWalk1.style.display = "none";
        playerWalk2.style.display = "block";
    }
    backGround.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${currentZ}deg)`;
    backGroundFront.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${currentZ}deg)`;
};


// Left movement
leftBtn.onclick = function() {

    if (currentX >= 0) {
        playerContainer.style.transform = `translate(${currentPlayerX}px, ${currentPlayerY}px) rotate(${currentPlayerZ}deg)`;
        return;
    }

    if (playerLeftWalk1.style.display === "none") {
        currentX += 40;
        player.style.display = "none";
        playerWalk1.style.display = "none";
        playerWalk2.style.display = "none";
        playerLeftWalk1.style.display = "block";
        playerLeftWalk2.style.display = "none";
    } else {
        currentX += 40;
        player.style.display = "none";
        playerWalk1.style.display = "none";
        playerWalk2.style.display = "none";
        playerLeftWalk1.style.display = "none";
        playerLeftWalk2.style.display = "block";
    }
    backGround.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${currentZ}deg)`;
    backGroundFront.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${currentZ}deg)`;
};



// Up movement
upBtn.onclick = function() {
    if (currentY >= 50) {
        currentPlayerY -= 40;
        playerContainer.style.transform = `translate(${currentPlayerX}px, ${currentPlayerY}px) rotate(${currentPlayerZ}deg)`;

        return
    };
   
    if (playerWalk1.style.display === "none") {
        currentY += 40;
        playerLeft.style.display = "none";
        playerLeftWalk1.style.display = "none";
        playerLeftWalk2.style.display = "none";
        playerWalk1.style.display = "block";
        playerWalk2.style.display = "none";
    } else {
        player.style.display = "none";
        currentY += 40;
        playerLeft.style.display = "none";
        playerLeftWalk1.style.display = "none";
        playerLeftWalk2.style.display = "none";
        playerWalk1.style.display = "none";
        playerWalk2.style.display = "block";
    }
    backGround.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${currentZ}deg)`;
    backGroundFront.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${currentZ}deg)`;

};

// down movement
downBtn.onclick = function() {
    if (currentY <= -8) {
        return
    };
   
    if (playerWalk1.style.display === "none") {
        currentY -= 40;
        playerLeft.style.display = "none";
        playerLeftWalk1.style.display = "none";
        playerLeftWalk2.style.display = "none";
        playerWalk1.style.display = "block";
        playerWalk2.style.display = "none";
    } else {
        player.style.display = "none";
        currentY -= 40;
        playerLeft.style.display = "none";
        playerLeftWalk1.style.display = "none";
        playerLeftWalk2.style.display = "none";
        playerWalk1.style.display = "none";
        playerWalk2.style.display = "block";
    }
    backGround.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${currentZ}deg)`;
    backGroundFront.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${currentZ}deg)`;

};




// Buttons

burnBtn.onclick = function () {
        fire.style.display = "block";
        burnBtn.style.display = "none";
        enterBtn.style.display = "none";
        textText.textContent = "Why did you do that!";   
};

enterBtn.onclick = function() {
    window.location.href = "house.html"
  };
