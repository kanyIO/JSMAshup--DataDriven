describe('Chain locators', function() {
    it('Open Angular js website',function() {
     browser.get("https://juliemr.github.io/protractor-demo/");
        element(by.model("first")).sendKeys("3");
        element(by.model("second")).sendKeys("5").then(function(){
            element(by.id("gobutton")).click();
            element(by.repeater('result in memory')).element(by.css("td:nth-child(3)")).getText().then(function(text)
            {
            browser.sleep(4000);
                console.log(text);
            });
        });
    });
})