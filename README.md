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
 
  Main function of the game is generateRandomNumbers() 
  
  ```javascript
  function generateRandomNumbers(length) {
  sequence = [];
  for (var i = 0; i < length; i++) { //Creates an array of numbers from 1 to 4 depending on length
    sequence.push(Math.floor(Math.random() * 4) + 1);
  }
  return sequence;
 }
  ```
 Which creates an array of 20 random numbers from 1 to 4. First we write down the description of the test 
 suite:
 
 ```javascript
 const utils = require("..scripts/calc.js");
 
 describe("Testing a random array of numbers",function(){
  it ("generateRandomNumbers should return a set of a random numbers", function(){
 ```
 then we will create an array of random numbers, lets take 5 for example:

 ```javascript
  random1 = utils.generateRandomNumbers(5);
  ```
  We console.log it to see the output. Let's create a second similar array:
  
  ```javascript
  random2 = utils.generateRandomNumbers(5);
  ```
  To make sure that the numbers are random we will compare created arrays against each other :
  
  ```javascript
  expect(random1).not.toBe(random2);
  ```
  As a next example of testing we can see if the function returns required lenght of numbers:
  
  ```javascript
  it("generateRandomNumbers should return he required lenght of numers", function(){
    expect(utils.generateRandomNumbers(20).lenght).toBe(20);
  });
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
  
  
  

 


 
 


