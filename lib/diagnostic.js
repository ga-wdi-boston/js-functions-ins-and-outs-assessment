'use strict';

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
const min = function min(num) {
  let newArray = [];
  for (let i = 0; i < Math.count(num); i++){
    newArray.push(num);
  }
  return Math.min(newArray);
};

// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers
const sum = function sum(arg) {
  let sum = 0;
  for(let i = 0; i < arg.length; i++){
//WRONG
    if(arg.length !> 0){
      return undefined;
    } else {sum+= i;}
  }
  return sum;
};

// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue
const newArray = function newArray(length, defaultValue) {
  let newArr = [];
  for(let i = 0; i < length.length; i++){
    newArr.push(defaultValue);
  }
  return newArr;
};

// Question 4
// Add code to newArray so that if defaultValue is a
// function then the elements in the array will be set
// to the result of invoking defaultValue with the
// elements index as an argument
const newArray2 = function newArray2(length, defaultValue) {
  let Arr = [];
  for(let i = 0; i < length.length; i++){
    if(typeof defaultValue === 'function'){
      Arr.push(defaultValue(i));
    }else {
      Arr.push(defaultValue);}
    }return Arr;
  };


// Questions 5
// Write a function that adds or replaces a method on an object
// using the given propertyName
// If the argument obj is unset, create a new object
// The function you write should return
// the object passed in as an argument or the object created
const addMethod = function addMethod(propertyName, method, obj) {

};

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  newArray: newArray,
  addMethod: addMethod,
};
