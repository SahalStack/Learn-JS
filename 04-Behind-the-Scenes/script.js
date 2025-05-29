'use strict';

/////// SCOPE CHAIN WORKS ///////
const calcAge = function (birthYear) {
  const age = 2025 - birthYear;
  // Inside Block scope
  console.log(firstName); // when js engine is at this line was executed,js looks for firstName variable in the current scope,didnot find variable in that block,then looks outside the block scope-(scope Chain) and Finds the variable-firstName in 'Global scope'.

  function printAge() {
    let output = `${firstName},You are ${age}, born in ${birthYear}`; //checks age and birthYear lookup from out of scope.
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var mellenial = true;
      //Creating new variable with same name as outerscopes
      const firstName = 'Steven';
      const str = `oh, and u r a mellinuim, ${firstName}`; //at this point JS look for firstName so whats it will execute Sahal/Steven, its Steven.
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      //re-assigning outer scopes variable
      output = 'NEW OUTPUT';
    }
    // console.log(str) //They are only accessible inside block, so const & let are block scoped.
    console.log(mellenial); // JS can take var variables,Bcos its function scoped.
    // console.log(add(2, 3)); Cannot access add function(),bCos function are also block scoped.
    console.log(output);
  }
  printAge();
  return age;
};

const firstName = 'Sahal'; //Global scope
calcAge(1991);

//Hoisting
//variables
console.log(me);
console.log(job);
console.log(year);

var me = 'sahal';
let job = 'developer';
const year = 2004;

//functions
console.log(addDecl(2, 3)); //✔️we can access function declartion before initializing
console.log(addExpr(2, 3));
console.log(addArr(2, 3));

function addDecl(a, b) {
  return a + b;
}

//function expression
const addExpr1 = function (a, b) {
  return a + b;
};

//arrow function
const addArr = (a, b) => {
  a + b;
};

//Example
console.log(undefined);
if (!numOfProducts) deleteShppingCart(); //⚠️this is error in rel life scenario but true in code, it will show undefined & undefined not equal to 10,so it will be executed

var numOfProducts = 10;

function deleteShppingCart() {
  console.log('all products deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
// console.log(window);

//this Keyword
console.log(this); //gives window object

const calcAge2 = function (birthYear) {
  console.log(2025 - birthYear);
  console.log(this); //gives undefined.
};
calcAge2(2004);

const calcAgeAroww = (birthYear) => {
  console.log(2025 - birthYear);
  // console.log(this); //gives window object.
};
calcAgeAroww(2000);

const sahal = {
  year: 2004,
  calcAge: function () {
    console.log(this);
    console.log(2025 - this.year);
  },
  greeting: console.log('hyy babu'),
};
sahal.calcAge();

const baabu = {
  year: 2017,
};

baabu.calcAge = sahal.calcAge;//Object Borrowing
baabu.calcAge();

const f = sahal.calcAge;
f();

var firstmame = 'Shafeeq';

// const sahal = {
//   thefirstName: 'Sahl',
//   year: 1991,
//   calcAge: function () {
//     console.log(2037 - this.year);
//     // const self = this;
//     // const isMillenial = function () {
//     //   console.log("self",self)
//     //   console.log(self.year >= 1981 && self.year <= 1996);

//     const isMilleniell = function () {
//       console.log(self);
//     };

//     // };
//     isMilleniell();
//   },

//   greeting: () => {
//     // when we use arrow function here it wont work bcos this keyword in arrow function does dont get own this keyword,look for window-global scope and it cannot find firstName and give undefined.
//     console.log(this);
//     console.log(`Hello ${this.thefirstName}`);
//   },
// };
// sahal.greeting();
// sahal.calcAge();

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   // console.log(arguments);//do not work in arow function.
//   return a + b;
// };

// addArrow(2, 5);

//Object Reference in Practice
const elon1 = {
  firstName: 'Elon',
  lastName: 'musk',
  age: 37,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const marriedElon = marryPerson(elon1, 'Davis');

// const marriedElon = elon; //takes original copy of elon object, Same reference as elon object
// marriedElon.lastName = 'Davis';
console.log('Before', elon1); //in this line of code that will tregger the elon object and in that lastName is Davis,bcos objects are stored in heap and when we change in object property in one the two objects point to 1 reference
console.log('After:', marriedElon);

// elon.age = 30;
// console.log(elon);
// console.log(marriedElon);

// const newObj = new elon();
// console.log(newObj);

const elon2 = {
  firstName: 'Elon',
  lastName: 'musk',
  age: 37,
  family: ['steve jobs', 'jeff bezos'],
};

// console.log(elon2);

//shallow copy
const elon2Copy = { ...elon2 };
elon2Copy.lastName = 'william';

// console.log('elonCopy', elon2Copy);
// elon2.family.push('mary');
// elon2.family.push('jhon');

// console.log('Before', elon2);
// console.log('After:', elon2Copy);

//Deep Copy
const jessicaClone = structuredClone(elon2)
jessicaClone.family.push('mary');
jessicaClone.family.push('jhon');

console.log(' original', elon2);
console.log('After Clone:', jessicaClone);