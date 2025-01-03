//callback = a func that is passed as an argument to another func

//used to handle asynchronous operations.

hello(wait);


//resukt: 
//Hello
//Wait

function hello(callback){
    console.log("Hello");
    callback();
}

function leave(){
    console.log("leave");
}

function wait(){
    console.log("wait");
}


function goodbye(){
    console.log("goodbye");
}

//new
sum(display, 5, 2);

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function display(result){
    console.log(result);
}
