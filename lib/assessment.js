'use strict';

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
var min = function min() {
  var minimum = arguments[0];
  for (var i = 0; i < arguments.length; i++){
    if(minimum < arguments[i]){
      minimum = arguments[i];
    }
  }
  return minimum; //i think this is right, but can't seem to get it to work
};

// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers
var sum = function sum() {
  var summation = 0;
  for (var i = 0; i < arguments.length; i++){
    summation += arguments[i];
  }
  return summation;
};

// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue
var newArray = function newArray(length, defaultValue) {
  var defaultArray = [];
  for (var i = 0; i < length; i++){
    defaultArray[i] = defaultValue;
  }
  return defaultArray;
};

// Question 4
// Write a function that returns an array of the specified length
// with all the elements set to the value returned from
// invoking the argument defaultsFunction
// defaultsFunction should be passed the index of the array element to be set
var newArray2 = function newArray2(length, defaultsFunction) {
  var ary;
  for (var i = 0; i < length; i++){
    ary[i] = defaultsFunction;
  }
  return ary; //i think i am unclear on what line 44 is asking - same thing as Q3 but with a function??
};

// Questions 5
// Write a function that adds or replaces a method on an object
// using the given propertyName
// If the argument obj is unset, create a new object
// The function you write should return
// the object passed in as an argument or the object created
var addMethod = function addMethod(propertyName, method, obj) {

//i have no idea how to do this on my own
};

//just FYI, I noticed yesterday that the solution branch was accessible to us (didnt look)
//It might be beneficial to keep it private until after we take the assessment so we aren't tempted to look at the answers prior to the assessment

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  newArray: newArray,
  newArray2: newArray2,
  addMethod: addMethod
};
