//console.log("Hello world");
function add (x,k)
{
    return x+k;
}

// Array = collection of obejcts / values
//feeding into your data statically 
var a=4;
var b= ["hey", "world","Fantastic 4","Goodbye"];

console.log(b.length+ " <= This number indicates size of the array");

for(var i=0;i<4;i++)
{
    console.log(b[i]);
}

//feeding the data at runtime dynamically
// you can create code to feed the url dynamically to your code by declaring array size

var c= new Array();

c[0]= " Drogon, the tough Dragon" ;
c[1]= "weeped when he found Danny's body laying there on the ground" ;
c[2]= " Dispaired, he burt down the iron throne made of a throusand sword" ;
c[3]= "  ...What a heartbreaking scene" ;
c[4]= "Game of thrones" ;  

//length -1 = maximum size of array index decreamental
//  c.length specify the size of the array dynamically when feeding  object values from a dynamic data source

console.log(c.length + " <= size of array(C.length is DYNAMIC)");

for(var i=0; i<c.length; i++) //length -1 = maximum size of array indexcls
{ console.log(c[i]);}

// instead of c.length you can specify the size of the array for static feeding, but if you're pulling object values from a website better to use dynamic feeding

//  c.length specify the size of the array dynamically when feeding  object values from a website

console.log(c.length + " <= size of array is c (C.length is DYNAMIC)");

for(var i=0; i<c.length; i++)
{ console.log(c[i]);}
/// To execute the same in reverse ,  var j 's length; where j should be more than first array 0 , print backwards

console.log( " PRINT ARRAY IN REVERSE");

for (var j=c.length-1; j>=0; j--)
{  console.log(c[j]);}


