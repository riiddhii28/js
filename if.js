/*
let age = 13;

if(age >= 18){
    console.log("you are old enough to enter this site");
}
else{
    console.log("you must be 18+ to enter this site");
}
*/

/*
let isStudent = true;

if(isStudent){
    console.log("You are studnet");
}else{
    console.log("You are not a student");
}
*/

/*
let age = 20;
let hasLiscense = true;

if(age >= 16){
    console.log("You are old enough to drive");

    if(hasLiscense){
        console.log("You can drive now");
    }else{
        console.log("You need to get a license first");
    }

}else{
    console.log("you are not old enough to drive");
}
*/


const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const result = document.getElementById("result");

let age = 101;

mySubmit.onclick = function(){

    age = myText.value;
    age = Number(age);


    if(age >= 100){
        result.textContent = "You are TOO old to enter this site";
    }
    else if(age == 0){
        result.textContent = "You cant enter this site";
    }
    else if(age >= 18){
        result.textContent ="You are old enough to enter this site";
    }
    else if(age < 0){
        result.textContent ="Your age cant be below 0";
    }
    else{
        result.textContent = "You must be 18+ to enter";
    }
}

