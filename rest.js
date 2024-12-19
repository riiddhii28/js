// rest parameters = (...rest) 

//spread = expands array to separate elements
//rest = bundles separate elements to array

/*
function openFridge(...foods){
    console.log(foods);
}

const food1 = "pizza";
const food2 = "sushi";
const food3 = "tacos";
const food4 = "ice cream";

openFridge(food1, food2, food3, food4);

//output: (4) ['pizza', 'sushi', 'tacos', 'ice cream']

*/

function sum(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}

const total = sum(1, 2, 3, 4, 5);
console.log(`Your total is ${total}`)


//average
function getAvg(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
}

const avg = getAvg(100, 52, 83, 45, 85);
console.log(`Your average is ${avg}`)


//combine strings
function combineStrings(...strings){
    return strings.join(" ");
}

const fullName = combineStrings("Ms.", "Riddhi", "patel");
console.log(fullName);