describe("Working with Locators Suite^", function() {
  
  it("Testing calculator functionality", function() {
    /*browser.get("https://google.com")  - should throw error , website is non-angular& */
    
    browser.get("https://juliemr.github.io/protractor-demo/");
    
    element(by.model("first")).sendKeys("3");
    element(by.model("second")).sendKeys("5").then(function(){
        element(by.id("gobutton")).click();

expect(element(by.css("hs[class=binding']")).getText()).toBe("8");
    element(by.css("hs[class=binding']")).getText().then(function(text) {
      console.log(text);});
      //browser.sleep(50000);

      
  });
}); });
