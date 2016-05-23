'use strict';

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
const min = function min(arrayOfNumbers) {
  let min = function () {
    let result = arguments[0][0];
for (let i = 1; i< arguments[0].lenghth; i++){
  if(result > arguments[0][i]){
    result = arguments[0][i];
  }
}
  return result;
  }
};
// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers
const sum = function sum(arrayOfNumbers) {
  let result = [];
  let sum = function() {
    for(let i= 1; i <arguments[0][0].length; i++){
      result += arguments[0][i];
    }
  }
  return result;
};

// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue
const newArray = function newArray(length, defaultValue) {
  let newArray = function () {
      let result = [];
      if (defaultValue == function ()){
        result = defaultValue(argument[0]);
      }
      else {
  for(let i= 1; i <length; i++) {
    result.push(defaultValue);
  }  };
  }
  return result;
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
const addMethod = function addMethod(propertyName, method, obj) {

  if (obj == undefiend) {
    var newObj = new Object();
  }
  else if (propertyName == undefiend){
    newObj.prototype.method = function (){

    }
  }
  return obj(newObj);

};

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  newArray: newArray,
  addMethod: addMethod,
};
