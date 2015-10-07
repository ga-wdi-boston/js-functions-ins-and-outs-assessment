'use strict';

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
var min = function min() {
  lowestNumber = argument[0];
  for (var i=1; i < arguments.length; i++) {
    if (arguments[i] < lowestNumber) {
      lowestNumber = arguments[i];
    }
  }
  return lowestNumber;
};

// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers
var sum = function sum() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total = total + arguments[i];
  }
  return total;
};

// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue
var defaultArray = [];
var newArray = function newArray(length, defaultValue) {
var i = 0;
while (length > 0) {
  defaultArray[i] = defaultValue;
  length = length - 1;
  i = i + 1;
}
return defaultArray;
};

// Question 4
// Write a function that returns an array of the specified length
// with all the elements set to the value returned from
// invoking the argument defaultsFunction
// defaultsFunction should be passed the index of the array element to be set
var newArray2 = function newArray2(length, defaultsFunction) {
  for (var i = 0; i < length; i++) {
    newArray2 [i] = defaultsFunction() ;
  }
};

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
