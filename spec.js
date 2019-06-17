/** First test*/ 
describe('Reports',function() { //first parameter- Test suite name //Second parameter - function (function wil have all tests (it blocks)
    it('Open Reports',function() { //first parameter- Test case  name
    browser.get("https://angularjs.org"); //browser.get will hit url on the browser
    browser.get('http://juliemr.github.io/protractor-demo/').then(function()
   {
    //browser.sleep(10000);
    console.log("This will be the last step to execute");
})
})
it('close browswer', function() { // code to close browser
})
})

     
        
    

    
    
    
    
    