'use strict';

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
var min = function min() {

  //set return value to first argument
  var minimum = arguments[0];

  //go through each argument and compare it to min
  for (var i = 0; i < arguments.length; i++) {

    //if min is larger than current argument set min to current argument
    if (minimum > arguments[i]) {
      minimum = arguments[i];
    }
  }

  return minimum;
};

// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers
var sum = function sum() {

  //set a return value, chose zero becuase if there are no arguments it should return zero
  var summation = 0;

  //go through all arguments
  for (var i = 0; i < arguments.length; i++) {

    //add each current argument to sum
    summation += arguments[i];
  }

  return summation;

};

// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue
var newArray = function newArray(length, defaultValue) {

  //an array should be returned
  var array = [];

  //add to new array based on the length requested
  for (var i = 0; i < length; i++) {

    //add defaultValue argument to current location in array
    array[i] = defaultValue;
  }

  return array;

};

// Question 4
// Write a function that returns an array of the specified length
// with all the elements set to the value returned from
// invoking the argument defaultsFunction
// defaultsFunction should be passed the index of the array element to be set
var newArray2 = function newArray2(length, defaultsFunction) {

  //needs to return array
  var array = [];

  //adds things to array
  for (var i = 0; i < length; i++) {

    //takes defaultsFunction argument and gives it current iteration passed through and adds to array
    array[i] = defaultsFunction(i);
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

  //need case where obj is not defined yet
  if (obj === undefined) {

    //creates obj incase one passed through doesn't exist yet
    obj = {};
  }

  var newObject = obj;

  //adds method to object
  newObject[propertyName] = method;

  return newObject;

};

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  newArray: newArray,
  newArray2: newArray2,
  addMethod: addMethod
};
