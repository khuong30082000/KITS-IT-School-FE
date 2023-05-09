var game = new Phaser.Game(840, 630, Phaser.CANVAS);

var minPoleGap = 100;
var maxPoleGap = 300;
var plays = document.getElementById('play');
var start = document.getElementById('start');
var ballPower = 60;
var ballGravity = 100;

plays.onclick = () => {
    start.style.visibility = "hidden";
};




var play = function(game) {};
play.prototype = {
    preload: function() {

        game.load.image("background", "img/BG2.jpg");
        game.load.image("ninja", "img/ninja.png");
        game.load.image("pole", "img/poles.png");
        game.load.image("powerbar", "img/powerbar.png");
        game.load.image("wave1", "img/wave1.png");
        game.load.image("wave2", "img/wave2.png");
        game.load.image("wave3", "img/wave3.png");

        game.load.audio("drop", "audio/Dropping.mp3");
        game.load.audio("jumpsound", "audio/drip.mp3");
        //game.load.audio("bgmusic", "audio/vltk.mp3");
        game.load.audio("bgmusic", ['audio/vltk.mp3', 'audio/vltk.ogg']);

    },
    create: function() {

        game.add.tileSprite(0, 0, 840, 650, "background");
        wave3 = game.add.tileSprite(0, 530, 840, 120, "wave3");
        ninjaJumping = false;
        ninjaFallingDown = false;
        score = 0;
        placedPoles = 0;
        poleGroup = game.add.group();
        topScore = localStorage.getItem("topFlappyScore") == null ? 0 : localStorage.getItem("topFlappyScore");
        scoreText = game.add.text(450, 100, "0", {
            font: "bold 35px Arial",
            fill: "#fff",
        });

        drop = game.sound.add("drop");
        jumpSound = game.sound.add("jumpsound");
        bgmusic = game.sound.play("bgmusic");


        game.physics.startSystem(Phaser.Physics.ARCADE);
        ninja = game.add.sprite(100, 0, "ninja");
        wave2 = game.add.tileSprite(0, 540, 840, 120, "wave2");
        wave1 = game.add.tileSprite(0, 550, 840, 120, "wave1");
        ninja.anchor.set(0.5);
        ninja.lastPole = 1;
        game.physics.arcade.enable(ninja);
        // game.physics.arcade.enable(wave1);
        var ninjaGravity = 800;
        ninja.body.gravity.y = ninjaGravity;
        spacePress();
        game.input.onDown.add(prepareToJump, this);
        addPole(100);

        game.physics.enable(wave1, Phaser.Physics.ARCADE);
        game.physics.enable(wave2, Phaser.Physics.ARCADE);
        game.physics.enable(wave3, Phaser.Physics.ARCADE);


    },
    update: function() {
        updateScore();
        game.physics.arcade.collide(ninja, poleGroup, checkLanding);
        if (ninja.y > game.height) {
            die();
        } else if (ninja.y > 450) {
            something();
        }



        if (wave1.y > game.height - 80) {
            wave1.body.gravity.y = -10;
        } else {
            wave1.body.velocity.y = 20;
        }

        if (wave2.y > game.height - 90) {
            wave2.body.gravity.y = -30;
        } else {
            wave2.body.velocity.y = 30;
        }

        if (wave3.y > game.height - 120) {
            wave3.body.gravity.y = -30;
        } else {
            wave3.body.velocity.y = 30;
        }

    }

}

game.state.add("Play", play);
game.state.start("Play");



var something = (function() {
    var executed = false;
    return function(value) {
        // if an argument is not present then
        if (arguments.length == 0) {
            if (!executed) {
                executed = true;
                //Do stuff here only once unless reset
                console.log("Hello World!");
                drop.play();
            } else return;

        } else {
            // otherwise allow the function to fire again
            executed = value;
            return;
        }
    }
})();

function spacePress() {
    space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    space.onDown.add(prepareToJump, this);
    space.onUp.add(jump, this);
}

function removeSpacePress() {
    space.onDown.remove(prepareToJump, this);
    space.onUp.remove(jump, this);
}

function notMoveNinja() {
    ninja.body.velocity.x = 0;
}

//ninja plus velocity x
function removeEventListenerWhenFly() {
    //Do stuff here only once unless reset
    ninja.body.velocity.x = 5;
    document.removeEventListener("keydown", keyDownHandler);
    document.removeEventListener("keyup", keyUpHandler);
    removeSpacePress();
};

function updateScore() {
    var showScore = document.getElementById('score');
    var showTopScore = document.getElementById('topScore');
    //score in game
    scoreText.text = score;
    //score when lose
    showScore.innerHTML = "Score: " + score;
    showTopScore.innerHTML = "Best: " + topScore;
}



function prepareToJump() {
    if (ninja.body.velocity.y == 0) {
        notMoveNinja();

        powerBar = game.add.sprite(ninja.x, ninja.y - 50, "powerbar");
        powerBar.width = 0;
        powerTween = game.add.tween(powerBar).to({
            width: 100
        }, 1000, "Linear", true);

        game.input.onDown.remove(prepareToJump, this);
        game.input.onUp.add(jump, this);

        document.addEventListener('keydown', keyDownHandler);
        document.addEventListener('keyup', keyUpHandler);

    }
}
// keyDown move
function keyDownHandler(event) {
    //rightPressed
    if (event.keyCode == 39) {
        ninja.body.velocity.x = 200;
        //leftPressed
    } else if (event.keyCode == 37) {
        ninja.body.velocity.x = -200;
    }
    //game.input.keyboard.removeKeyCapture(Phaser.Keyboard.TWO);   
}
// keyUp move
function keyUpHandler(event) {
    //rightPressed
    if (event.keyCode == 39) {
        ninja.body.velocity.x = 0;
        //leftPressed
    } else if (event.keyCode == 37) {
        ninja.body.velocity.x = 0;
    }
}

function jump() {
    ninjaJumpPower = -powerBar.width * 3 - 100;
    powerBar.destroy();
    game.tweens.removeAll();
    ninja.body.velocity.y = ninjaJumpPower * 2;
    ninjaJumping = true;
    powerTween.stop();
    game.input.onUp.remove(jump, this);
    jumpSound.play();
    removeEventListenerWhenFly();
}

function addNewPoles() {
    var maxPoleX = 0;
    poleGroup.forEach(function(item) {
        maxPoleX = Math.max(item.x, maxPoleX)
    });
    var nextPolePosition = maxPoleX + game.rnd.between(minPoleGap, maxPoleGap);
    addPole(nextPolePosition);
}

function addPole(poleX) {
    if (poleX < game.width * 2) {
        placedPoles++;
        var pole = new Pole(game, poleX, game.rnd.between(250, 380));
        game.add.existing(pole);
        pole.anchor.set(0.5, 0);
        poleGroup.add(pole);
        var nextPolePosition = poleX + game.rnd.between(minPoleGap, maxPoleGap);
        addPole(nextPolePosition);
    }
}

function waveMove(w, p) {
    setInterval(() => {
        w.body.velocity.y = -200;
    }, 1500);

}

function checkLanding(n, p) {
    if (p.y >= n.y + n.height / 2) {
        var border = n.x - p.x;
        notMoveNinja();
        document.addEventListener('keydown', keyDownHandler);
        document.addEventListener('keyup', keyUpHandler);
        spacePress();
        if (Math.abs(border) > 44) {
            n.body.velocity.x = border * 2;
            n.body.velocity.y = -200;

        }
        var poleDiff = p.poleNumber - n.lastPole;
        if (poleDiff > 0) {
            score += Math.pow(2, poleDiff - 1);
            updateScore();
            n.lastPole = p.poleNumber;
        }
        if (poleDiff > 1) {
            score += Math.pow(2, Math.floor(poleDiff - 1));
            scorePlus = Math.pow(2, Math.floor(poleDiff));
            n.lastPole = p.poleNumber;
            scorePlus = game.add.text(400, 150, "+" + scorePlus, {
                font: "bold 23px sanserif",
                fill: "#3c5abd",
            });
            setTimeout(() => {
                scorePlus.destroy();
            }, 500);

        }
        if (ninjaJumping) {
            ninjaJumping = false;
            game.input.onDown.add(prepareToJump, this);
        }

    } else {
        ninjaFallingDown = true;
        // drop.play();
        poleGroup.forEach(function(item) {
            item.body.velocity.x = 0;
        });
    }
}

function handleMoving() {
    if (this.keys.w.isDown) { // Or this.keys.w.isUp) 

        console.log("w"); // Whatever you want

    } else if (this.keys.s.isDown) {

        console.log("s"); // Whatever you want

    }

    // ... and so on

}


function die() {
    localStorage.topFlappyScore = Math.max(score, topScore);
    ninjaJumping = false;
    var gameover = document.getElementById("gameover");
    gameover.style.visibility = "visible";
    var playAgainBtn = document.getElementById('playAgainBtn');
    playAgainBtn.onclick = function() {
        game.state.start("Play");
        gameover.style.visibility = "hidden";
        something(false);
    };
}

Pole = function(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, "pole");
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.immovable = true;
    this.poleNumber = placedPoles;
};

Pole.prototype = Object.create(Phaser.Sprite.prototype);
Pole.prototype.constructor = Pole;
Pole.prototype.update = function() {
    if (ninjaJumping && !ninjaFallingDown) {
        this.body.velocity.x = ninjaJumpPower;
    } else {
        this.body.velocity.x = 0;
    }
    if (this.x < -this.width) {
        this.destroy();
        addNewPoles();
    }
}



// var game = new Phaser.Game(840, 630, Phaser.CANVAS);

// var minPoleGap = 100;
// var maxPoleGap = 300;

// var plays = document.getElementById('play');
// var start = document.getElementById('start');
// plays.onclick = () => {
//     start.style.visibility = "hidden";
// };

// game.state.add("Play", play);
// game.state.start("Play");

// function updateScore() {
//     scoreText.text = score;
//     var showScore = document.getElementById('score');
//     showScore.innerHTML = "Score: " + score;
//     var showTopScore = document.getElementById('topScore');
//     showTopScore.innerHTML = "Best: " + topScore;
// }

// function prepareToJump() {
//     if (ninja.body.velocity.y == 0) {
//         powerBar = game.add.sprite(ninja.x, ninja.y - 50, "powerbar");
//         powerBar.width = 0;
//         powerTween = game.add.tween(powerBar).to({
//             width: 100
//         }, 1000, "Linear", true);
//         game.input.onDown.remove(prepareToJump, this);
//         game.input.onUp.add(jump, this);
//     }
// }

// function jump() {
//     ninjaJumpPower = -powerBar.width * 3 - 100
//     powerBar.destroy();
//     game.tweens.removeAll();
//     ninja.body.velocity.y = ninjaJumpPower * 2;
//     ninjaJumping = true;
//     powerTween.stop();
//     game.input.onUp.remove(jump, this);
//     jumpSound.play();
// }

// function addNewPoles() {
//     var maxPoleX = 0;
//     poleGroup.forEach(function(item) {
//         maxPoleX = Math.max(item.x, maxPoleX)
//     });
//     var nextPolePosition = maxPoleX + game.rnd.between(minPoleGap, maxPoleGap);
//     addPole(nextPolePosition);
// }

// function addPole(poleX) {
//     if (poleX < game.width * 2) {
//         placedPoles++;
//         var pole = new Pole(game, poleX, game.rnd.between(250, 380));
//         game.add.existing(pole);
//         pole.anchor.set(0.5, 0);
//         poleGroup.add(pole);
//         var nextPolePosition = poleX + game.rnd.between(minPoleGap, maxPoleGap);
//         addPole(nextPolePosition);
//     }
// }

// function checkLanding(n, p) {
//     if (p.y >= n.y + n.height / 2) {
//         var border = n.x - p.x;
//         if (Math.abs(border) > 43) {
//             n.body.velocity.x = border * 2;
//             n.body.velocity.y = -200;
//         }
//         var poleDiff = p.poleNumber - n.lastPole;
//         if (poleDiff > 0) {
//             score += Math.pow(2, poleDiff - 1);
//             updateScore();
//             n.lastPole = p.poleNumber;
//         }
//         if (poleDiff > 1) {
//             score += Math.pow(2, Math.floor(poleDiff - 1));
//             scorePlus = Math.pow(2, Math.floor(poleDiff));
//             n.lastPole = p.poleNumber;
//             scorePlus = game.add.text(400, 150, "+" + scorePlus, {
//                 font: "bold 23px sanserif",
//                 fill: "#3c5abd",
//             });
//             setTimeout(() => {
//                 scorePlus.destroy();
//             }, 500);

//         }
//         if (ninjaJumping) {
//             ninjaJumping = false;
//             game.input.onDown.add(prepareToJump, this);
//         }

//     } else {
//         ninjaFallingDown = true;
//         drop.play();
//         poleGroup.forEach(function(item) {
//             item.body.velocity.x = 0;
//         });
//     }
// }

// function die() {
//     localStorage.topScore = Math.max(score, topScore);
//     ninjaJumping = false;
//     var gameover = document.getElementById("gameover");
//     gameover.style.visibility = "visible";
//     var playAgainBtn = document.getElementById('playAgainBtn');
//     playAgainBtn.onclick = function() {
//         game.state.start("Play");
//         gameover.style.visibility = "hidden";
//     };
// }

// Pole = function(game, x, y) {
//     Phaser.Sprite.call(this, game, x, y, "pole");
//     game.physics.enable(this, Phaser.Physics.ARCADE);
//     this.body.immovable = true;
//     this.poleNumber = placedPoles;
// };

// Pole.prototype = Object.create(Phaser.Sprite.prototype);
// Pole.prototype.constructor = Pole;
// Pole.prototype.update = function() {
//     if (ninjaJumping && !ninjaFallingDown) {
//         this.body.velocity.x = ninjaJumpPower;
//     } else {
//         this.body.velocity.x = 0;
//     }
//     if (this.x < -this.width) {
//         this.destroy();
//         addNewPoles();
//     }
// }