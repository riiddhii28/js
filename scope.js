//variable scope = local OR global (where a variable is recognised and accessed)

/*
//local
function1();
function2();

function function1(){
    let x = 1;
    console.log(x);
}

function function2(){
    let x = 2;
    console.log(x);
}
*/

/*

//global
let x = 3;

function1();
function2();

function function1(){
    console.log(x);
}

function function2(){
    console.log(x);
}
*/

//both? then local is preferred
let x = 3;

function1();
function2();

function function1(){
    let x = 1;
    console.log(x);  
}

function function2(){
    let x = 2;
    console.log(x);
}

//result is 1 and 2 (local)