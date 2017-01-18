'use strict';

// uncomment all formal parameters before starting
// on questions 3 or 5, i.e. remove the `/*` and `*/`

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
const min = function min() {
  let minNum = arguments[0];
  for (let i = 0; i < arguments.length; i++) {
    if (minNum > arguments[i]) {
      minNum = arguments[i];
    }
  }
  return minNum;
};

// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers
const sum = function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
};

// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue
const newArray = function newArray(length, defaultValue) {
  let result = [];
  if (typeof defaultValue === 'function') {
    for (let i = 0; i < length; i++) {
      result[i] = defaultValue(i);
    }
  } else {
    for (let i = 0; i < length; i++) {
      result[i] = defaultValue;
    }
  }
  return result;
};
// Grunt test passed when I ran it on question 3 but worked for 4 and broke for 3 when I added the new code. So I copied and pasted the function that works for question 4 below.
// Question 4
// Add code to newArray so that if defaultValue is a
// function then the elements in the array will be set
// to the result of invoking defaultValue with the
// element's index as an argument

// const newArray = function newArray(length, defaultValue) {
//   let result = [];
//   for (let i = 0; i < length; i++) {
//     result[i] = defaultValue(i);
//   }
//   return result;
// };

// Questions 5
// Write a function that adds or replaces a method on an object
// using the given propertyName
// If the argument obj is unset, create a new object
// The function you write should return
// the object passed in as an argument or the object created
const addMethod = function addMethod(propertyName, method, obj) {
  if (arguments.length < 3) {
    const o = {};
    o[propertyName] = method;
    return o;
  } else {
    obj[propertyName] = method;
    return obj;
  }
};

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  newArray: newArray,
  addMethod: addMethod,
};
