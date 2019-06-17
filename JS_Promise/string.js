
//js doesnt have to have string declaration

// String Literal declaration

var name="Melissa";
console.log(name);
console.log(name.charAt(2));
//console.log(name.indexOf("m"));
      
var newname=name.concat("Kanyi");
console.log(newname);
console.log(name.indexOf("l"));

console.log(name.slice(1,3));
//starting index is inclusive - ending index is exclusive

console.log(name.toUpperCase());

var name="Georgey    ";
console.log(name.trim());

///dynamic: String object declaration

var name2=new String("Pogey");   //string object declaration
console.log(name2);