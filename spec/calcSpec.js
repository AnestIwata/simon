/*--Testing power button--*/
describe("powering game", function(){
            describe("onButton checked", function() {
                it("should returned dashed display", function(){
                    expect("innerHtml").toBe("---");
                });
            });
            
        });
    
/*--Testing start button, should I use jasmine jQuery for it ???--*/

var spyEvent = spyOnEvent('#startButton', 'click')
$('#onButton').click()
expect('click').toHaveBeenTriggeredOn('#function play')
expect(spyEvent).toHaveBeenTriggered();