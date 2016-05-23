'use strict';

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
const min = function min() {
  let smallestNumber = arguments[0];
  for(let i = 1; i < arguments.length; i++) {
    if(smallestNumber > arguments[i]){
      smallestNumber = arguments[i];
    }
  }
  return smallestNumber;
};

// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers
const sum = function sum() {
  let addedNumbers = arguments[0];
  for(let i = 1; i < arguments.length; i++) {
    addedNumbers += arguments[i];
    }
  return addedNumbers;
};

// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue
const newArray = function newArray(length, defaultValue) {
  let anArray = [];
  if(typeof defaultValue == "function"){
    for(let i=0; i < length; i++){
      anArray[i] = defaultValue(i);
    }
    return anArray;
  } else {
  for(let i=0; i < length; i++){
    anArray[i] = defaultValue;
  }
}
  return anArray;
};

// Question 4
// Add code to newArray so that if defaultValue is a
// function then the elements in the array will be set
// to the result of invoking defaultValue with the
// element's index as an argument

// Questions 5
// Write a function that adds or replaces a method on an object
// using the given propertyName
// If the argument obj is unset, create a new object
// The function you write should return
// the object passed in as an argument or the object created
const addMethod = function addMethod(propertyName, method, obj) {
if(obj[propertyName]) {
    obj[propertyName] = method;
    return obj;
  } else {
    obj {
      propertyName: method;
    }
    return obj;
  }
};

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  newArray: newArray,
  addMethod: addMethod,
};
