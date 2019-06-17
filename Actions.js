/* Ths script failed at lesson 4. Examples on validating child windows with Switch Mechanism
Handling mouse actions, Windows, alers with protractor */
describe('Action', function() {
it('Search on Posse site',function() {
    /*SendKeys.  Keyboard= arrowDown, enter */
     browser.get("https:posse.com");
     element(by.model("userInputQuery")).sendKeys("river");
     
     browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys("London")).perform();
     browser.actions().sendKeys().sendKeys(protractor.Key.ARROW_DOWN).perform();
     browser.actions().sendKeys().sendKeys(protractor.Key.ENTER).perform().then(function()
     {
        browser.sleep(5000);
        expect(element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).count().toEqual(7));
        
        element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).get(0).click();
        element(by.css("a[ng-href*='London/River Island']")).click().then(function()
        {  // browser.sleep(5000);
        browser.getAllWindowHandles().then(function(Handles) {
            browser.switchTo().window(handle[1]);
            browser.getTitle().then(function(title) {
                console.log(title+ "Title of page after switching page");
            }) })
        })
     })
    })
});
