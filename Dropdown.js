


//this didnt run 
describe('Working with Locators Suite^', function() {
    function calc(a,b,c)
    {
        element(by.model("first")).sendKeys("a");
        element(by.model("second")).sendKeys("b");
       element.all(by.tagName("option")).each(function(item){
           item.getAttribute("value").then(function(value)
           {    if(value==c)      { item.click();} }
           )   }) 
    element(by.id("gobutton")).click();
it('Locators',function() {
     browser.get("https://juliemr.github.io/protractor-demo/");
      
     calc(3,5,"MULTIPLICATION");
      calc(3,5,"DIVISION");
     calc(3,5,"DIVISION");
     calc(10,6,"ADDITION");
     element.all(by.repeater('result in memory')).each(function(item)
     {
         item.element(by.css("td:nth-child(3)")).getText().then(function(text)
         { 
             console.log(text); 
        })
         
     }) 
    //it and fnx
})
            //element.all(by.repeater('result in memory')).count().then(function(text)
            //{                console.log(text); });
       //describe
        }
    })
