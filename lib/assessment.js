'use strict';

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
var min = function min() {
  if (arguments.length > 0) {

    var array = arguments['0'];
    var retMin = array[0];
    for (var i = 1; i < array.length ; ++i)
      if (array[i] < retMin)
        retMin = array[i];
   return retMin;
  };
  return NaN;
};

console.log(min([1,2,3,-9]));

// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers
var sum = function sum() {
   if (arguments.length > 0) {

    var array = arguments['0'];
    var retValue = 0;
    for (var i = 0; i < array.length ; ++i)
        retValue += array[i];
   return retValue;
  };
  return undefined;
};

console.log(sum([1,2,3,4]));



// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue
var newArray = function newArray(length, defaultValue) {
  var retVal = [];

  for (var i = 0; i < length; i++)
    retVal[i] = defaultValue;

  return retVal;

};

console.log(newArray(5,"SSS"));

// Question 4
// Write a function that returns an array of the specified length
// with all the elements set to the value returned from
// invoking the argument defaultsFunction
// defaultsFunction should be passed the index of the array element to be set
var newArray2 = function newArray2(length, defaultsFunction) {
  var retVal = [];

  for (var i = 0; i < length; i++)
    retVal[i] = defaultsFunction(i);

  return retVal;

};

// Questions 5
// Write a function that adds or replaces a method on an object
// using the given propertyName
// If the argument obj is unset, create a new object
// The function you write should return
// the object passed in as an argument or the object created
var addMethod = function addMethod(propertyName, method, obj) {

  if (obj === undefined)
  {
    obj = new {};
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
