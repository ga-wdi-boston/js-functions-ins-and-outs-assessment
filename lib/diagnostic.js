'use strict';

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
const min = function min(a, b, c) {
      if ((a < b) && (a < c))
      return a;
      else if (
      ((b < a) && (b < c))
      )
      return b;
      else
      return c;
  };

  or:

  var min = function min(a, b, c) {
      return Math.min(a, b, c);
  };
  console.log(min(3, 4, 6));
};

// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers
const sum = function sum(a, b) {
      return a + b;
  };
  console.log(sum(1, 7));
};

// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue
const newArray = function newArray(length, defaultValue) {
      for(let i = 0; i < length; i++) {
      newArray[i] = defaultValue;
      }
  };
  newArray(9, 5);
  console.log(newArray);

// Question 4
// Add code to newArray so that if defaultValue is a
// function then the elements in the array will be set
// to the result of invoking defaultValue with the
// elements index as an argument
const newArray = function newArray(length, defaultsFunction) {
    for(let i = 0; i < length; i++) {
        newArray[i] = defaultsFunction(0);
    }
};
console.log(newArray2(9));

//let newArray = function(length, defaultValue) {
//    for(let i = 0; i < length; i++) {
//    newArray[i] = defaultValue;
//    }
//};
//newArray(9, 5);
//console.log(newArray);

// Questions 5
// Write a function that adds or replaces a method on an object
// using the given propertyName
// If the argument obj is unset, create a new object
// The function you write should return
// the object passed in as an argument or the object created
const addMethod = function addMethod(propertyName, method, obj) {

};

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  newArray: newArray,
  addMethod: addMethod,
};
