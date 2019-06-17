describe('Protractor Synchronization steps',function() {  
	
	
	it('Open NonAngular js website Sync',function() {
		browser.waitForAngularEnabled(false);
		browser.get("http://www.itgeared.com/demo/1506-ajax-loading.html");
		
		element(by.css("a[href*='loadAjax']")).click();
		var EC = protractor.ExpectedConditions;
		
	browser.wait(EC.invisibilityOf(element(by.id("loader"))),8000);
		element(by.id("results")).getText().then(function(text)
				{
			
			
			console.log(text);
			
				})
		
		
		
	
		
		
		
		
		
		
	})

		 
		
		
		
		
		
		//browser.get() will hit url on the browser
		// write your raw protractor code
		
		//Each it block will be called as a spec
		
		
		
		

	
	
	
	
	
})
//first parameter- Test suite name
	//Second parameter - function (function wil have all tests (it blocks)

//first parameter- Test case  name




