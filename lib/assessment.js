'use strict';

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
var min = function min(nums) {
  var minValue = nums[0];
  for (var i = 1; i < nums.length; i++) {
    if (nums[i] < minValue) {
      minValue = nums[i];
    }
  }
  return minValue;
};

var result = min([-2, -1, -5]);
console.log(result); // -5
var result = min([1, 5, 2]);
console.log(result); // 1
var result = min([0.05, 0.2, 0.1]);
console.log(result); // 0.05


// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers
var sum = function sum(aryAdd) {
  for (var i = 0; i < aryAdd.length; i++) {
    aryAdd[i] += 1;
  }
};


// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue
var newArray = function newArray(length, defaultValue) {

};


// Question 4
// Write a function that returns an array of the specified length
// with all the elements set to the value returned from
// invoking the argument defaultsFunction
// defaultsFunction should be passed the index of the array element to be set
var newArray2 = function newArray2(length, defaultsFunction) {

};


// Questions 5
// Write a function that adds or replaces a method on an object
// using the given propertyName
// If the argument obj is unset, create a new object
// The function you write should return
// the object passed in as an argument or the object created
var addMethod = function addMethod(propertyName, method, obj) {

};


// Used by testing
module.exports = {
  min: min,
  sum: sum,
  newArray: newArray,
  newArray2: newArray2,
  addMethod: addMethod
};
