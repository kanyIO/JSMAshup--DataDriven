describe('Working with Locators Suite^', function() {
   
    it('Locators',function() {
     browser.get("https://juliemr.github.io/protractor-demo/");
        element(by.model("first")).sendKeys("3");
        element(by.model("second")).sendKeys("5");
        element(by.id("gobutton")).click();  

            element(by.model("first")).sendKeys("3");
            element(by.model("second")).sendKeys("7");
            element(by.id("gobutton")).click();


            element(by.model("first")).sendKeys("3");
            element(by.model("second")).sendKeys("8");
            element(by.id("gobutton")).click();

            
            element.all(by.repeater('result in memory')).count().then(function(text)
            {
                console.log(text);
            });
        });
    });