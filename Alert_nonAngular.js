// this site was non Angular 
describe('Protractor alert steps',function() {
    
    it('open non Angular site', function() {
       browser.waitForAngularEnabled(false);
       
       browser.get("http://www.qaclickacademy.com/practice.php");
       element(by.id("confirmation")).click();
       browser.switchTo().alert().accept().then(function() {
           browser.sleep(4000); 
        });
           });
        
});