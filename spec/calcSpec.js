/*--Testing power button to be checked--*/


var onButton = document.querySelector('input[name = "onButton"]:checked');
if('onButton' != null){  //Test if something was checked
alert("onButton".value); //Alert the value of the checked.
} else {
alert('Nothing checked'); //Alert, nothing was checked.
}

/*--Testing power button to display dashes when on --*/

describe("powering game", function(){
            describe("onButton.checked", function() {
                it("should returned dashed display", function(){
                    expect("innerHtml").toBe("---");
                });
            });
            
        });

/*--Testing winning game function--------*/

describe("Winning game function", (){
    beforeEach(function() {
        order = new correctOrder();
    });
    describe("Passing Win value ", function() {
       expect("winGame").toBeDefined(); 
    });
    it("should return ", function() {
            expect(innerHTML).toBe("WIN");
        });
});

/*-------------------------*/


