/*
let day = 1;

switch(day){
    case 1:
        console.log("monday");
        break; 

    case 2:
        console.log("tuesday");
        break; 
    
    case 3:
        console.log("wednesday");
        break; 

    case 4:
        console.log("thursday");
        break; 
    
    case 5:
        console.log("friday");
        break; 

    case 6:
        console.log("saturday");
        break;

    case 7:
        console.log("sundayay");
        break;

    default:
        console.log("not a day");    
}

*/

let testScore = 69;
let grade;

switch(true){
    case testScore >= 80:
        grade = "A";
        break;
    
    case testScore >= 60:
        grade = "B";
        break;

    default:
        grade = "C";
}

console.log(grade);