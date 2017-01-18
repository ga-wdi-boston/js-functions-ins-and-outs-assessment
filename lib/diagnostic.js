'use strict';

// uncomment all formal parameters before starting
// on questions 3 or 5, i.e. remove the `/*` and `*/`

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
const min = function min() {
  let minNum = arguments[0];

  for (let i = 0; arguments[i].length; i++) {
    if (minNum > arguments[i]) {
      minNum = arguments[i];
    }
    return minNum;
  }
};

// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers
const sum = function sum() {
  let sumNum = arguments[0] + arguments[0];

  for (let i = 0; arguments[i].length; i++) {
    if (sumNum !== arguments[i]) {
      sumNum = arguments[i];
    }

    return sumNum;
  }

};

// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue
const newArray = function newArray(length, defaultValue) {
  let result = [];


  for (let i = 0; i < result[i].length; i++) {
    if (length === defaultValue[i].length) {
    result[i] = result[i].length + result[i].defaultValue;
    }
  }

  return result;
};

// Question 4
// Add code to newArray so that if defaultValue is a
// function then the elements in the array will be set
// to the result of invoking defaultValue with the
// element's index as an argument

// Questions 5
// Write a function that adds or replaces a method on an object
// using the given propertyName
// If the argument obj is unset, create a new object
// The function you write should return
// the object passed in as an argument or the object created
const addMethod = function addMethod(propertyName, method, obj) {

};

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  newArray: newArray,
  addMethod: addMethod,
};
