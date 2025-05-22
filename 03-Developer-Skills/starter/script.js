// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error.

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//1)understand the problem

//?)what is temperature amplitude: differnce btween hihgest and lowest temperature in array
//?)How to compute max and min temperatue
//?)whats sensor error ? and what an error looks like

//2)Break problems into subproblem
//- how to ignore errors?
//-find max value and min value in temp?
//-to subtract min from max = amplitude and return it

const calcTempAltitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currenTemp = temps[i];
    if (typeof currenTemp !== 'number') continue;

    if (currenTemp > max) max = currenTemp;
    if (currenTemp < min) min = currenTemp;
  }
  console.log(max, min);
  return max - min;
};

calcTempAltitude([3, 7, 4, 1, 8]);
const amplitude = calcTempAltitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const calcTempAltitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log('Concatinated array', temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currenTemp = temps[i];
    if (typeof currenTemp !== 'number') continue;

    if (currenTemp > max) max = currenTemp;
    if (currenTemp < min) min = currenTemp;
  }
  console.log(max, min);
  return max - min;
};

// calcTempAltitude([3, 7, 4, 1, 8]);
const amplitudeNew = calcTempAltitudeNew([3, 5, 1], [9, 0, 5]);

console.log(amplitudeNew);

//DEBUGGING EXAMPLE
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    //fix the bug here
    value: 10,
  };

  //Find the bug using console.table
  console.log(measurement);
  console.table(measurement);

  console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
//Identify the BUG
console.log(measureKelvin());

// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/
//1)UNDERSTANDING THE PROBLEM
//- Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ºC
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(` ...${data1[0]}ºC ...${data1[1]}ºC ... ${data1[2]}ºC `);

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `... ${arr[i]}ºC in ${i + 1} days `;
  }
  console.log(str + '...');
};

printForecast(data1);

// let sum = 0;
//sum = sum + i

// Coding Challenge #2 With AI

/*
Let's say you're building a time tracking application for freelancers. At some point in building this app, you need a function that receives daily work hours for a certain week, and returns:
1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. Whether the week was full-time (worked 35 hours or more)

//TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/

function analyzeWeek(weekHours) {
  const dayNames = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const totalHours = weekHours.reduce((sum, hours) => sum + hours, 0);

  const daysWorked = weekHours.filter((hours) => hours > 0).length;

  const averageDailyHours =
    daysWorked > 0 ? parseFloat((totalHours / daysWorked).toFixed(1)) : 0;

  const maxHours = Math.max(...weekHours);
  const maxDayIndex = weekHours.indexOf(maxHours);
  const dayWithMostHours = dayNames[maxDayIndex];

  const isFullTime = totalHours >= 35;

  return {
    totalHours,
    averageDailyHours,
    dayWithMostHours,
    daysWorked,
    isFullTime,
  };
}

// Test
const testData = [7.5, 8, 6.5, 0, 8.5, 4, 0];
console.log(analyzeWeek(testData));

const testData2 = [7.5, 8, 6.5, 0, 8.5];
console.log(analyzeWeek(testData));
