'use strict';

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
var min = function min([1, 3, 4, 2]) {

  var findMin = 0;

  for(var i = 0; i < min.length; i++) {
    return Math.min.apply();
  };

};

// I am not sure how to write this correctly, but I would use Math.min to find the minimum number in an array.

// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers
var sum = function sum([1, 2, 3, 4]) {

  var sumTotal = 0;
  for(var i = 0; i < sum.length; i++); {
    sumTotal += sum[i];
  }

  return sumTotal;

};

// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue
var newArray = function newArray(length, defaultValue) {

// I didn't get to this problem.

};

// Question 4
// Write a function that returns an array of the specified length
// with all the elements set to the value returned from
// invoking the argument defaultsFunction
// defaultsFunction should be passed the index of the array element to be set
var newArray2 = function newArray2(length, defaultsFunction) {

};

// I didn't get to this problem.


// Questions 5
// Write a function that adds or replaces a method on an object
// using the given propertyName
// If the argument obj is unset, create a new object
// The function you write should return
// the object passed in as an argument or the object created
var addMethod = function addMethod(propertyName, method, obj) {

};

// I didn't get to this problem.


// Used by testing
module.exports = {
  min: min,
  sum: sum,
  newArray: newArray,
  newArray2: newArray2,
  addMethod: addMethod
};
