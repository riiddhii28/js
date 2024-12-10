let x=100;

console.log(x);

let age=20;
let price=10.99;
let gpa=9.5;

let firstName="Riddhi";
let lastName="Patel";
let email="riddhi123@gmail.com";

let online=true;
let forSale=false;

console.log(`You are ${age} years old`);
console.log(`The price is ${price}`);
console.log(gpa);

console.log(typeof price);
console.log(typeof firstName);

console.log(firstName);
console.log(`My last name is ${lastName}`);
console.log(email);

console.log(typeof online);
console.log(`Is this car for sale?: ${forSale}`);

document.getElementById("p1").textContent= firstName;
document.getElementById("p2").textContent= lastName;
document.getElementById("p3").textContent= online;

document.getElementById("p4").textContent= `Your name is ${firstName}`;
