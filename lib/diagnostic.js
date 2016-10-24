'use strict';

// uncomment all formal parameters before starting
// on questions 3 or 5, i.e. remove the `/*` and `*/`

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
const min = function min() {
  let result = arguments[0];

  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] < result) {
      result = arguments[i];
    }
  }
    return result;
};

// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers
const sum = function sum() {
  let result = 0;

  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
};

// console.log(sum(1,2,3));

// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue
const newArray = function newArray(/*length, defaultValue*/) {
  let result = []; // this is called the default

  for (let i = 0; i < arguments.length; i++) {
    result = arguments[i];
  }
  return result;
};

// console.log(newArray(5, 1)); // is only returning the value, don't know how to return array of specified length

// Question 4
// Add code to newArray so that if defaultValue is a
// function then the elements in the array will be set
// to the result of invoking defaultValue with the
// element's index as an argument

// don't know how to do #4

// Questions 5
// Write a function that adds or replaces a method on an object
// using the given propertyName
// If the argument obj is unset, create a new object
// The function you write should return
// the object passed in as an argument or the object created
const addMethod = function addMethod(propertyName, method, obj) {
  // adds method on an object
  obj[propertyName] = method;
  return obj;
};

// how to create new object or replace method ??

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  newArray: newArray,
  addMethod: addMethod,
};
