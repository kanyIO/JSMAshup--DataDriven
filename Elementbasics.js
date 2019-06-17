describe("Page object Mechanism", function() {
  var obj= require("./jsobjectsdemo.js");
  it("Locators", function() {
    /*browser.get("https://google.com")  - should throw error , website is non-angular& */
    browser.get("https://juliemr.github.io/protractor-demo/");
    obj.firstinput.sendKeys("3");
    obj.secondinput.sendKeys("5").then(function(){
    
    obj.goButton.click(); //tagname[:attribute=''value']
    expect(obj.result.getText()).toBe("8");
   obj.result.getText().then(function(text){ 
     console.log(text);
     browser.sleep(4000);
  })
    }); //element is an object exposed by protractor to identify elements on the DOM/
    });
  });

