//reusable code
//can use whenever called

function happyBirthday(username, age){
    console.log("Happy Birthday to you!");
    console.log(`Happy Birthday ${username}!`);
    console.log(`You are ${age} years old.`);
}

happyBirthday("Riddhi", 20);
happyBirthday("Siddhi", 19);



function add(x,y){
    let result = x +y;
    return result;
}

let answer = add(2,3);
console.log(answer); //output: 5

//shortcut
function add2(x,y){
    return x + y;
}
console.log(add2(2, 3));

function sub(x, y){
    return x - y;
}
console.log(sub(2, 3));

//even - odd
function isEven(number){
    if(number % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isEven(10)); //true

//email validation
function isValid(email){

    if(email.includes("@")){
        return true;
    }
    else{
        return false;
    
    }
}
console.log(isValid("rii@any.com"));
console.log(isValid("riianyyy.com"));

//shortcut
function isValid2(email){

    return email.includes("@") ? true : false;
}
console.log(isValid2("rii@any.com"));