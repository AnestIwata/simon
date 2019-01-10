# Simon game

**This is a simon memory game created for milestone two project**

### To open up the project:
 [Simon](https://anestiwata.github.io/simon/) -- **Right-Click** and
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
 
### Logic:

 1. User powers up the game.
 2. User start the game.
 3. The game flashes up a random button with additional sound.
 4. User replicates games choice. 
 5. If the sequence is correct, user proceeds to another round. 
 6. If strict mode is applied , after a miss user starts the game all over. 
 7. User is presented with number of current round on game display. 
 8. User needs to complete 20 rounds to win the game. 
 


