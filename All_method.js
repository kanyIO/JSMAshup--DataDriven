describe('Working with Locators Suite^', function() {
    function Add(a,b)
    {
        element(by.model("first")).sendKeys("a");
        element(by.model("second")).sendKeys("b");
        element(by.id("gobutton")).click(); 
     }
    it('Locators',function() {
     browser.get("https://juliemr.github.io/protractor-demo/");
    
      Add(2,3);
      Add(4,3);
      Add(8,3);
      Add(2,3);
      Add(9,3); 
      Add(0,3);
            
            element.all(by.repeater('result in memory')).count().then(function(text)
            {
                console.log(text);
            });
        });
    });