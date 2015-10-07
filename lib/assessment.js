'use strict';

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
var min = function min() {
      //I KNOW THAT WE NEED TO USE ARGUMENT OBJECT WHEN CREATING A FUNCTION WHOSE PARAMETERS WILL BE DEFINED LATER AND WILL BE OF INDETERMINATE LENGTH

      //I AM REFRESHING MY MEMORY BY REFERRING TO OUR EXAMPLE CODE AND TWEAKING IT FOR THIS CASE

// grab the first number to compare against
// this will be undefined if the array passed is empty
  var minValue = arguments[0];
  //loop thrU remaining numbers
  for (var i = 1; i = arguments.length; i++) {
    // if the current element is less
    // than minValue
    if (arguments(i) < minValue) {
      // replace minValue with the current number
      minValue = arguments[i];
    }

  }

  return minValue;



};

//***** If I didn't have this code to copy in and tweak, I could not have written it from scratch. ********

// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers
var sum = function sum() {

// grab the first number to add.
//I am trying to figure out how to store each value and keep it increasing
// this will be undefined if the array passed is empty
  var totalValue // will hold the running and final total
  var newValue = arguments[0];
  //loop thru remaining numbers
  for (var i = 1; i = arguments.length; i++) {
    // get the value of that arguement
     //missing code here
      {
      // keep a running total of the sum of arguements as we go along
      totalValue = arguments[i];
    }

  }
  //return the final sum
  return totalValue;

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
