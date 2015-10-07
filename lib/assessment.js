'use strict';

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
var min = function min() {
  var currentMin = arguments[0];
  for(var i=1; i<arguments.length;i++){
    if(arguments[i] < currentMin) currentMin = arguments[i];
  }
  return currentMin;
};

// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers
var sum = function sum() {
  var sum = 0;
  for(var i=0; i<arguments.length;i++){
    sum += arguments[i];
  }
  return sum;
};

// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue
var newArray = function newArray(length, defaultValue) {
  var ary = [];
  for(var i=0; i<length; i++){
    ary[i] = defaultValue;
  }
  return ary;
};

// Question 4
// Write a function that returns an array of the specified length
// with all the elements set to the value returned from
// invoking the argument defaultsFunction
// defaultsFunction should be passed the index of the array element to be set
var newArray2 = function newArray2(length, defaultsFunction) {
  var ary = [];
  for(var i=0; i<length; i++){
    ary[i] = defaultsFunction(i);
  }
  return ary;
};

// Questions 5
// Write a function that adds or replaces a method on an object
// using the given propertyName
// If the argument obj is unset, create a new object
// The function you write should return
// the object passed in as an argument or the object created

var addMethod = function addMethod(propertyName, method, obj) {
  if(typeof arguments[2] === 'undefined') {
      var newObj = {}
      newObj[propertyName] = method;
      return newObj;
  }
  else  {
    obj[propertyName] = method;
    return obj;
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
