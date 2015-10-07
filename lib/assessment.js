'use strict';

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
var min = function min() {
  if (!arguments[0]) {
    return undefined;
  }

  var smallest = arguments[0];
  for (var i = 1, max = arguments.length; i < max; i++) {
    if (arguments[i] < smallest) {
      smallest = arguments[i];
    }
  }

  return smallest;
};

// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers
var sum = function sum() {
  if (!arguments[0]) {
    return 0;
  }

  var result = 0;
  for (var i = 0, max = arguments.length; i < max; i++) {
    result += arguments[i];
  }

  return result;
};

// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue
var newArray = function newArray(length, defaultValue) {
  var result = [];

  for (var i = 0; i < length; i++) {
    result[i] = defaultValue;
  }

  return result;
};

// Question 4
// Write a function that returns an array of the specified length
// with all the elements set to the value returned from
// invoking the argument defaultsFunction
// defaultsFunction should be passed the index of the array element to be set
var newArray2 = function newArray2(length, defaultsFunction) {
  var result = [];

  for (var i = 0; i < length; i++) {
    result[i] = defaultsFunction(i);
  }

  return result;
};

// Questions 5
// Write a function that adds or replaces a method on an object
// using the given propertyName
// If the argument obj is unset, create a new object
// The function you write should return
// the object passed in as an argument or the object created
var addMethod = function addMethod(propertyName, method, obj) {
  if (!obj) {
    var target = {};
  } else {
    var target = obj;
  }

  target.prototype.propertyName = method;

  return target;
};

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  newArray: newArray,
  newArray2: newArray2,
  addMethod: addMethod
};
