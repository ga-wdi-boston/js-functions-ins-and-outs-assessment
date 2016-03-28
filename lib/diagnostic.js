'use strict';

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
const min = function min() {
  let result = arguments[0];
  for (let i = 0; i < arugments.length; i++) {
    if (result < arugments[i]) {
      return result = arugments[i];
    }//if
  }//for
  return result;
};

// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers
const sum = function sum() {
  let result = 0;
  let currentNum = arugments[i];
  for (let i = 0; i < arugments.length; i++) {
    result += currentNum;
  }
  return result;
};

// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue
const newArray = function newArray(length, defaultValue) {
  let array = [];
  for (var i = 0; i < length; i++) {
    array.push(defaultValue)
  }
  return array;
};

// Question 4
// Add code to newArray so that if defaultValue is a
// function then the elements in the array will be set
// to the result of invoking defaultValue with the
// elements index as an argument
const newArray = function newArray(length, defaultValue) {
  let array = [];
  let count = i;
  for (var i = 0; i < length; i++) {
    if (!defaultValue) {
      array.push(count);
    } else {
      array.push(defaultValue);
    }
  }//for
  return array;
};

// Questions 5
// Write a function that adds or replaces a method on an object
// using the given propertyName
// If the argument obj is unset, create a new object
// The function you write should return
// the object passed in as an argument or the object created
const addMethod = function addMethod(propertyName, method, obj) {
  return {
    propertyName;
    method;
    obj;
  };
};

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  newArray: newArray,
  addMethod: addMethod,
};
