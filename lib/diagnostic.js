'use strict';

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
const min = function min(arguments) {
  let result = Infinity;

  for (let i = 0; i < arguments.length; i++){
    if( arguments[i] < result){
      result = arguments[i];
    }
  }
  return result;
};

// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers
const sum = function sum(arguments) {
  let result = 0;

  for(let i = 0; i < arguments.length; i++){
    result += arguments[i];
  }
  return result;
};

// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue
const newArray = function newArray(length, defaultValue) {
  let arrayNew = [];

  for( let i = 0; i < length; i++){
    arrayNew.push(defaultValue);
  }
  return arrayNew;
};

// Question 4
// Add code to newArray so that if defaultValue is a
// function then the elements in the array will be set
// to the result of invoking defaultValue with the
// element's index as an argument

const newArray = function newArray(length, defaultValue) {
  let arrayNew = [];

  for( let i = 0; i < length; i++){
    arrayNew.push(defaultValue(i));
  }
  return arrayNew;
};

// Questions 5
// Write a function that adds or replaces a method on an object
// using the given propertyName
// If the argument obj is unset, create a new object
// The function you write should return
// the object passed in as an argument or the object created
const addMethod = function addMethod(propertyName, method, obj) {
  if (obj === undefined) {
    let obj = {};
  }
  obj.propertyName = method;
  return obj;
};


// Used by testing
module.exports = {
  min: min,
  sum: sum,
  newArray: newArray,
  addMethod: addMethod,
};
