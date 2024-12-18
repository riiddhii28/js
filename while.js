let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username = window.prompt("Enter username:");
    password = window.prompt("Enter pasword:");

    if (username === "myUsername" && password === "myPassword"){
        loggedIn = true;
        console.log("you are logged in");
    }
    else{
        console.log("invalid username or password");
    }
}

