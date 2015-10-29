'use strict';

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
var min = function min(nums) {
  //grab the first number to compare against
  var minValue = nums[0];
  // loop through the remaining numbers
  for(var i = 1; i < nums.length; i++){
    if(nums[i] < minValue){
      //replace minValue with new number
      minValue = nums[i];
    }
    return minValue;
  }
};


// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers

var sum = function sum(nums) {
  var sumValue = 0;
  for(var i = 0; i < nums.length; i++){
      sumValue += nums[i];
  }
return sumValue;
};


// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue
var newArray = function newArray(length, defaultValue) {
  //create a new empty array
  //loop through length and push default Value to the new empty arrays
    var Array = [];
    for(var i = 0; i < length; i++){

     Array[i] = defaultValue;
   }
    return Array;
};


// Question 4
// Write a function that returns an array of the specified length
// with all the elements set to the value returned from
// invoking the argument defaultsFunction
// defaultsFunction should be passed the index of the array element to be set
var newArray2 = function newArray2(length, defaultsFunction) {
// inside the for loop, invoke defaultfunction and push the
// default value to the new array
    var Array = [];
    for(var i = 0; i < length; i++){
      Array[i] = defaultsFunction(i);
    }
  return Array;

};

// Questions 5
// Write a function that adds or replaces a method on an object
// using the given propertyName
// If the argument obj is unset, create a new object
// The function you write should return
// the object passed in as an argument or the object created
var addMethod = function addMethod(propertyName, method, obj) {
  if(obj === undefined){
    var obj = {};
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
