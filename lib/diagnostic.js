'use strict';

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
const min = function min() {
  let answer = arguments[0];
  for (let i = 0; i < arguments.length; i++) {
    if (answer > arguments[i]) {
      answer = arguments[i];
    }
  }
  return answer;

};

// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers
const sum = function sum() {
  let answer = 0;
  for (let i = 0; i < arguements.length; i++) {
      answer += arguments[i];
    }

  return answer;

};

// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue
const newArray = function newArray(length, defaultValue) {
  let ary = new Array(length);
  for (let i =0; i < length; i++) {
    ary[i] = defaultValue);
  }

  return ary;
};

// Question 4
// Add code to newArray so that if defaultValue is a
// function then the elements in the array will be set
// to the result of invoking defaultValue with the
// elements index as an argument
const newArray = function newArray(length, defaultValue) {
  let ary = new Array(length);
  if (typeof defaultValue === 'function') {
    for (let i =0; i < length; i++) {
      ary.forEach(defaultValue[i]);
    }
  }
  else {
    for (let i =0; i < length; i++) {
      ary[i] = defaultValue);
    }
  }

  return ary;
};

// Questions 5
// Write a function that adds or replaces a method on an object
// using the given propertyName
// If the argument obj is unset, create a new object
// The function you write should return
// the object passed in as an argument or the object created
const addMethod = function addMethod(propertyName, method, obj) {
  let newObj = {};
  newObj = obj;

  if (obj.propertyName !== null) {
    newOnj.propertyName = obj.propertyName;
  }
  else {

  }

  return newObj;
};

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  newArray: newArray,
  addMethod: addMethod,
};
