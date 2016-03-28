'use strict';

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
const min = function () {
  let result = arguments[0];
  for (let i = 0; i < arguments.length; i++) {
    if (result > arguments[i]){
      result = arguments[i];
    }
  }
  return result;};


// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers
const sum = function sum() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
return result;
};

// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue
const newArray = function newArray(length, defaultValue) {
  let result = [];
  for (var i = 0; i < newArray.length; i++) {
    result.push(defaultValue);
  }
  return result;
};




// Question 4
// Add code to newArray so that if defaultValue is a
// function then the elements in the array will be set
// to the result of invoking defaultValue with the
// elements index as an argument


const newArray2 = function newArray(length, defaultValue) {
  let result = [];
  for (var i = 0; i < newArray2.length; i++) {
    result.push(defaultValue(newArray2[i]));
  }
  return result;
};



// Questions 5
// Write a function that adds or replaces a method on an object
// using the given propertyName
// If the argument obj is unset, create a new object
// The function you write should return
// the object passed in as an argument or the object created
const addMethod = function addMethod(propertyName, method, obj) {
  let result = {};
  for (var i = 0; i < argument.length; i++) {
    if (argument[0]){
      result.push(method(argument[i]));
    };
  }

};

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  newArray: newArray,
  addMethod: addMethod,
};
