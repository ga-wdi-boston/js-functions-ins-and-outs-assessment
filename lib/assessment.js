'use strict';

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
var min = function min() {
  for (i=0; i< arguments.length; i++){
    return arguments+
  }
min(1,4,9);

// I know this is wrong, I need to put args in min(args) but cant remember how to set it to the next variable because when I type in arg = arguments, arugments is already defined and my code will only accept three cases right now because of how its set up as a simple if/then statement.

// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers
var sum = function sum(arg1,arg2) {
  return arg1 + arg2;
};

// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue
var newArray = function newArray(length, defaultValue) {

//didn't even get this far, just need to see it again.  couldn't find antony's code along.  can you please update any repo with the code along so if we go over it again, it's not a blank with the starter code.
};

// Question 4
// Write a function that returns an array of the specified length
// with all the elements set to the value returned from
// invoking the argument defaultsFunction
// defaultsFunction should be passed the index of the array element to be set
var newArray2 = function newArray2(length, defaultsFunction) {

};

didn't even get this far, just need to see it again.  couldn't find antony's code along.  can you please update any repo with the code along so if we go over it again, it's not a blank with the starter code.  i will use my lunch time or after the day is over to go over this.  just let me know.

// Questions 5
// Write a function that adds or replaces a method on an object
// using the given propertyName
// If the argument obj is unset, create a new object
// The function you write should return
// the object passed in as an argument or the object created
var addMethod = function addMethod(propertyName, method, obj) {

};
/didn't even get this far, just need to see it again.  couldn't find antony's code along.  can you please update any repo with the code along so if we go over it again, it's not a blank with the starter code.

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  newArray: newArray,
  newArray2: newArray2,
  addMethod: addMethod
};
