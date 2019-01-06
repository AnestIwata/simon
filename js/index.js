//Creating necessary variabales for the program functionality
let order = [];     //Order of flashing lights
let userOrder =[];  //Order of user input
let flash;  //Number of flashes appealing in the game
let turn;   //Number of turns
let good    //Checks if player have pushed correct buttons
let gameTurn //Checks weather it's users turn or game's turn 
let sequence //Checks wheather sequence input was correct
let strict = false; //Checks if strict button was applied
let sound = true; //Manages sounds in the game 
let on = false; //Checks if power button was pressed
let winner; //Checks if user have won the game 
let clearColor; //It will clear the colors of the buttons 

//Referencing  all html elements in JavaScript

const countTurn = document.querySelector("#turn");
const topLeft = document.querySelector("#topleft");
const topRight = document.querySelector("#topright");
const bottomLeft = document.querySelector("#bottomleft");
const bottomRight = document.querySelector("#bottomright");
const strictButton = document.querySelector("#strict");
const onButton = document.querySelector("#on");
const startButton = document.querySelector("#start");

//Added functionality of power button, when ON it will display three dashes in countTurn window.
onButton.addEventListener('click', (event) => {
  if (onButton.checked == true) {
    on = true;
    countTurn.innerHTML = "---";
  } else {
    on = false;
    countTurn.innerHTML = "";
    clearInterval(sequence);
    clearColor();
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
})
//First round of game
function play(){
  winner = false; //user have not win the game yet
  order = [];
  good = true;
  countTurn.innerHTML = 1; 
  userOrder =[];
  flash = 0;
  turn = 1;
  for (var i = 0; i < 20; i++){   //Creates an array of 20 numers from 1 to 4 
    order.push(Math.floor(Math.random() * 4 ) + 1);
}
  gameTurn = true; //Game will start the sequence and the user will have to repeat it 
  sequence = setInterval(computerTurn , 870); //This sequence sets the interval of flashing lights in game 
}
  function computerTurn() {
    on = false;   //When on is false user is prohibited from pressing a button 
    if (flash == turn){   //
      clearInterval(sequence); //Clears sequence when games turn is over
      gameTurn = false; 
      clearColor(); //Clears lit up buttons
      on = true; //User can start repeating the sequence 
    if (compTurn) { //When it's still games turn 
    clearColor();
    setTimeout(() => {
      if (order[flash] == 1) {  //Fuction responsible for flashing top left button 
        firstFunction();
      }
      if (order[flash] == 2) {  //Fuction responsible for flashing top right button 
        secondFunction();
      }
      if (order[flash] == 3) {  //Fuction responsible for flashing bottom leftbutton
        thirdFunction();
      }
      if (order[flash] == 4) {  //Fuction responsible for flashing bottom right button
        fourrthFunction();
      }
      flash++;
    }, 150);
  }
}
  
 
 
 
 
 
 
 
 
 
 
 
 
 