'use strict';

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
var min = function min() {
  var minValue = arguments[0];
  for (var i = 1; i < arguments.length; i++) {
    if (arguments[i] < minValue) {
      minValue = arguments[i];
    }
  }

  return minValue;
};

// test cases
// console.log(min(1, 2, 3));
// console.log(min(3, 1, 2));

// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers
var sum = function sum() {
  var results = 0;
  for (var i = 0; i < arguments.length; i++) {
    results += arguments[i];
  }
  return results;
};

// test cases
// console.log(sum(3, 4));
// console.log(sum(5, 1));

// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue
var newArray = function newArray(length, defaultValue) {
  var ary = [];
  for (var i = 0; i < length; ++i) {
    ary[i] = defaultValue;
  }

  return ary;
};

// // test case
// console.log(newArray(5, 12));

// Question 4
// Write a function that returns an array of the specified length
// with all the elements set to the value returned from
// invoking the argument defaultsFunction
// defaultsFunction should be passed the index of the array element to be set
var newArray2 = function newArray2(length, defaultsFunction) {
  var newAry = []
  for (var i = 0; i < length; i++) {
    newAry[i] = defaultsFunction();
  }

  return newAry;
};

// Questions 5
// Write a function that adds or replaces a method on an object
// using the given propertyName
// If the argument obj is unset, create a new object
// The function you write should return
// the object passed in as an argument or the object created
var addMethod = function addMethod(propertyName, method, obj) {
  // not completely sure how to approach
  if (!obj) {
    return {};
  }
  else {
    function(obj) {
      propertyName.method = propertyName.method;
    }
  }
};

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  newArray: newArray,
  newArray2: newArray2,
  addMethod: addMethod
};
