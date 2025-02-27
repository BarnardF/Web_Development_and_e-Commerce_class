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




