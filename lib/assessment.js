'use strict';

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
var min = function min() {
  return 3;
};
min();

// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers
var sum = function sum(a, b) {
  return (a + b);

};
sum(3, 4);

// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue
var newArray = function newArray(length, defaultValue) {
  //I DON'T KNOW
};

// Question 4
// Write a function that returns an array of the specified length
// with all the elements set to the value returned from
// invoking the argument defaultsFunction
// defaultsFunction should be passed the index of the array element to be set
var newArray2 = function newArray2(length, defaultsFunction) {
  var defaultsFunction = function (){
    ///??????? I DON'T KNOW!!!!!!!!!
  }
  return defaultsFunction();
};

// Questions 5
// Write a function that adds or replaces a method on an object
// using the given propertyName
// If the argument obj is unset, create a new object
// The function you write should return
// the object passed in as an argument or the object created
var addMethod = function addMethod(propertyName, method, obj) {
  var Method = {
    propertyName: propertyName,
    method: method,
    obj: obj
  };
  return Method;
};

var cat = addMethod ('cat', 'Neptune', 'male')
console.log('cat', cat );

//THIS WAS JUST A BLIND SHOT IN THE DARK

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  newArray: newArray,
  newArray2: newArray2,
  addMethod: addMethod
};
