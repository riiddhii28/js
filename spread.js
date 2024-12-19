// spread operator (...) = array or string to separate elements

let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

let max = Math.max(...numbers);
console.log(max);

let min = Math.min(...numbers);
console.log(min);


let username = "riddhi";
let letters = [...username].join("-");
console.log(letters);

//combining
let cars = ["redbull", "mercedes", "ferrari"];
let moreCars = ["mclaren", "porsche"];

let newCars = [...cars, ...moreCars, "bmw", "rolls royce"];
console.log(newCars);

