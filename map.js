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

/*
const students = ["Siddhi", "Khushi", "Rutvij", "Soham"];

const upper = students.map(upperCase);

console.log(upper);

function upperCase(element){
    return element.toUpperCase();
}
*/

const dates = ["2025-02-28", "2025-04-30", "2026-03-26"];

const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element){
    const parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}}`; //day,month,year jaise return hoga
}