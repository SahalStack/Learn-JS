// let js = "amazing";
// if (js === "amazing") alert("Javascript is Fun");

console.log(40 + 8 + 16 - 10);
console.log("Sahal");
console.log(21);

let lastName = "Fouz";
console.log(lastName);

let firstName = "sahal";
console.log(firstName);

console.log("My full name is:", firstName + lastName);

let sahal_Fouz = "SF";
let $function = 27;
let fName = "zahl";

let myFirstJob = "Programmer";
let mucurrentJob = "Developer";

// let job1 = "Programmer";
// let job2 = "Developer";

let JavascriptIsFun = true;
let myage = 21;
console.log(typeof myage);

JavascriptIsFun = "YES!";
console.log(JavascriptIsFun);

let jsLearn;
console.log(typeof jsLearn); //result-undefined

let sample = null;
console.log(typeof sample); // object

var job = "programmer";
job = "developer"; // we can change the value after declaring
console.log(job);

//Math Operator
const currentYear = new Date().getFullYear();
const ageSahal = currentYear - 2004;
const ageShafeeq = currentYear - 2005;
console.log(ageShafeeq + "," + ageSahal);

console.log(ageSahal * 2, ageShafeeq / 2);

//Assignment operator
let x = 10 + 5; //15
x += 10; // x = x + 10 // 25
x *= 4; // x = x * 10 //25 x 4 = 100
x++; //x = x +1 // 100 + 1 = 101
x = 100;
x--; //x = x- 1 // 100 - 1  = 99
console.log(x);

//Comparison operator
// console.log(ageSahal > ageShafeeq);
// console.log(ageShafeeq > ageSahal);
// console.log(ageShafeeq >= 18, "shafeeq is above 18");
// console.log(ageShafeeq <= 20, "shafeeq is under/equal to 20");

// const comparedAge = currentYear - 2004 > currentYear - 2005;
// console.log(comparedAge);

// console.log(3 + 4 * 5); // 3 + 20

// let x1, y1;
// x1 = y1 = 25 - 10 - 5; // x1 = y1 = 10
// console.log(x1, y1);

// const averageAge = (ageSahal + ageShafeeq) / 2;
// console.log(ageSahal, ageShafeeq, averageAge);

////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

//ANSWER - CHALLENGE 1
//TEST -1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// const markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI);

//TEST-2

// const massMark2 = 95;
// const heightMark2 = 1.88;
// const massJohn2 = 85;
// const heightJohn2 = 1.76;

// const BMIMark2 = massMark2 / (heightMark2 * heightMark2);
// const BMIJohn2 = massJohn2 / (heightJohn2 * heightJohn2);
// console.log(BMIMark2, BMIJohn2);

// const markHigherBMI2 = BMIMark2 > BMIJohn2;
// console.log(markHigherBMI2);

// const theName = "Sahal";
// const theJob = "Developer";
// const birthYear = 2025 - 2004;

// const sahal =
//   "I'am " +
//   theName +
//   " and ,i am working as " +
//   theJob +
//   " and i am Born in " +
//   birthYear +
//   ".";
// console.log(sahal);

// const sahalNew = `Iam ${theName} and Working as a ${theJob}, iam ${birthYear} years old`;

// console.log(sahalNew);
// console.log(`Just a regular string..`);

// console.log(`string
// 	multiple
// 	lines`);

const age = 14;

//if-else Statement works in JS
if (age >= 18) {
  console.log("You Are Eligible for Driving License");
} else {
  const yearsLeft = 18 - age;
  console.log(`You are Not Eligible For DL test! Wait For ${yearsLeft} years.`);
}

const birthYear = 2004;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

const inputYear = "2000"; // this is a string
const changedIntoNumber = Number(inputYear); //converted into a number
console.log(changedIntoNumber + 18); //added with it

//type conversion
console.log(Number("Sahal")); // JS gives-not a number,NaN
console.log(typeof NaN);
console.log(String(23), 23);

//type coersion;
console.log("i am " + 23 + " years old");
console.log("23" + "10" + 3); // this is string-concatinating with + sign
console.log("23" - "10" - 3); // this will became math operation-strings converted into number
console.log("20" * "3");

let n = "1" + "1"; // turns 11
console.log(typeof n, n); //string
n = n - 1; // n = 11-1
console.log(typeof n); // number
console.log(n); // answer = 10

//5 falsy values: 0, "" , undefined ,null ,NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("sahal"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 110; // truthy values
// if (money) {
//   console.log("dont spend it all");
// } else {
//   console.log("You should get a job!");
// }

// let height; // falsy values
// if (height) {
//   console.log(`YAY! height is defined..its ${height}`);
// } else {
//   console.log("Height is Undefined");
// }

//Equality operation "==" / "==="
// const theage = "18";
// if (theage === 18)
//   // it will truthy or falsy value - true/false
//   console.log("You just became an adult (strict)");
// else console.log("You are not 18-False ");

// if (theage == 18) console.log("you just adult (loose)");

// const fav = Number(prompt("Whats your favourite number"));
// console.log(fav);
// // 7

// if (fav == 23) {
//   // '23' == 23
//   console.log("cool");
// } else if (fav === 7) {
//   console.log("7 is also cool number");
// } else {
//   console.log("number is not 23");
// }

// if (fav !== 23) {
//   console.log("why not 23");
// }

const hasDriverLicense = true;
const hasGoodVision = true;

// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense);
const isTired = false;

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log("shafeeq is able to drive");
} else {
  console.log("someone else should drive");
}

console.log(hasDriverLicense || hasGoodVision || isTired);

//Switch statement in JS
// const day = "monday";

// switch (day) {
//   case "monday":
//     console.log("plan Course structure");
//     console.log("go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy weekend");
//     break;
//   default:
//     console.log("Not a valid day");
// }

// if (day === "monday") {
//   console.log("plan Course structure");
//   console.log("go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("Prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("Write code examples");
// }

if (23 > 10) {
  const str = "23 is bigger";
}

//expression & statement
// console.log(`i am ${2025 - 2004} years old`);

// const myAge = 18;
// myAge >= 18
//   ? console.log("i can drive car with DL")
//   : console.log("I cant drive...waiting for 18 year old");

const bill = 40;
let tip = bill >= 50 && bill <= 300 
? 0.15 * bill 
: 0.2 * bill;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
