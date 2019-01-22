  # Simon game
 
  **This is a simon memory game created for milestone two project**
 
  ### To open up the project:
  [Simon](https://pawelsimongame.herokuapp.com/) -- **Right-Click** and
  select **Open in New Tab**.
   
  Alternatively you can clone the repository to youre local machine.
  Instructions can be found [here](https://help.github.com/articles/importing-a-git-repository-using-the-command-line/).
 
  ### User experience:
  I am presented with a random series of button presses.
  Each time I input a series of button presses correctly, I see the same series of button presses but with an additional step.
  I hear a sound that corresponds to each button both when the series of button presses plays, and when I personally press a button.
  If I press the wrong button, I am notified that I have done so, and that series of button presses starts again to remind me of the pattern so I can try again.
  I can see how many steps are in the current series of button presses.
  If I want to restart, I can hit a button to do so, and the game will return to a single step.
  I can play in strict mode where if I get a button press wrong, it notifies me that I have done so, and the game restarts at a new random series of button presses.
  I can win the game by getting a series of 20 steps correct. I am notified of my victory, then the game starts over.
 
  ### Planning the build of the game:
  
   I intend to created the game in the spirit of my previus project. The layout of the game will be similar to the original Simon game , 
  but I would like to put some personal touch to it. Instead of plain color buttons I will use custom made pictures to enhance visual 
  design of the game . 
   Also notyfing sounds of the game will be custom created mp3 files , created with that project in mind. 
 
  ### Technologies used:
  
  1. HTML (https://en.wikipedia.org/wiki/HTML5)
  2. CSS (https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
  3. Bootstrap (https://getbootstrap.com/) The most easy and fun to style beautiful websites.
  4. Javascript (https://www.javascript.com/) Best begginer language to learn. 
  5. JQuery (https://jquery.com/)I have chosen this library for it's versatility across the browsers.
 
  ### Logic:
 
  1. User powers up the game.
  2. User starts the game.
  3. The game flashes up a random button with additional sound.
  4. User replicates games choice. 
  5. If the sequence is correct, user proceeds to another round. 
  6. If strict mode is applied , after a miss user starts the game all over. 
  7. User is presented with number of current round on game display. 
  8. User needs to complete 20 rounds to win the game. 
  
 ### Testing code:
 
  On the beginning we need to declare some variables that will be fundamental for our program:
 
 ```javascript
  var order = []; *Order of flashing lights*
  var userOrder = [];  *Order of user input*
  var flash;  *Number of flashes appealing in the game*
  var turn;  *Number of turns*
  var good;  *Checks if player have pushed correct buttons*
  var gameTurn; *Checks weather it's users turn or game's turn*
  var sequence;  *Checks wheather sequence input was correct*
  var strict = false; *Checks if strict button was applied*
  var sound = true; *Manages sounds in the game*
  var on = false; *Checks if power button was pressed*
  var winner;  *Checks if user have won the game* 
 ```
  
  We are targeting start button with :
 
 ```javascript 
  onButton.addEventListener('click', (event) => {  
  if (onButton.checked == true) {   *Once the button is checked it will display *
  on = true;
  countTurn.innerHTML = "---";
  } else {
  on = false;
  countTurn.innerHTML = "";
  ```
  
  Strict button functionality is based on similar principal as onButton :
 
 ```javascript  
  strictButton.addEventListener('click', (event) => {
  if (strictButton.checked == true) {
  strict = true;
  } else {
  strict = false;
  }
  })
  ```
  Once the user presses Start button it will trigger main function of the game :
 
 ```javascript 
  startButton.addEventListener('click', (event) => {
   if (on || winner) {
   play();
  }
  });
  ```
  Which full fuctionality is enclosed below. Preload images was introduced to fight a lag in loading 
  images in to the game. 
 
 ```javascript 
  function play() {
  preloadImages([
  '../assets/pictures/2overlayLight-opt.jpg',
  '../assets/pictures/3overlayLight-opt.jpg',
  '../assets/pictures/4overlayLight-opt.jpg',
  '../assets/pictures/5overlayLight-opt.jpg'
  ]);
  winner = false; //user have not won the game yet*
  order = [];
  good = true;
  sequence = 0;
  countTurn.innerHTML = 1;
  userOrder = [];
  flash = 0;
  turn = 1;
  for (var i = 0; i < 20; i++) { //Creates an array of 20 numers from 1 to 4 
  order.push(Math.floor(Math.random() * 4) + 1);
        
  }
  gameTurn = true; //Game will start the sequence and the user will have to repeat it 
  sequence = setInterval(computerTurn, 1100); //This sequence sets the interval of flashing lights in game 
  }
  ```
  When we:
  
  ```javascript
  console.log(order);
  ```
  
  We can notice that an array of 20 random numbers from 1 to 4 is created.
  
  Next we create a function to let the game make a turn:
  
 ```javascript
  function computerTurn() {
  on = false; //When on is false user is prohibited from pressing a button 
  if (flash == turn) {
  $("#on").prop("disabled", false); //Clearing up error with user able to turn off game during sequence
  clearInterval(sequence); //Clears sequence when games turn is over
  gameTurn = false;
  clearColor(); //Clears lit up buttons
  on = true; //User can start repeating the sequence 
  }
  ```
  While it is games turn we create a function that lit the buttons and play sounds. Below is a example
  of one of four functions:
   
  ```javascript
  if (gameTurn) { //When it's still games turn 
  $("#on").prop("disabled", true);
  clearColor();
  setTimeout(() => {
  if (order[flash] == 1) { //Function responsible for flashing top left button 
  firstFunction();
  }
  ```
  Now it's time for function that will check user inputs. When last button that user clicked is not
  equal to the real order :
  
  ```javascript
  function correctOrder() {
   if (userOrder[userOrder.length - 1] !== order[userOrder.length - 1])
   good = false;
  ```
  When user have repeated order of 20 clicks corretly then winGame will be triggered:
   
 ```javascript
  if (userOrder.length == 20 && good) {
  winGame();
  }
 ```
    
 When users input gets incorrect then NO! will be dispalyed in counter window. Also colors will be
 cleared and counter will be reset. When strict mode is checked the game will reset and play function
 wil be trigerred. If not in strict mode user can repeat the sequence.
    
  ```javascript
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
    sequence = setInterval(computerTurn, 1400);
     }
    }, 1400);
     sound = false;
    }
     ```
 When user is correct but he still has remaining rounds to play :
     
```javascript
  if (turn == userOrder.length && good && !winner) {
  turn++;
  userOrder = [];
  gameTurn = true;
  flash = 0;
  countTurn.innerHTML = turn;
  sequence = setInterval(computerTurn, 1300);
  }
   }
  ```
  if (turn == userOrder.length && good && !winner) {
  turn++;
  userOrder = [];
  gameTurn = true
  flash = 0;
  countTurn.innerHTML = turn;
  sequence = setInterval(computerTurn, 1300);
  }
  ```
  Once the user will finish the game it will trigger :
  
  ```javascript
  function winGame() {
  countTurn.innerHTML = "WIN";
  on = false;
  winner = true;
 }
  ```

  ### Deployment:
  
  Here I have faced a lot of problematic issues. No matter the cost I wanted to stick to original idea of having 
  custom sounds and pictures for buttons. That have caused alot of problems in deployment to GitHub Pages. I was 
  trying to upload my content (especially mp3 files) to platforms like Soundcloud or Amazon s3but but all the 
  embedded links in project where not functional. Eventually it turned that Heroku is the platform that hosted
  my project without any issues: (https://pawelsimongame.herokuapp.com/)
  
  ### Credits:
  
  Information about the game in additional page was copied from this article (https://en.wikipedia.org/wiki/Simon_(game)).
  All the informations about technologies used are from the related to them official pages.
  
  ### Media:
  
  Picures used in project are my own. 
  Sound are custom made by me as well. 
  
  
  

 


 
 


