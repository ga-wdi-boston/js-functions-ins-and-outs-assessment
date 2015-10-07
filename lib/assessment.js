'use strict';

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
var min = function min() {
  var arg = arguments;
  if(arg){
    var minimum = arg[0];
    // this for loop is not working, and I'm not sure why. It's not entering the for loop.
    for(var i = 0, length = arg.lenth; i < length; i++){
      if(arg[i] < minimum){
        minimum = arg[i];
      }
    } return minimum;
  } else return console.log("What is the minimm of nothing?");
};

// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers
var sum = function sum() {
  var arg = arguments;
  var total = 0;
  //not entering the if statement. Sigh.
  if(arg){
    for (var i = 0, length = arg.lenth; i < length; i++) {
      total += arg[i];
    }
  } return total;
};

// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue
var newArray = function newArray(length, defaultValue) {
  var array = [];
  for(var i = 0; i < length; i++){
    array.push(defaultValue);
  } return array;
};

// Question 4
// Write a function that returns an array of the specified length
// with all the elements set to the value returned from
// invoking the argument defaultsFunction
// defaultsFunction should be passed the index of the array element to be set
var newArray2 = function newArray2(length, defaultsFunction) {
  var array = [];
  for(var i = 0; i < length; i++){
    array[i] = defaultsFunction(i);
  } return array;
};

// Questions 5
// Write a function that adds or replaces a method on an object
// using the given propertyName
// If the argument obj is unset, create a new object
// The function you write should return
// the object passed in as an argument or the object created
var addMethod = function addMethod(propertyName, method, obj) {
  if(!obj){
    obj = {};
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
