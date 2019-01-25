//Creating necessary variabales for the program functionality
var order = []; //Order of flashing lights
var userOrder = []; //Order of user input
var flash; //Number of flashes appealing in the game
var turn; //Number of turns
var good; //Checks if player have pushed correct buttons
var gameTurn; //Checks weather it's users turn or game's turn 
var sequence; //Checks wheather sequence input was correct
var strict = false; //Checks if strict button was applied
var sound = true; //Manages sounds in the game 
var on = false; //Checks if power button was pressed
var winner; //Checks if user have won the game 

//Referencing  all html elements in JavaScript

const countTurn = document.querySelector("#turn");
const topLeft = document.querySelector("#topleft");
const topRight = document.querySelector("#topright");
const bottomLeft = document.querySelector("#bottomleft");
const bottomRight = document.querySelector("#bottomright");
const strictButton = document.querySelector("#strict");
const onButton = document.querySelector("#on");
const startButton = document.querySelector("#start");

function preloadImages(arrayOfImages) {
    $(arrayOfImages).each(function() {
        $('<img />').attr('src', this).appendTo('body').css('display', 'none');
    });
}


//Added functionality of power button, when ON it will display three dashes in countTurn window.
onButton.addEventListener('click', (event) => {
    if (onButton.checked == true) {
        on = true;
        countTurn.innerHTML = "---";
    } else {
        on = false;
        countTurn.innerHTML = "";
        clearColor();
        clearInterval(sequence);
    }
});

//Strict button function applied
strictButton.addEventListener('click', (event) => {
    if (strictButton.checked == true) {
        strict = true;
    } else {
        strict = false;
    }
})

// Start button function 
startButton.addEventListener('click', (event) => {
    if (on || winner) {
        play();
    }
});
function generateRandomNumbers(length){
  sequence = [];
  for (var i = 0; i < length; i++) { //Creates an array of numbers from 1 to 4 depending on length
        sequence.push(Math.floor(Math.random() * 4) + 1);
    }
  return sequence;
}

//First round of game
function play() {
    preloadImages([
        '../assets/pictures/2overlayLight-opt.jpg',
        '../assets/pictures/3overlayLight-opt.jpg',
        '../assets/pictures/4overlayLight-opt.jpg',
        '../assets/pictures/5overlayLight-opt.jpg'
    ]);
    winner = false; //user have not won the game yet
    
    good = true;
    sequence = 0;
    countTurn.innerHTML = 1;
    userOrder = [];
    flash = 0;
    turn = 1;
    order = generateRandomNumbers(20);
    
    gameTurn = true; //Game will start the sequence and the user will have to repeat it 
    sequence = setInterval(computerTurn, 1100); //This sequence sets the interval of flashing lights in game 
}

function computerTurn() {
    on = false; //When on is false user is prohibited from pressing a button 
    if (flash == turn) {
        $("#on").prop("disabled", false); //Clearing up error with user able to turn off game during sequence
        clearInterval(sequence); //Clears sequence when games turn is over
        gameTurn = false;
        clearColor(); //Clears lit up buttons
        on = true; //User can start repeating the sequence 
    }
    if (gameTurn) { //When it's still games turn 
        $("#on").prop("disabled", true);
        clearColor();
        setTimeout(() => {
            if (order[flash] == 1) { //Function responsible for flashing top left button 
                firstFunction();
            }
            if (order[flash] == 2) { //Function responsible for flashing top right button 
                secondFunction();
            }
            if (order[flash] == 3) { //Function responsible for flashing bottom leftbutton
                thirdFunction();
            }
            if (order[flash] == 4) { //Function responsible for flashing bottom right button
                fourthFunction();
            }
            flash++;
        }, 700);
    }
}

function clearColor() {
    $('#topleft').removeClass('litTopLeft');
    $('#topright').removeClass('litTopRight');
    $('#bottomleft').removeClass('litBottomLeft');
    $('#bottomright').removeClass('litBottomRight');
}

function firstFunction() {
    if (sound) {
        var audio = new Audio('../assets/sounds/Cabin.mp3'); //Selects first mp3 file chosen for a button
        audio.play(); //Funtion that will play audio 
    }
    sound = true;
    $('#topleft').addClass('litTopLeft');
}

function secondFunction() {
    if (sound) {
        var audio = new Audio('../assets/sounds/Clearedfortakeoff.mp3'); //Selects second mp3 file chosen for a button
        audio.play(); //Funtion that will play audio 
    }
    sound = true;
    $('#topright').addClass('litTopRight');

}

function thirdFunction() {
    if (sound) {
        var audio = new Audio('../assets/sounds/Mayday.mp3'); //Selects third mp3 file chosen for a button
        audio.play(); //Funtion that will play audio 
    }
    sound = true;
    $('#bottomleft').addClass('litBottomLeft');

}

function fourthFunction() {
    if (sound) {
        var audio = new Audio('../assets/sounds//Oldplane.mp3');//Selects fourth mp3 file chosen for a button
        audio.play(); //Funtion that will play audio 
    };
    sound = true;
    $('#bottomright').addClass('litBottomRight');

}

//Functions that allow user to click all four buttons :

topleft.addEventListener('click', (event) => {
    if (on) {
        userOrder.push(1); //Array of user input(clicks)
        correctOrder();
        firstFunction();
        if (winner == false) {
            setTimeout(() => {
                clearColor();
            }, 950);
        }
    }
});

topright.addEventListener('click', (event) => {
    if (on) {
        userOrder.push(2); //Array of user input(clicks)
        correctOrder();
        secondFunction();
        if (winner == false) {
            setTimeout(() => {
                clearColor();
            }, 950);
        }
    }
});

bottomleft.addEventListener('click', (event) => {
    if (on) {
        userOrder.push(3); //Array of user input(clicks)
        correctOrder();
        thirdFunction();
        if (winner == false) {
            setTimeout(() => {
                clearColor();
            }, 950);
        }
    }
});

bottomright.addEventListener('click', (event) => {
    if (on) {
        userOrder.push(4); //Array of user input(clicks)
        correctOrder();
        fourthFunction();
        if (winner == false) {
            setTimeout(() => {
                clearColor();
            }, 950);
        }
    }
});

//Function that checks correct order of input

function correctOrder() {
    if (userOrder[userOrder.length - 1] !== order[userOrder.length - 1])
        good = false;

    if (userOrder.length == 20 && good) {
        winGame();
    }

    if (good == false) {
        countTurn.innerHTML = "NO!";
        setTimeout(() => {
            countTurn.innerHTML = turn;
            clearColor();

            if (strict) {
                play();
            } else {
                gameTurn = true;
                flash = 0;
                userOrder = [];
                good = true;
                sequence = setInterval(computerTurn, 1900);
            }
        }, 1900);
        sound = false;
    }

    if (turn == userOrder.length && good && !winner) {
        turn++;
        userOrder = [];
        gameTurn = true;
        flash = 0;
        countTurn.innerHTML = turn;
        sequence = setInterval(computerTurn, 1800);
    }
}

//When user will finish game
function winGame() {
    countTurn.innerHTML = "WIN";
    on = false;
    winner = true;
}