'use strict';

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
const min = function min() {
  let small = arguments[0];
  arguments.forEach(function(num) {
    if (num < small) { small = num; }
  });
  return small;
};

// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers
const sum = function sum() {
  let added = 0;
  arguments.forEach(function(num) {
    added += num;
  });
  return added;
};

// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue
const newArray = function newArray(length, defaultValue) {
  let ary = new Array(length);
  return ary.map(function(element, index)  {
    ary[index] = typeof defaultValue === 'function' ? defaultvalue(index) : defaultvalue;
  });
};

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
  let returnedObj = obj || new Object();
  returnedObj.propertyName = method;
  return returnedObj;
};

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  newArray: newArray,
  addMethod: addMethod,
};
