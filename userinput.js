//window prompt OR HTML textbox

//let username;

//username = window.prompt("What is your username?");

//console.log(username);

//let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myH1").textContent = `Hello ${username}`;

}