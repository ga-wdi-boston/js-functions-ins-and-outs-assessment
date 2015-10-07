'use strict';

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
var min = function min() {
  var minimum = arguments[0];
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[1] < minimum) {
        minimum = arguments[i];
    };

  };

  return minimum;
};

// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers
var sum = function sum() {
  var total = arguments[0];
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  };
  return total;
};

// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue
var newArray = function newArray(length, defaultValue) {
var array = [];
  for (var i = 0; i < length; i++) {
//I am unsure how to set all the elements to the defaultValue here.
  };

return array;
};

// Question 4
// Write a function that returns an array of the specified length
// with all the elements set to the value returned from
// invoking the argument defaultsFunction
// defaultsFunction should be passed the index of the array element to be set
var newArray2 = function newArray2(length, defaultsFunction) {
var array = [];
  for (var i = 0; i < length; i++) {
 // again I am unsure here how to pass the defaultFunction index of the array
  };
  return array;
};

// Questions 5
// Write a function that adds or replaces a method on an object
// using the given propertyName
// If the argument obj is unset, create a new object
// The function you write should return
// the object passed in as an argument or the object created
var addMethod = function addMethod(propertyName, method, obj) {
 // I am finding this question hard to break down into smaller steps to start this work. I know I need to fun an if function and I know I need a return but not sure what else.

  if () {

  };
  return ;
};

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  newArray: newArray,
  newArray2: newArray2,
  addMethod: addMethod
};
