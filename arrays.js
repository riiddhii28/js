fruits = ["apple", "banana", "mango", "cherry"];

fruits[0] = "coconut";

//fruits.push("strawberry");
// //fruits.pop();

//fruits.unshift("grape"); //add at begininng
//fruits.shift();


console.log(fruits);
console.log(fruits[0]);
console.log(fruits[5]); //undefined


let numOfFruits = fruits.length;
console.log(numOfFruits);


let index = fruits.indexOf("banana");
console.log(index);

let index2 = fruits.indexOf("grapes");
console.log(index2);       //returns -1 (not found in array)


//using for loop for access
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

//for loop but access in reverse
for (let i = fruits.length - 1; i >= 0; i--){
    console.log(fruits[i]);
}

//shoutcut
for (let fruit of fruits){
    console.log(fruit);
}

console.log("new");

cars = ["ferrari", "redbull", "mclaren", "mercedes"];

for (let car of cars){
    console.log(car);
}
//cars.sort(); //alphabetical sorting

cars.sort().reverse(); // sorting in revrse alphabetical
