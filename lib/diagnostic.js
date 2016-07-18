'use strict';

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers

const min = function min() {

// assuming first element is min
  let result = arguments[0];

// first element is already in the result
  for (let i = 1; i < arguments.length; i++) {


    // if an element is array is bigger than first element
    if (result < arguments[i]){

      //return first element
      return result;
    }
    // otherwise return element in array
    return arguments[i];
  }

};

// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers


const sum = function sum() {

let result = 0;

  for (let i = 0; i < arguments.length; i++) {
   result += arguments[i];
  }
 return result;
};

// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue

const newArray = function newArray(length, defaultValue) {

let array = [];

for (let i = 0; i < array.length; i++) {
  array[i] = defaultValue;

if (defaultValue()){
  array[i] = defaultValue(length);
}


}
 return array;
};

// Question 4
// Add code to newArray so that if defaultValue is a
// function then the elements in the array will be set
// to the result of invoking defaultValue with the
// element's index as an argument


//Answer added in newArray function.




// Questions 5
// Write a function that adds or replaces a method on an object
// using the given propertyName
// If the argument obj is unset, create a new object
// The function you write should return
// the object passed in as an argument or the object created

const addMethod = function addMethod(propertyName, method, obj) {

  obj[propertyName] = method;

  if (!obj){
    let newObj = {};
  } else {
    return obj;
  }

return newObj;
};

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  newArray: newArray,
  addMethod: addMethod,
};
