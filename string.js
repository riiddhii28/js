let username = "Riddhi   ";

console.log(username.charAt(0)); //R

console.log(username.indexOf("d")); //2

console.log(username.lastIndexOf("d")); //3

console.log(username.length); //9

username = username.trim(); 
console.log(username); //Riddhi

username = username.toLowerCase(); 
console.log(username); //riddhi

username = username.toUpperCase();
console.log(username); //RIDDHI


username = username.repeat(3);
console.log(username); //RIDDHIRIDDHIRIDDHI

let result = username.startsWith("R");
console.log(result);

let result2 = username.endsWith("I");
console.log(result2);


let number = "123-456-789";

number = number.replaceAll("-", "");
console.log(number);

number = number.padStart(15, "0"); //pad starting with 0's until its 15 character long
console.log(number);


let number2 = "123-456-789";

number2 = number2.padEnd(15, "0"); //pad ending with 0's until its 15 character long
console.log(number2);