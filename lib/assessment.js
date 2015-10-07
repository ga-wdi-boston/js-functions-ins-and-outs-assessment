'use strict';

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
var min = function min(num1,num2) {
  return Math.min(num1,num2);

};
console.log(Math.min(10,2));

// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers
var sum = function sum(num1,num2,num3) {
  return num1 + num2 + num3

};
console.log(sum(1,2,3));

// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue
var newArray = function newArray(length, defaultValue) {
  var data = [];

  for(var i = 0; i < length; i++) {
      data[i] = defaultValue;

  }

return data;

};
console.log(newArray(5,2));

// Question 4
// Write a function that returns an array of the specified length
// with all the elements set to the value returned from
// invoking the argument defaultsFunction
// defaultsFunction should be passed the index of the array element to be set
var newArray2 = function newArray2(length, defaultsFunction) {
  var data = [];

  for(var i = 0; i < length; i++) {
      data[i] = defaultsFunction(i);

  }

return data;

};
console.log(newArray2(5,function));



// Questions 5
// Write a function that adds or replaces a method on an object
// using the given propertyName
// If the argument obj is unset, create a new object
// The function you write should return
// the object passed in as an argument or the object created
var addMethod = function addMethod(propertyName, method, obj) {

};

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  newArray: newArray,
  newArray2: newArray2,
  addMethod: addMethod
};
