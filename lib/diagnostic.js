'use strict';

// uncomment all formal parameters before starting
// on questions 3 or 5, i.e. remove the `/*` and `*/`

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
const min = function min() {
let minimun;
  if(arguments){
    minimun = arguments[0];
      for (let i = 0; i < arguments.length; i++) {
        if(minimun >= arguments[i]){
          minimun = arguments[i];
        }
      }
      return minimun;
    }
};

// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers
const sum = function sum() {
let sum = 0;

for (let i = 0; i < arguments.length; i++) {
  sum += arguments[i];
}
return sum;
};

// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue
const newArray = function newArray(length, defaultValue) {
let array = [];
for (let i = 0; i < length; i++) {

if (typeof defaultValue === "function") {
    array[i] = defaultValue(i);
  } else {
  array[i] = defaultValue;
}
}
return array;
};

// Question 4
// Add code to newArray so that if defaultValue is a
// function then the elements in the array will be set
// to the result of invoking defaultValue with the
// element's index as an argument

// Questions 5
// Write a function that adds or replaces a method on an object
// using the given propertyName
// If the argument obj is unset, create a new object
// The function you write should return
// the object passed in as an argument or the object created
function Obj(propertyName, method) {
  this[propertyName] = method;
}
const addMethod = function addMethod(propertyName, method, obj) {

if (obj) {
  obj[propertyName] = method;
} else {
  let obj = new Obj(propertyName, method);
  return obj;

}

return obj;
};

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  newArray: newArray,
  addMethod: addMethod,
};
