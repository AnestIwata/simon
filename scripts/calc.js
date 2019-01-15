//on Button functionality
onButton.addEventListener('click', (event) => {
  if (onButton.checked == false) {
    "on" = false;
     } 
});

//power button
onButton.addEventListener('click', (event) => {
  if (onButton.checked == true) {
    on = true;
    countTurn = "---";
  } 
});

//winning game function
function winGame() {
  countTurn.innerHTML = "WIN";
  on = false;
  winner = true;
}