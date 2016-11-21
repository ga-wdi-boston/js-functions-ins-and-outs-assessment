'use strict';

// uncomment all formal parameters before starting
// on questions 3 or 5, i.e. remove the `/*` and `*/`

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
const min = function min(x, y) {
  return (x <= y) ? x:y;
};

console.log(min(0,10));
// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers
const sum = function sum(x,y) {
  return (x+y);
};

console.log (sum(2,3));
// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue
const newArray = function newArray(length, defaultValue) {
  let _somearray = [];
  for somearray (somearray i=0; i < somearray.length; i++);
  let newArray = somearray;
  newArray.fill (integers, 0);
};
console.log newArray(10, int);
// Question 4
// Add code to newArray so that if defaultValue is a
// function then the elements in the array will be set
// to the result of invoking defaultValue with the
// element's index as an argument
const newArray = function newArray(index, defaulValue){
  let newArray =[];
};
// Questions 5
// Write a function that adds or replaces a method on an object
// using the given propertyName
// If the argument obj is unset, create a new object
// The function you write should return
// the object passed in as an argument or the object created
const addMethod = function addMethod(propertyName, method, obj) {
  this.propertyName = this propertyName
  this.method = method;
  this.object = object;
  {let object = function object()
  }
};

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  newArray: newArray,
  addMethod: addMethod,
};
