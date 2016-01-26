'use strict';

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
const min = function min() {
    let args = Array.isArray(arguments[0]) ? arguments[0] : arguments;
    let answer = args[0];
  for (let i = 1; i < args.length; i++) {
    if (answer > args[i]) {
      answer = args[i];
    }
  }

  return answer;
};

// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers
const sum = function sum() {
    let args = arguments[0] instanceof Array ? arguments[0] : arguments;
    let answer = args[0];
      for (let i = 1; i < args.length; i++) {
        answer += args[i];
      }

  return answer;
};

// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue
const newArray = function newArray(length, defaultValue) {
  newArray.forEach(length, defaultValue);
};

return newArray;

// Question 4
// Add code to newArray so that if defaultValue is a
// function then the elements in the array will be set
// to the result of invoking defaultValue with the
// elements index as an argument
const newArray = function newArray(length, defaultValue) {
  if (defaultValue())
    newArray.forEach(length, defaultValue);
};

return newArray;
// Questions 5
// Write a function that adds or replaces a method on an object
// using the given propertyName
// If the argument obj is unset, create a new object
// The function you write should return
// the object passed in as an argument or the object created
const addMethod = function addMethod(propertyName, method, obj) {
  if (typeof obj [method] === 'undefined') {
  obj[method] = propertyName;
  return true;
}
};

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  newArray: newArray,
  addMethod: addMethod,
};
