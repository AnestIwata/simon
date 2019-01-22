/*--Testing power button to be checked--*/
var addition = require("scripts/calc.js");

// var onButton = document.querySelector('input[name = "onButton"]:checked');
//     if("onButton" != null){
//         it("should be equal false", function(){
//                     expect("on").toBe("false");
//                 });
//         };



// /*--Testinng play function ---*/

// describe("play function test ",function(){
//     beforeEach(function(){
//     });
//   it("winner should not be true",function(){
//     expect('winner').not.toBe(true);
//   });
//   it("good should be true",function(){
//     expect('good').toBe(true);
//   });
// });



/*refactoring play function
function playFunction(soundid, targetid, classname) {
  if (sound) {
    var audio = document.getElementById(soundid); 
    audio.play(); 
  }
  sound = true;
  $('#' + targetid).addClass(classname);
}


So we get :

if (gameTurn) { //When it's still games turn 
        $("#on").prop("disabled", true);
        clearColor();
        setTimeout(() => {
            if (order[flash] == 1) { //Function responsible for flashing top left button 
                playFunction('sound1', 'topleft', 'litTopLeft');
                 audio.play();
            }
            if (order[flash] == 2) { //Function responsible for flashing top right button 
                playFunction('sound2', 'topright', 'litTopRight');
                 audio.play();
            }
            if (order[flash] == 3) { //Function responsible for flashing bottom leftbutton
                playFunction('sound3', 'bottomleft', 'litBottomLeft');
                 audio.play();
            }
            if (order[flash] == 4) { //Function responsible for flashing bottom right button
                playFunction('sound4', 'bottomright', 'litBottomRight');
                 audio.play();
            }
            flash++;
        }, 700);
    }
}
*/

describe("Calculator", function() {
    describe("Addition function", function() {
        it("should return 42", function() {
            expect(addition(20, 22)).toBe(42);
        });
    });
});
