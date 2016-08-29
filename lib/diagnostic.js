'use strict';

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
const min = function min(numOne, numTwo, numThree) {
  let minimum = 0;
  if (numOne < numTwo && numThree) {
    minimum = numOne;
  }
  else if(numTwo < numOne && numThree){
    minimum = numTwo
  }
  else if(numThree < numOne && numTwo){
    minimum = numThree;
  }
  return minimum;
};

// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers
const sum = function sum(num1, num2, num3) {
  return num1 + num2 + num3;
};

// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue
const newArray = function newArray(length, defaultValue) {
  let myArray = [];
  for (let i = 0; i < length; i++) {
    myArray.push(defaultValue);
  }
};

// Question 4
// Add code to newArray so that if defaultValue is a
// function then the elements in the array will be set
// to the result of invoking defaultValue with the
// element's index as an argument
function callback!!!!
// Questions 5
// Write a function that adds or replaces a method on an object
// using the given propertyName
// If the argument obj is unset, create a new object
// The function you write should return
// the object passed in as an argument or the object created
const addMethod = function addMethod(propertyName, method, obj) {
  obj.prototype.propertyName = function(){
    method;
  }
};

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  newArray: newArray,
  addMethod: addMethod,
};
