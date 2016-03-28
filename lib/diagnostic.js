'use strict';

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
const min = function min() {
  let minimum = null;
  if (arguments.length === 0) {
    minimum = undefined;
  } else {
    minimum = arguments[0];
  }

  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i] < minimum) {
      minimum = arguments[i];
    }
  }

  return minimum;
};

// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers
const sum = function sum() {
  let numHolder = null;
  if (arguments.length === 0) {
    numHolder = undefined;
  } else {
    numHolder = arguments[0];
  }

  for (let i = 1; i < arguments.length; i++) {
    numHolder += arguments[i];
  }

  return numHolder;
};

// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue
const newArray = function newArray(length, defaultValue) {
  let arrayCopy = [];
  if (typeof defaultValue === 'function') {
    for (let i = 0; i < length; i++) {
      arrayCopy.push(defaultValue(i));
    }
  } else {
    for (let i = 0; i < length; i++) {
      arrayCopy.push(defaultValue);
    }
  }

  return arrayCopy;
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
  let newObj = null;
  if (typeof obj === 'object') {
    obj[propertyName] = method;
    return obj;

  } else {
    newObj = {};
    newObj[propertyName] = method;
    return newObj;

  }
};

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  newArray: newArray,
  addMethod: addMethod,
};
