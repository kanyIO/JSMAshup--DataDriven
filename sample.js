/**
 * http://usejsdoc.org/
 */
describe('Protractor baby steps',function() {  
	
	it('Open Angular js website',function() {
		browser.waitForAngularEnabled(false);
		browser.driver.manage().window().maximize();
		browser.get("http://www.itgeared.com/demo/1506-ajax-loading.html");
		element(by.css("a[href*='loadAjax']")).click();
		
		var EC = protractor.ExpectedConditions;
		
	//	browser.wait(EC.visibilityOf(element(by.css("img[src*='avatar']"))), 8000);
		
	//	browser.wait(EC.invisibilityOf(element(by.id("loader"))), 8000);
		element(by.id("results")).getText().then(function(text){
			console.log(text);
			
		})
		
		
		
/*	browser.switchTo().frame("courses-iframe");
	element(by.css("a[href*='sign_in']")).getText().then(function(text){
		console.log(text);
		
	})*/
		
	
		
		/*browser.get("http://qaclickacademy.com/practice.php");
element(by.id("confirmbtn")).click();
browser.switchTo().alert().accept().then(function()
		{
	browser.sleep(5000);
		})
element(by.model("userInputQuery")).sendKeys("river");
//element(by.model("locationQuery")).sendKeys("london").element(by.css("li")).click();

browser.actions()
.mouseMove(element(by.model("locationQuery"))
.sendKeys("london"))
.perform().then(function(){
browser.sleep(500);
// press the down arrow for the autocomplete item we want to choose


    browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();

browser.sleep(500);
browser.actions().sendKeys(protractor.Key.ENTER).perform();
});
expect(element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).count()).toEqual(7);browser.getTitle().then(function(text)
		{
	console.log(text);
		})
element(by.css("a[ng-href*='London/River Island']")).click();
browser.getAllWindowHandles().then(function(hand){
	browser.switchTo().window(hand[1]);
	browser.getTitle().then(function(text)
			{
		console.log(text);
			})
})*/	
	
	})
	
})
