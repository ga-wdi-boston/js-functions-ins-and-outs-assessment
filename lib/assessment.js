'use strict';

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers

var min = function min(number) {
numbers = [6,1,3,4,8];
 var minimum = number[0];
 for (var i =1; i < numbers.length; i++);
    if (numbers[i] < minimum) {
    minimum = number[i];

    return minimum;
  }
  console.log(minimum);
};
// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers

var sum = function sum() {
var result = 0;
for (var i = 0; i < arguments.length; i++)  {
  result += arguments[i];
}

return result;


};

// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue
var myArray = function myArray(length, defaultValue) {
var yourArray = [];

for(i = 0; i < myArray.length; i++) {
  yourArray[i] = defaultValue;
}

return yourArray;
};

// Question 4
// Write a function that returns an array of the specified length
// with all the elements set to the value returned from
// invoking the argument defaultsFunction
// defaultsFunction should be passed the index of the array element to be set
var newArray = function newArray(length, defaultsFunction) {
 var array = [];
for (var i = 0; i < length; i++) {
   array[i] = defaultsFunction(i); //defaultsFunction(i) is the index of the array being passed
  }

  return array;
 };

// Questions 5
// Write a function that adds or replaces a method on an object
// using the given propertyName
// If the argument obj is unset, create a new object
// The function you write should return
// the object passed in as an argument or the object created

var addMethod = function addMethod(propertyName, method, obj) //if it adds or replaces a method, method has to be an argument, and if there's an unset object, object has to be a argument too
 {
  if(obj === undefined) {
    obj = {};
  }

  obj.propertyName = method;

  return obj;

};
//I think I understand this, but these concepts still seem so umbiguous.

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  newArray: newArray,
  newArray2: newArray2,
  addMethod: addMethod
};
