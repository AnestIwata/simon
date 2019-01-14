/*--Testing power button to be checked--*/

describe('Power button to be checked', function() {
expect($('<input type="checkbox" checked="checked"/>')).toBeChecked()
});

/*--Testing power button to display dashes when on --*/

describe("powering game", function(){
            describe("onButton.checked", function() {
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

xpect($('<div style="display: none; margin: 10px;"></div>')).toHaveCss({display: "none", margin: "10px"})