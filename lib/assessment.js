'use strict';

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
var min = function () {
  var minimum = arguments[0]
  for (i=1; i< arguments.length; i++){
      if (arguments[i] < minimum) {
        mimumun = arguments][i];
    }
  }
  return minimum;
}

// I know this is wrong, I need to put args in min(args) but cant remember how to set it to the next variable because when I type in arg = arguments, arugments is already defined and my code will only accept three cases right now because of how its set up as a simple if/then statement.

// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers
var sum = function sum(arg1,arg2) {
    var total = 0;
    for (var i = 0; i < arguments.length; i++){
      total += arguments[i];
    }
    return total;
};

// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue
var newArray = function newArray(length, defaultValue) {
  var array = [];
  for (var i = 0; i < arguments.length; i++){
    arrray[i] = defaultValue;
  }
  return array;
};

// Question 4
// Write a function that returns an array of the specified length
// with all the elements set to the value returned from
// invoking the argument defaultsFunction
// defaultsFunction should be passed the index of the array element to be set
var newArray2 = function newArray2(length, defaultsFunction) {
  array2 = [];
  for (var i = 0; i < defaultsFunction.length; i++){
    array2 = array2[defaultValue]
  }
  return array2;
};

// Questions 5
// Write a function that adds or replaces a method on an object
// using the given propertyName
// If the argument obj is unset, create a new object
// The function you write should return
// the object passed in as an argument or the object created

var addMethod = function (propertyName, method, obj) {
  if (!obj) {
    obj = {};
  }
  obj[propertyName] = method;
  return obj;
};

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  newArray: newArray,
  newArray2: newArray2,
  addMethod: addMethod
};
