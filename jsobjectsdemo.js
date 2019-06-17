/**
 * http://usejsdoc.org/
 */
function car()
{
	this.firstinput=element(by.model("first"));  //first unput= property(state), second=value(behiour)
	this.secondinput=element(by.model("second"));
	this.goButton=element(by.id("gobutton"));
	this.result=element(by.css("h2[class='ng-binding']"));
this.color="red";
this.engine="turbo";  //this.engine is a method.  to access it outsude the function, use object declared below
this.brand="BMW";
this.search="by.css('input')";
//this.getModel()=function(){  console.log("That's a 2020 model"); }; // this.getURL=function(){	browser.get('http://juliemr.github.io/protractor-demo/');};
this.getURL=function()
{
	browser.get('http://juliemr.github.io/protractor-demo/');
	browser.sleep(4000);
	   
}; 
};

module.exports= new car();


/*var a=new car();
 a.getModel();
 console.log(a.engine);*/
