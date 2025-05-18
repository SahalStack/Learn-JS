"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive");

// const interface = 'audio';

//function declaration
function logger() {
  console.log("my name is Sahl");
}

//Calling/Invoking the function
logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples & ${oranges} oranges.`;
//   return juice;
// }

//function giving argument.
// const applejuice = fruitProcessor(4, 0);
// const orangjuice = fruitProcessor(0, 6);
// const appleOrangeJuice = fruitProcessor(3, 5);
// console.log("Apple juice:", applejuice);
// console.log(orangjuice);
// console.log(appleOrangeJuice);

//Function Decleration
// const yourAge = calcAge1(2004);
// function calcAge1(birthYear) {
//   const currentYear = new Date().getFullYear();
//   return currentYear - birthYear;
// }
// console.log("age=", yourAge);

//function Expression
// const calcAge2 = function (birthYear) {
//   const currentYear = new Date().getFullYear();
//   return currentYear - birthYear;
// };

// const age2 = calcAge2(2004);
// console.log(yourAge, age2);

//arrow function
// const calcAge3 = (birthYear) => 2025 - birthYear;
// const myage = calcAge3(2004);
// console.log(myage);

// const yearsUntilRetirement = (birthYear,fName) => {
//   const currentage = 2025 - birthYear;
//   const retirrmrnt = 65 - currentage;
//   return `${fName} retires in ${retirrmrnt} years.`
// };

// console.log(yearsUntilRetirement(2004,"Sahal"));
// console.log(yearsUntilRetirement(2000,"bob"));

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applepieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applepieces} piece of apple, & with ${orangePieces} piece of orange.`;
  return juice;
}

// console.log(fruitProcessor(2, 3));

// const calcage4 = function (birthYear) {
//   return 2025 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, fName) {
//   const currentage = calcage4(birthYear);
//   const retirrmrnt = 65 - currentage;

//   if (retirrmrnt > 0) {
//     console.log(`${fName} retires in ${retirrmrnt} years`);
//     return retirrmrnt;
//   } else {
//     console.log(`${fName} has Already Retired `);
//     return -1;
//   }
// };

// console.log(yearsUntilRetirement(2004, "sahal"));
// console.log(yearsUntilRetirement(1960, "mike"));

//CHALLENGE
// 1. Arrow function to calculate average
const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3,4,5));

// 2. Test Data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// 3. Function to check winner
function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas > avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
}

// 4. Check winner for Data 1
checkWinner(scoreDolphins, scoreKoalas);

// 5. Test Data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

// 6. Check winner for Data 2
checkWinner(scoreDolphins, scoreKoalas);

//Introduction To array
const friends = ["Sahal", "shafeeq", "Adil", "Raazi"];
console.log(friends);
// console.log(friends[0],friends[3]);
// console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Fadhil";
console.log(friends);

//Creating new array
const years1 = new Array(2004, 2005, 2004, 2006);
console.log(years1);

const fName = "Sahal";
const lName = "Fouz";
const sahl = [fName, lName, 2025 - 2004, "developer", friends]; //Array inside the Array
console.log(sahl);
console.log(sahl.length);

const years = [1995, 2000, 2005, 2004, 2010];

const calcAge2 = function (birthYear) {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
};

const ageSahal = calcAge2(years[3]);
const ageShafeeq = calcAge2(years[2]);
console.log("shafeeq age:", ageShafeeq);
console.log("Sahals Age:", ageSahal);

const ages = [ageSahal, ageShafeeq, years[years.length - 1]];
console.log(ages);

//add Elements at last of an Array
const friends1 = ["Sahal", "shafeeq", "Adil", "Raazi"];
const newLengthFriend = friends1.push("Azili");
console.log(newLengthFriend);
console.log(friends1[friends1.length - 1]);

//Add Elements At first Of An array
friends1.unshift("Jhon");
console.log(friends1);

//remove element from an array
friends1.pop(); //last Element
console.log(friends1);
const popped = friends1.pop();
console.log(popped);
console.log(friends1);

// const shifted = friends1.shift();
// console.log(shifted);
// console.log(friends1);

// console.log(friends1.indexOf("Adil"));

// friends1.push(23);
// console.log(friends1.includes("Sahal"));
// console.log(friends1.includes("bob"));
// console.log(friends1.includes(23));

// if (friends1.includes("blah")) {
//   console.log("You have the friend Called Sahal");
// } else {
//   console.log("there is no such person");
// }
// console.log(friends1);

const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
console.log("bills:", bills);
// console.log(bill[0]);
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals =
  bills[0] +
  bills[1] +
  bills[2] +
  calcTip(bills[0]) +
  calcTip(bills[1]) +
  calcTip(bills[2]);
console.log("tips", tips);
console.log("total:", totals);

//Objets
//object literal syntax
// const sahalObj = {
//   fName: "Sahal",
//   lName: "Fouz",
//   Age: 2025 - 2004,
//   Job: "Developer",
//   friends: ["shafeeq", "Adhil", "Raazi"],
// };

//retreiving data from object
//dot notation
// console.log(sahalObj.fName);
// console.log(sahalObj.friends);

// //bracket notation
// console.log(sahalObj["lName"]);

// const nameKey = "name";
// console.log(sahalObj["fName" + nameKey]);
// console.log(sahalObj.lName + nameKey);

//Example-bracket notation -use
// const intrestedIn = prompt(
//   "What do u want to know about sahl ? choose between fName ,Lastname, age, job and friends"
// );

// if (sahalObj[intrestedIn]) {
//   console.log(sahalObj[intrestedIn]);
// } else {
//   console.log(
//     "Wrong Request, choose between fName ,Lastname, age, job and friends"
//   );
// }

//adding property to objct
// sahalObj.location = "Kannur";
// sahalObj["instagramId"] = "___sahl";
// console.log(sahalObj);

//challenge

// "Sahal" has 3 friends and his best friend is called Shafeeq
//Answer
// console.log(
//   `${sahalObj.fName} has ${sahalObj.friends.length} friends and his best friend is called ${sahalObj.friends[0]}`
// );

const sahalObj = {
  fName: "Sahal",
  lName: "Fouz",
  birthYear: 2004,
  Job: "Developer",
  friends: ["shafeeq", "Adhil", "Raazi"],
  hasDriverLicense: false,

  getSummary: function () {
    return `${
      this.fName
    } is a ${this.calcAge()}-year old developer, and he has ${
      this.hasDriverLicense ? "a" : "no"
    } driving Licence.`;
  },
  // calcAge2: function () {
  //   // console.log(this);
  //   //Any function that attached to an object is called Method
  //   return  2025 - this.birthYear;
  // },
  calcAge: function () {
    this.age = 2025 - this.birthYear;
    return this.age;
  },
};

console.log(sahalObj.getSummary());
// console.log(sahalObj.calcAge());

// console.log(sahalObj.age);

// console.log(sahalObj["Job"]);
// console.log(sahalObj["calcAge2"](2004));

//Challenge
//"Sahal is a 21-year old developer, and he has passed a driverlicense"

////////Challenge -3
// CHALLENGE #3
// Let's go back to Mark and John comparing their BMIs!

// This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

// Your tasks:

// For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

// Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property called bmi (lowercase), and also return it from the method.

// Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

// TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = Math.floor(this.mass / this.height ** 2).toFixed(1);
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: mark.calcBMI,
//   // calcBMI: function () {
//   //   this.bmi = Math.floor(this.mass / this.height ** 2).toFixed(1);
//   //   return this.bmi;
//   // },
// };
// console.log(mark.calcBMI(), john.calcBMI());
// console.log(mark.bmi, john.bmi);

// if (mark.bmi > john.bmi) {
//   console.log(`${mark.fullName}'s BMI (${mark.calcBMI()})
// is higher that ${john.fullName}'s BMI (${john.calcBMI()})`);
// } else if (john.bmi > mark.bmi) {
//   console.log(`${john.fullName}'s BMI (${john.calcBMI()})
// is higher that ${mark.fullName}'s BMI (${mark.calcBMI()})`);
// }

//Controll structure
// console.log("Lifting weights repetition 1");
// console.log("Lifting weights repetition 2");
// console.log("Lifting weights repetition 3");
// console.log("Lifting weights repetition 4");
// console.log("Lifting weights repetition 5");
// console.log("Lifting weights repetition 6");
// console.log("Lifting weights repetition 7");
// console.log("Lifting weights repetition 8");
// console.log("Lifting weights repetition 8");
// console.log("Lifting weights repetition 9");

//For loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

const myData = [
  "Sahal",
  "Fouz",
  2025 - 2004,
  "devloper",
  ["shafeeq,", "adhil"],
];

// const types = [];

// for (let i = 0; i < myData.length; i++) {
//   //reading from myData array
//   console.log(myData[i], typeof myData[i]);

//   //fill in types array
//   // types[i] =  myData[i];
//   types.push(typeof myData[i]);
// }

// console.log(types);

// const years2 = [1991, 2007, 1969, 2004, 2010, 2020];
// const calculateAge = [];

// for (let i = 0; i < years2.length; i++) {
//   calculateAge.push(2025 - years2[i]);
// }

// console.log(calculateAge);

// //continue and Break statemnet
// console.log("==== ONLY STRINGS ====");
// for (let i = 0; i < myData.length; i++) {
//   if (typeof myData[i] != "string") continue;
//   console.log(myData[i], typeof myData[i]);
// }

// console.log("====BREAK WITH NUMBER");
// for (let i = 0; i < myData.length; i++) {
//   if (typeof myData[i] === "number") break;
//   console.log(myData[i], typeof myData[i]);
// }

// // let i = 5 ; 5 >= 0 ; 5--
// for (let i = myData.length; i >= 0; i--) {
//   console.log(i, myData[i]);
// }

// for (let exercise = 1; exercise <= 3; exercise++) {
//   console.log(`====Starting Exercise ${exercise}`);
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise: ${exercise} Lifting weights Repition ${rep}`);
//   }
// }

//while loop
// let i = 1;
// while (i <= 10) {
//   console.log(`hyyy ${i}`);
//   i++;
// }

// let dice = Math.floor(Math.random() * 6 + 1);

// while (dice !== 6) {
//   console.log(`you rolled dice ${dice}`);
//   dice = Math.trunc(Math.random() * 6 + 1);
//   if (dice === 6) {
//     console.log("Loop is about to end.");
//   }
// }

//CHALLENGE #4
//Let's improve Steven's tip calculator even more, this time using loops!

//Create an array called bills containing all 10 test bill values.

//Create empty arrays for the tips and the totals (tips and totals)

//Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
//TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.

//Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

// First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

// To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

// Call the function with the totals array.

const bills11 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips1 = [];
let totals1 = [];

const calcTip1 = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip1(bills[i]);
  tips1.push(tip);
  totals1.push(tips + bills[i]);
}
console.log(bills1, tips1, totals1);

const arr = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const calcAverage1 = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage1([2, 3, 7]));
console.log("tips:", calcAverage1(tips1));
