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
onButton = 0;
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
//Functionality od power button
$(document).ready(function() {
  $(".startButton").click(function() {
    if (on || winner) {
    play();
      }
  })

function play(){
  winner = false;
  order = [];
  good = true;
  countTurn.innerHTML = 1; 
  userOrder =[];
  highlight = 0;
  turn = 1;
  for (var i = 0; i < 20; i++){
    order.push(Math.floor(Math.random() * 4 ) + 1);
}


