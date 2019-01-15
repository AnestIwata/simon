/*--Testing power button to be checked--*/

var onButton = document.querySelector('input[name = "onButton"]:checked');
    if("onButton" != null){
        it("should be equal false", function(){
                    expect("on").toBe("false");
                });
        };

/*--Testing power button to display dashes when on --*/

describe("powering game", function(){
            describe("onButton.checked", function() {
                it("should returned dashed display", function(){
                    expect("countTurn").toBe("---");
                });
            });
            
        });

/*--Testing winning game function--------*/

describe("Winning game", function(){
    beforeEach(function() {
    });
    describe("Passing Win value ", function() {
       expect("winGame").toBeDefined(); 
    });
    it("should return ", function() {
            expect(innerHTML).toBe("WIN");
        });
});

/*--Testinng play function ---*/

describe("play function test ",function(){
    beforeEach(function(){
    });
  it("winner should not be true",function(){
    expect('winner').not.toBe(true);
  });
  it("good should be true",function(){
    expect('good').toBe(true);
  });
});


