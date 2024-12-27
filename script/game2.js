<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game2</title>
    <link rel="stylesheet" href="style/game2.css">
</head>
<body>

    <div id="gameContainer">
        <img id="backGround" src="img/bg3.jpg" alt="">
        <img id="backGroundFront" src="img/bg3Front.png" alt="">
        <div id="playerContainer">
        <img id="player" src="img/character/Idle (1).png" alt="">
        <img id="playerWalk1" src="img/character/Walk (2).png" alt="">
        <img id="playerWalk2" src="img/character/Walk (13).png" alt="">
        <img id="playerLeft" src="img/character/IdleLeft (1).png" alt="">
        <img id="playerLeftWalk1" src="img/character/WalkLeft (2).png" alt="">
        <img id="playerLeftWalk2" src="img/character/WalkLeft (13).png" alt="">
        <img id="fire" src="img/fire2.png" alt="">
        </div>
    </div>

  
    <div class="controllerBtn" id="controllerContainer">
        <button id="upBtn">Up</button>
        <br>
        <button id="leftBtn">Left</button>
        <button id="downBtn">Down</button>
        <button id="rightBtn">Right</button>

    </div>

      <!-- Text area -->
      <div id="textContainer">
        <h2 id="textText">You find a house.</h2>
        <button id="enterBtn">Enter house</button>
        <button id="burnBtn">Burn house</button>
        </div>  
    

    
    
</body>

<script src="script/game2.js"></script>
</html>
