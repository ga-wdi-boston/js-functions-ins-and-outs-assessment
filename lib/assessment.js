'use strict';

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
var min = function min() {
  // get the arguments, assign to args
  var args = arguments;

  var result = 0;

  // iterate over args length and compare value to result
  for (var i = 0; i < args.length; i++) {
    if (args[i] < result) {
      result = args[i];
    }
  }
  return result;
};

// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers
var sum = function sum() {
  // get the arguments, assign to args
  var args = arguments;

  var result = 0;

  // iterate over args length and compare value to result
  for (var i = 0; i < args.length; i++) {
    result += args[i];
    }
  return result;
};

// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue
var newArray = function newArray(length, defaultValue) {

 var result = [];

  // iterate over the specified length
  for (var i = 0; i < length; i++) {
    // set each index value of the result array to defaultValue
    result[i] = defaultValue;
    }

  // return the new array
  return result;
};

// Question 4
// Write a function that returns an array of the specified length
// with all the elements set to the value returned from
// invoking the argument defaultsFunction
// defaultsFunction should be passed the index of the array element to be set
var newArray2 = function newArray2(length, defaultsFunction) {

 var result = [];

  // iterate over the specified length
  for (var i = 0; i < length; i++) {
    // set each index value of the result of invoking the defaultsFunction

    // remember to actually pass the index of the array *to* the function
    // much more helpful when reading a question when not time-pressed to comprehend the question! :)
    result[i] = defaultsFunction(i);
    }

  // return the new array
  return result;
};

// Questions 5
// Write a function that adds or replaces a method on an object
// using the given propertyName
// If the argument obj is unset, create a new object
// The function you write should return
// the object passed in as an argument or the object created

var addMethod = function addMethod(propertyName, method, obj) {

  // so I can write '!obj' and JS knows that to check if that parameter
  // was passed in? Or does this work because we are intending 'obj'
  // to be referencing an object?

  // are we using the word 'obj' as a semantic name for an object because
  // we're intending to use that parameter as an object? We could just
  // as easily use 'mary' for 'obj' as long as we know intent, yes?

  if (!obj) {
    obj = {};
  }

  // so in this case, by writing our function this way, if the propertyName doesn't exist,
  // when this function is invoked, we create it by writing the below statement and assign the parameter named 'method' to the propertyName, correct? And 'method' is a semantically-named parameter, yes?

  // Additionally, if the propertyName *already* exists, whatever propert value that *already* exists
  // will be replaced with whatever argument (in this case, a method), we pass in when we invoke the function.
  // Correct?

  // *****
  // Hopefully I'm being more clear here. So far, it either seems like I'm either not explaining my reasoning
  // and level of understanding of the problem clearly and am getting dinged for that...
  // ...or I'm just not understanding the question. I'm hoping I'm being clear.

  obj[propertyName]= method;


  // return the object. Just the object, yes? Did I read the question correctly?
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
