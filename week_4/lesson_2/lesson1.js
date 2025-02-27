console.log("Welcome to javascript");
console.log("Hello ITECA Studdents");


//variables
let age = 12;
console.log(age);

let fname = "Peter";
console.log(fname)

let price = 45.69
console.log(price);

let letter = "k";
console.log(letter);

const PI=3.14;
console.log(PI);

let isHapyy = false;

//data types
console.log(typeof age);
console.log(typeof fname);
console.log(typeof price);
console.log(typeof letter);
console.log(typeof PI);
console.log(typeof isHapyy);

//conditionals of if statements
if(age < 12){
    console.log(`Age is ${age}: Therefore you are a child`);
} else {
    console.log(`Age is ${age}: There you are not a child`);
}

/*
child: 0 to 12
teenager: 13 to 20
adult: above 21 to 60
senior: 61 to 99
*/

if(age > 0 && age < 12){
    console.log(`Age is ${age}: Therefore you are a child`);
} else if (age > 12 && age < 20) {
    console.log(`Age is ${age}: There you a teenager`);
} else if (age > 20 && age < 60) {
    console.log(`Age is ${age}: There you are a adult`);
} else{
    console.log(`Age is ${age}: There you are a senior`);
}



//functions
function greeting() {
    console.log(`Helloo guys i am very much sad`);
}

greeting();

function addition(a,b) {
    return a+b;
}

let result = addition(12,3);// arrow functions
console.log(result);

//let hours_of_study=23;
//let threshold = 20; // ternary operator go look at it
//let conclusion = hours_of_study>threshold?"You shall pass":"You shall not pass";
//console.log(conclusion);
let firstnum = prompt("Enter first number");
let secnum = prompt("Enter second number");
let sum = Number(firstnum) + Number(secnum);
alert(`The sum off ${firstnum} and ${secnum} is ${sum}`)

//console.log(firstnum);
//alert("My number is " + firstnum);
//console.log(typeof firstnum);

//arrays in javascript