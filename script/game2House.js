const player = document.getElementById("player");
const playerLeft = document.getElementById("playerLeft");
const playerWalk1 = document.getElementById("playerWalk1");
const playerWalk2 = document.getElementById("playerWalk2");
const playerLeftWalk1 = document.getElementById("playerLeftWalk1");
const playerLeftWalk2 = document.getElementById("playerLeftWalk2");
const textBox = document.getElementById("textContainer");
const playerSleep = document.getElementById("sleep1")

const sleepBtn = document.getElementById("sleepBtn");
const burnBtn = document.getElementById("burnBtn");
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

// Define the off-limit area
const offLimit = {
    xStart: -60,  // Starting x-coordinate of the restricted area
    xEnd: 60,     // Ending x-coordinate of the restricted area
    yStart: 300,   // Starting y-coordinate of the restricted area
    yEnd: 400      // Ending y-coordinate of the restricted area
};

// BedArea
const bedArea = {
    xStart: 200,  // Starting x-coordinate of the restricted area
    xEnd: 400,     // Ending x-coordinate of the restricted area
    yStart: 550,   // Starting y-coordinate of the restricted area
    yEnd: 660,      // Ending y-coordinate of the restricted area
};


// Owen Area
const owenArea = {
    xStart: -60,  // Starting x-coordinate of the restricted area
    xEnd: 400,     // Ending x-coordinate of the restricted area
    yStart: 550,   // Starting y-coordinate of the restricted area
    yEnd: 860,      // Ending y-coordinate of the restricted area
};

// Door Area
const doorArea = {
    xStart: 80,  // Starting x-coordinate of the restricted area
    xEnd: -40,     // Ending x-coordinate of the restricted area
    yStart: -80,   // Starting y-coordinate of the restricted area
    yEnd: 80,      // Ending y-coordinate of the restricted area
};


// Helper function to check if a position is off-limit
function isOffLimit(nextX, nextY) {
    return nextX >= offLimit.xStart && nextX <= offLimit.xEnd && nextY >= offLimit.yStart && nextY <= offLimit.yEnd;
}

// Helper function to check if a position is within the bed area
function isBed(nextX, nextY) {
    return nextX >= bedArea.xStart && nextX <= bedArea.xEnd &&
           nextY >= bedArea.yStart && nextY <= bedArea.yEnd;
}

// Helper function to check if a position is within the Owen area
function isOwen(nextX, nextY) {
    return nextX >= owenArea.xStart && nextX <= owenArea.xEnd &&
           nextY >= owenArea.yStart && nextY <= owenArea.yEnd;
}

// Helper function to check if a position is within the Owen area
function isDoor(nextX, nextY) {
    return nextX >= doorArea.xStart && nextX <= doorArea.xEnd &&
           nextY >= doorArea.yStart && nextY <= doorArea.yEnd;
}



// Right movement
rightBtn.onclick = function() {
    const nextX = currentX - 40;
    const nextY = currentY;

    if (isOwen(nextX, nextY)) {
        return;
    }

    if (isBed(nextX, nextY)) {
        textBox.style.visibility = "visible";
        textText.textContent = "You are in the bed area!";
        return;
    }

    if (isDoor(nextX, nextY)) {
        textBox.style.visibility = "visible";
        textText.textContent = "You are by the door.";
        return;
    }


    if (currentX <= -440) {
        currentPlayerX -= 40;
        playerContainer.style.transform = `translate(${currentPlayerX}px, ${currentPlayerY}px) rotate(${currentPlayerZ}deg)`;
        return;
    }

    if (playerWalk1.style.display === "none") {
        currentX -= 40;
        playerLeft.style.display = "none";
        playerSleep.style.display = "none";
        playerLeftWalk1.style.display = "none";
        playerLeftWalk2.style.display = "none";
        playerWalk1.style.display = "block";
        playerWalk2.style.display = "none";
    } else {
        player.style.display = "none";
        currentX -= 40;
        playerLeft.style.display = "none";
        playerSleep.style.display = "none";
        playerLeftWalk1.style.display = "none";
        playerLeftWalk2.style.display = "none";
        playerWalk1.style.display = "none";
        playerWalk2.style.display = "block";
    }
    backGround.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${currentZ}deg)`;
    backGroundFront.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${currentZ}deg)`;

    console.log(`nextX: ${nextX}, nextY: ${nextY}`); 
};

// Left movement
leftBtn.onclick = function() {
    const nextX = currentX + 40;
    const nextY = currentY;

    if (isOffLimit(nextX, nextY)) {
        return;
    }

    if (isBed(nextX, nextY)) {
        textBox.style.visibility = "visible";
        textText.textContent = "You are by the bed.";
        return;
    }

    if (isOwen(nextX, nextY)) {
        return;
    }

    if (isDoor(nextX, nextY)) {
        textBox.style.visibility = "visible";
        textText.textContent = "You are by the door.";
        return;
    }


    if (currentX >= 400) {
        currentPlayerX += 40;
        playerContainer.style.transform = `translate(${currentPlayerX}px, ${currentPlayerY}px) rotate(${currentPlayerZ}deg)`;
        return;
    }

    if (playerLeftWalk1.style.display === "none") {
        currentX += 40;
        player.style.display = "none";
        playerSleep.style.display = "none";
        playerWalk1.style.display = "none";
        playerWalk2.style.display = "none";
        playerLeftWalk1.style.display = "block";
        playerLeftWalk2.style.display = "none";
    } else {
        currentX += 40;
        player.style.display = "none";
        playerSleep.style.display = "none";
        playerWalk1.style.display = "none";
        playerWalk2.style.display = "none";
        playerLeftWalk1.style.display = "none";
        playerLeftWalk2.style.display = "block";
    }
    backGround.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${currentZ}deg)`;
    backGroundFront.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${currentZ}deg)`;

    console.log(`nextX: ${nextX}, nextY: ${nextY}`); 
};

// Up movement
upBtn.onclick = function() {
    const nextX = currentX;
    const nextY = currentY + 40;

    if (isOffLimit(nextX, nextY)) {
        return;
    }

    if (isBed(nextX, nextY)) {
        textBox.style.visibility = "visible";
        textText.textContent = "You are by the bed.";
        return;
    }

    if (isOwen(nextX, nextY)) {
        return;
    }

    if (isDoor(nextX, nextY)) {
        textBox.style.visibility = "visible";
        textText.textContent = "You are by the door.";
        return;
    }


    if (currentY >= 680) {
        currentPlayerY -= 40;
        playerContainer.style.transform = `translate(${currentPlayerX}px, ${currentPlayerY}px) rotate(${currentPlayerZ}deg)`;
        return;
    }

    if (playerWalk1.style.display === "none") {
        currentY += 40;
        playerSleep.style.display = "none";
        playerLeft.style.display = "none";
        playerLeftWalk1.style.display = "none";
        playerLeftWalk2.style.display = "none";
        playerWalk1.style.display = "block";
        playerWalk2.style.display = "none";
    } else {
        player.style.display = "none";
        playerSleep.style.display = "none";
        currentY += 40;
        playerLeft.style.display = "none";
        playerLeftWalk1.style.display = "none";
        playerLeftWalk2.style.display = "none";
        playerWalk1.style.display = "none";
        playerWalk2.style.display = "block";
    }
    backGround.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${currentZ}deg)`;
    backGroundFront.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${currentZ}deg)`;

    console.log(`nextX: ${nextX}, nextY: ${nextY}`); 
};

// Down movement
downBtn.onclick = function() {
    const nextX = currentX;
    const nextY = currentY - 40;

    if (isOffLimit(nextX, nextY)) {
        return;
    }

    if (isBed(nextX, nextY)) {
        textBox.style.visibility = "visible";
        textText.textContent = "You are by the bed.";
        return;
    }

    if (isOwen(nextX, nextY)) {
        return;
    }


    if (isDoor(nextX, nextY)) {
        console.log("Door");
        textBox.style.visibility = "visible";
        textText.textContent = "You are by the door.";
        return;
    }


    if (currentY <= 10) {
        return;
    }

    if (playerWalk1.style.display === "none") {
        currentY -= 40;
        playerLeft.style.display = "none";
        playerSleep.style.display = "none";
        playerLeftWalk1.style.display = "none";
        playerLeftWalk2.style.display = "none";
        playerWalk1.style.display = "block";
        playerWalk2.style.display = "none";
    } else {
        player.style.display = "none";
        playerSleep.style.display = "none";
        currentY -= 40;
        playerLeft.style.display = "none";
        playerLeftWalk1.style.display = "none";
        playerLeftWalk2.style.display = "none";
        playerWalk1.style.display = "none";
        playerWalk2.style.display = "block";
    }
    backGround.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${currentZ}deg)`;
    backGroundFront.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${currentZ}deg)`;

    console.log(`nextX: ${nextX}, nextY: ${nextY}`);    
};

// Buttons
sleepBtn.onclick = function () {
    textText.textContent = "You are sleeping";
    sleepBtn.textContent = "Get up"

    player.style.display = "none";
    currentPlayerY = -130;
    currentPlayerX = -30;
    playerLeft.style.display = "none";
    playerLeftWalk1.style.display = "none";
    playerLeftWalk2.style.display = "none";
    playerWalk1.style.display = "none";
    playerWalk2.style.display = "none";
    playerSleep.style.display = "block";

    playerSleep.style.transform = `translate(${currentPlayerX}px, ${currentPlayerY}px) rotate(${currentPlayerZ}deg)`;

};

burnBtn.onclick = function() {
    textText.textContent = "You dead!";
    burnBtn.style.visibility = "hidden";
    sleepBtn.style.visibility = "hidden";
    fire.style.display = "block";


};
