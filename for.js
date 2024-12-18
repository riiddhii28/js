/*
for(let i = 0; i <= 10; i++){
    console.log(i);
}

for(let j = 2; j <= 10; j+=2){
    console.log(j);
}
*/

/*
for(let i = 1; i <= 20; i++){

    if(i == 13){
        continue;   //13 is not printed
    }else{
    console.log(i);
    }
}
*/

for(let i = 1; i <= 20; i++){

    if(i == 13){
        break;   //only till 12 printed
    }else{
    console.log(i);
    }
}