const fullname = "Riddhi Patel";

let firstName = fullname.slice(0, 6);
let lastName = fullname.slice(7, 13);

console.log(firstName);
console.log(lastName);

let firstChar = fullname.slice(0, 1);
let lastChar = fullname.slice(-1);

let sec = fullname.slice(-5);

console.log(firstChar);
console.log(lastChar);

console.log(sec);

//calculate
let newName = "Siddhi Phatkare";

let firstName2 = newName.slice(0, newName.indexOf(" "));
console.log(firstName2);

let lastName2 = newName.slice(newName.indexOf(" ") + 1);
console.log(lastName2);

const email = "riddhi123@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);


console.log(username);
console.log(extension);