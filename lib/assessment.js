'use strict';

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
var min = function min() {
  var args = arguments;
  var min = args[0];

  for (var i = 0, max = args.length; i < max; i++) {
    if (args[i] < min) {
      min = args[i];
    }
  }

  return min;
};

// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers
var sum = function sum() {
  var sum = 0;

  for (var i = 0, max = arguments.length; i < max; i++) {
    sum += arguments[i];
  }

  return sum;
};

// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue
var newArray = function newArray(length, defaultValue) {
  var array = [];

  for (var i = 0, max = length; i < max; i++) {
    array.push(defaultValue);
  }

  return array;
};

// Question 4
// Write a function that returns an array of the specified length
// with all the elements set to the value returned from
// invoking the argument defaultsFunction
// defaultsFunction should be passed the index of the array element to be set
var newArray2 = function newArray2(length, defaultsFunction) {
  var array = [];

  for (var i = 0, max = length; i < max; i++) {
    array.push(defaultsFunction());
  }

  return array;
};

// Questions 5
// Write a function that adds or replaces a method on an object
// using the given propertyName
// If the argument obj is unset, create a new object
// The function you write should return
// the object passed in as an argument or the object created
var addMethod = function addMethod(propertyName, method, obj) {
  if (!obj) {
    var NewObject = {};
    obj = new NewObject;
  }

  obj.prototype.propertyName = method;
};

var result;
result = newArray2(4, function () {return 'value';});
console.log(result);

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  newArray: newArray,
  newArray2: newArray2,
  addMethod: addMethod
};
