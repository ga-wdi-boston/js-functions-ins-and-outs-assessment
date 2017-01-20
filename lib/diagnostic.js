'use strict';

// uncomment all formal parameters before starting
// on questions 3 or 5, i.e. remove the `/*` and `*/`

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
const min = function min() {
return Math.min();

};
//somethings wrong here, i thought I could just use the min function oops




// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers
const sum = function sum(x) {
  let total = 0;
  let i = 0;

  for( i=0; i<x.length; i++){
    total+=x[i];
  }
  return total;



};

// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue
const newArray = function newArray(length, defaultValue) {

  let secondArray = [];

  for (let g = 0; g<length; g++){
    secondArray.push(defaultValue);
  }
  return secondArray;
  //the error said unexpected identifier


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
const addMethod = function addMethod(/* propertyName, method, obj */) {
// not enough time to try -Ara
};

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  newArray: newArray,
  addMethod: addMethod,
};
