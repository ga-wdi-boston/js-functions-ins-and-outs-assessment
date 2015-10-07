'use strict';

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
var min = function min() {
  // get the arguments, assign to args
  var args = arguments;

  var result = 0;

  // iterate over args length and compare value to result
  for (var i = 0; i < args.length; i++) {
    if (result < args[i]) {
      result = args[i];
    }
  }
  return result;
};

// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers
var sum = function sum() {
  // get the arguments, assign to args
  var args = arguments;

  var result = 0;

  // iterate over args length and compare value to result
  for (var i = 0; i < args.length; i++) {
    result += args[i];
    }
  }
  return result;
};

// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue
var newArray = function newArray(length, defaultValue) {

 var result = [];

  // iterate over the specified length
  for (var i = 0; i < length; i++) {
    // set each index value of the result array to defaultValue
    result[i] = defaultValue;
    }
  }

  // return the new array
  return result;
};

// Question 4
// Write a function that returns an array of the specified length
// with all the elements set to the value returned from
// invoking the argument defaultsFunction
// defaultsFunction should be passed the index of the array element to be set
var newArray2 = function newArray2(length, defaultsFunction) {

 var result = [];

  // iterate over the specified length
  for (var i = 0; i < length; i++) {
    // set each index value of the result of invoking the defaultsFunction
    result[i] = defaultsFunction();
    }
  }

  // return the new array
  return result;
};

// Questions 5
// Write a function that adds or replaces a method on an object
// using the given propertyName
// If the argument obj is unset, create a new object
// The function you write should return
// the object passed in as an argument or the object created
var addMethod = function addMethod(propertyName, method, obj) {

  // define var result as an instance of a new object
  var result = {};

  var newObj = {};

  var addOrReplaceMethod = function() {
    var newMethod = method;
    return this.propertyName[i].newMethod = method;
  }

    if (/*obj is unset*/) {
      var newObj = obj;
      } else {
      // return the already-in-existence object;
    }

  return result;

};

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  newArray: newArray,
  newArray2: newArray2,
  addMethod: addMethod
};
