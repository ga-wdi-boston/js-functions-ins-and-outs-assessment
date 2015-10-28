'use strict';

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
var min = function() {
  var result = arguments[0];
  for (i = 1; i < arguments.length; i++){
    if (arguments[i] < result){
      result = arguments[i];
    }

  }
return result;
}

min(5, 4, 6, 7, 10, 2, 3);

// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers
var sum = function() {
  var result = 0;
  for (i = 0; i < arguments.length; i++){
    result = arguments[i] + result;
  }
return result;
};


// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue
var newArray = function(length, defVal){
  var result = [];
  for (i = 0; i < length; i++){
    result.push(defVal);
  }
return result;
  };
newArray(8, 4);

// Question 4
// Write a function that returns an array of the specified length
// with all the elements set to the value returned from
// invoking the argument defaultsFunction
// defaultsFunction should be passed the index of the array element to be set
var newArray2 = function(length, defFunction){
  var result = [];
  for (i = 0; i < length; i++){
    result.push(defFunction);
  }

return result;

  };

newArray2(3, function(){return 8;});
// Questions 5
// Write a function that adds or replaces a method on an object
// using the given propertyName
// If the argument obj is unset, create a new object
// The function you write should return
// the object passed in as an argument or the object created
var addMethod = function(propertyName, method, obj){
  if (obj === undefined){
    obj = {};
  }
  obj[propertyName] = method;
  return obj;
  };
myObject.dog();

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  newArray: newArray,
  newArray2: newArray2,
  addMethod: addMethod
};
