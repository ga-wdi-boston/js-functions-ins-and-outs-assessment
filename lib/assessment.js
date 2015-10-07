'use strict';

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
var min = function min() {
  var args = arguments;
  var min = args[0];
  for(i=1;i<args.length;i++){
    if (args[i] < min){
      min = args[i];
    }
  }
  return min;
};

// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers
var sum = function sum() {
  var args = arguments;
  var sum;
  for(i=0;i<args.length;i++){
      sum  += args[i];
    }
  }
  return sum;
};

// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue
var newArray = function newArray(length, defaultValue) {
  var myArray = [];
  for(i=0;i<length;i++){
    myArray[i] = defaultValue;
  }
  return myArray;
};

// Question 4
// Write a function that returns an array of the specified length
// with all the elements set to the value returned from
// invoking the argument defaultsFunction
// defaultsFunction should be passed the index of the array element to be set
var newArray2 = function newArray2(length, defaultsFunction) {
  var myArray = [];
  for(i=0;i<length;i++){
    myArray[i] = defaultsFunction(myArray[i]);
  }
  return myArray;
};

// Questions 5
// Write a function that adds or replaces a method on an object
// using the given propertyName
// If the argument obj is unset, create a new object
// The function you write should return
// the object passed in as an argument or the object created
var addMethod = function addMethod(propertyName, method, obj) {
  this.propertyName = method();     //DAN: confused on where prop and method go.
  var method = function (obj){
    if(!obj){
      return new var newObj{};
    } else{
      return obj;
    }
  }
};

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  newArray: newArray,
  newArray2: newArray2,
  addMethod: addMethod
};
