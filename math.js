//Math= built-in object 

console.log(Math.PI);
console.log(Math.E);

let x = 3.21;
let z;
let t;


z = Math.round(x);
t = Math.trunc(x); //eliminates decimal portion

console.log(z);
console.log(t);


let a = 3.99;
b = Math.floor(a);
c = Math.ceil(a);

console.log(b);
console.log(c);

let m = 3;
let n = 2;
let l = Math.pow(m,n) // 3 raised to 2
console.log(l);

let num = 81;
let root = Math.sqrt(num);
console.log(root);

let p = 10;
let q = Math.log(p);
console.log(q);

let neg = -5.67
let abs = Math.abs(neg); //shows positive num
console.log(abs);

let u = 3;
let v = 4;
let w = 5;
let max = Math.max(u,v,w);
let min = Math.min(u,v,w);
console.log(max);
console.log(min);


/*
other:
Math.sin
Math.cos
Math.tan
*/
