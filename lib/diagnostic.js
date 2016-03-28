'use strict';

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
const min = function min(a, b) {
  if (a < b) {
    return a;
  } else if (b < a) {
    return b;
  }
};

// I'm not sure on how to accept zero arguments, unless its as simple as
// leaving the () empty


// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers
const sum = function sum(a, b) {
  return a + b;
};



// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue
const newArray = function newArray(length, defaultValue) {
  return newArray (length(defaultValue));


};

// I'm clearly lost here, and I don't think I even completed 1 and 2 correctly.
// would going back over the links and information in the
// js-functions-ins-and-outs-study	json-study be a good place to start?

// Question 4
// Add code to newArray so that if defaultValue is a
// function then the elements in the array will be set
// to the result of invoking defaultValue with the
// elements index as an argument

// Questions 5
// Write a function that adds or replaces a method on an object
// using the given propertyName
// If the argument obj is unset, create a new object
// The function you write should return
// the object passed in as an argument or the object created
const addMethod = function addMethod(propertyName, method, obj) {
  return this.

};

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  newArray: newArray,
  addMethod: addMethod,
};
