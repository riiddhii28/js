//forEach() = used to iterate over the elemnts of an array and
// apply specific func (callback) to each elemnt

//array.forEach(callback)

//element, index, array are provided

/*
let numbers = [1,2,3,4,5];

numbers.forEach(cube);
numbers.forEach(display);

function double(element, index, array){
    array[index] = element*2;
}

function square(element, index, array){
    array[index] = element**2;
}

function cube(element, index, array){
    array[index] = element**3;
}

function display(element){
    console.log(element);
}
*/

let fruits = ["apple", "banana", "orange", "cherry"];

fruits.forEach(capitalise);
fruits.forEach(display);

function display(element){
    console.log(element);
}

function capitalise(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function uppercase(element, index, array){
    array[index] = element.toUpperCase();
}