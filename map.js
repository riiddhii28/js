// .map() = accepts a   callback and applies that func to each elemnt of array

//returns a new array

/*
const numbers=[1, 2, 3, 4, 5 ];

const squares=numbers.map(square);

console.log(squares);

function square(element){
    return Math.pow(element, 2)
}
*/

const students = ["Siddhi", "Khushi", "Rutvij", "Soham"];

function upperCase(element){
    return element.toUpperCase();
}