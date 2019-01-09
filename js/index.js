//Creating necessary variabales for the program functionality
let order = [];     //Order of flashing lights
let userOrder =[];  //Order of user input
let flash;  //Number of flashes appealing in the game
let turn;   //Number of turns
let good ;   //Checks if player have pushed correct buttons
let gameTurn; //Checks weather it's users turn or game's turn 
let sequence; //Checks wheather sequence input was correct
let strict = false; //Checks if strict button was applied
let sound = true; //Manages sounds in the game 
let on = false; //Checks if power button was pressed
let winner; //Checks if user have won the game 


 
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
});

// Start button function 
startButton.addEventListener('click', (event) => {
    if (on || winner) {
    play();
    }
});
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
  sequence = setInterval(computerTurn , 1200); //This sequence sets the interval of flashing lights in game 
}
  function computerTurn() {
    on = false;   //When on is false user is prohibited from pressing a button 
    if (flash == turn){   //
      clearInterval(sequence); //Clears sequence when games turn is over
      gameTurn = false; 
      clearColor(); //Clears lit up buttons
      on = true; //User can start repeating the sequence 
    }
    if (gameTurn) { //When it's still games turn 
    clearColor();
    setTimeout(() => {
      if (order[flash] == 1) {  //Function responsible for flashing top left button 
        firstFunction();
      }
      if (order[flash] == 2) {  //Function responsible for flashing top right button 
        secondFunction();
      }
      if (order[flash] == 3) {  //Function responsible for flashing bottom leftbutton
        thirdFunction();
      }
      if (order[flash] == 4) {  //Function responsible for flashing bottom right button
        fourthFunction();
      }
      flash++;
    }, 300);
  }
}

function clearColor() {
  $('#topleft').css("background-image", "url(../assets/pictures/2overlayDark-opt.jpg)");
  $('#topright').css("background-image", "url(../assets/pictures/3overlayDark-opt.jpg)");
  $('#bottomleft').css("background-image", "url(../assets/pictures/4overlayDark-opt.jpg)");
  $('#bottomright').css("background-image", "url(../assets/pictures/5overlayDark-opt.jpg)");
}

 function firstFunction(){
    if (sound){
      var audio = document.getElementById("sound1"); //Selects first mp3 file chosen for a button
      audio.play(); //Funtion that will play audio 
    }
    sound = true;
    $('#topleft').css("background-image", "url(../assets/pictures/2overlayLight-opt.jpg)"); //Light overlay background photo 
  }
  
  function secondFunction(){
    if (sound){
      var audio = document.getElementById("sound2"); //Selects first mp3 file chosen for a button
      audio.play(); //Funtion that will play audio 
    }
    sound = true;
    $('#topright').css("background-image", "url(../assets/pictures/3overlayLight-opt.jpg)"); //Light overlay background photo 
  }
  
  function thirdFunction(){
    if (sound){
      var audio = document.getElementById("sound3"); //Selects first mp3 file chosen for a button
      audio.play(); //Funtion that will play audio 
    }
    sound = true;
    $('#bottomleft').css("background-image", "url(../assets/pictures/4overlayLight-opt.jpg)"); //Light overlay background photo 
  }
  
  function fourthFunction(){
    if (sound){
      var audio = document.getElementById("sound4"); //Selects first mp3 file chosen for a button
      audio.play(); //Funtion that will play audio 
    }
    sound = true;
    $('#bottomright').css("background-image", "url(../assets/pictures/5overlayLight-opt.jpg)"); //Light overlay background photo 
  }
 
 //Functions that allow user to click all four buttons :
 
 topLeft.addEventListener('click', (event) => {
   if (on) {
   userOrder.push(1); //Array of user input(clicks)
   correctOrder();
   firstFunction();
   if (winner == false) {
     setTimeout(() =>{
       clearColor();
     }, 350);
   }
   }
 });
 
  topRight.addEventListener('click', (event) => {
   if (on) {
   userOrder.push(2); //Array of user input(clicks)
   correctOrder();
   secondFunction();
   if (winner == false) {
     setTimeout(() =>{
       clearColor();
     }, 350);
   }
   }
 });
  
   bottomLeft.addEventListener('click', (event) => {
   if (on) {
   userOrder.push(3); //Array of user input(clicks)
   correctOrder();
   thirdFunction();
   if (winner == false) {
     setTimeout(() =>{
       clearColor();
     }, 350);
   }
   }
 });
 
  bottomRight.addEventListener('click', (event) => {
   if (on) {
   userOrder.push(4); //Array of user input(clicks)
   correctOrder();
   fourthFunction();
   if (winner == false) {
     setTimeout(() =>{
       clearColor();
     }, 350);
   }
   }
 });
 
 //Function that checks correct order of input
 
 function correctOrder () {
   if (userOrder[userOrder.length - 1] !== order[userOrder.length -1]) 
   good = false; //If users order is incorrect then good == false
   
   if (userOrder.length == 20 && good == true) { //If user will score 20 rounds then he wins. 
   gameWinner();
   }
   
   if (good == false) { //When user scores incorretctly
     flashButtons();   //This will flash the buttons
     countTurn.innerHTML ="Err"; //Err message will display on incorrect score
     setTimeout(() => {
      countTurn.innerHTML = turn; //Counter will set back 
      clearColor(); //Flashed colors will be cleared 
      
      if (strict) { //When strict mode is turned on
        play(); //Game will start all over
      } 
      else {  //When strict mode is not turned on user can repeat the last round
        gameTurn = true;
        flash = 0;
        userOrder = [];
        good = true;
        sequence = setInterval(gameTurn, 700);
      }
    }, 800);
    sound = false;
   }
   //If the user have not win the game then he gets another turn
   
   if (turn == userOrder.length && good && !winner) {  
     turn++;
     userOrder = []; //clearing user order
     gameTurn = true;
     flash = 0; 
     countTurn.innerHTML = turn;
     sequence = setInterval(gameTurn, 1000);
   }
 }
 
 //Setting up flashButtons function
 
  function flashButtons () {
    $('#topleft').css("background-image", "url(../assets/pictures/2overlayLight-opt.jpg)");
    $('#topright').css("background-image", "url(../assets/pictures/3overlayLight-opt.jpg)");
    $('#bottomleft').css("background-image", "url(../assets/pictures/4overlayLight-opt.jpg)");
    $('#bottomright').css("background-image", "url(../assets/pictures/5overlayLight-opt.jpg)");
  }


  function gameWinner () {
  flashButtons();
  countTurn.innerHTML = "WIN!";
  on = false;
  winner = true;
  }

  

 
 
 
 
 
 
 
 
 
 