'use strict';

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
const min = function min() {
  let result= arguments[0];
  for (let i = 0; i < arguments.length; i++) {
    if(arguments[i] < result){
      result = arguments[i];
    }
  }
  return result;
};

// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers
const sum = function sum() {
  let result = 0;
  if (arguments.length === 0) {
    return 0;
  }else{
    for (let i = 0; i < arguments.length; i++) {
      result = arguments[i] + result;

    }
    return result;
  }
};
// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue

//
const newArray = function newArray(length, defaultValue) {
  //write out the inputs and the outputs of the function. what value it returns
  let result = [];
  if(defaultValue instanceof Function){
    for (let i = 0; i < length; i++) {
      result.push(defaultValue(i));
    }
    //  set elements in the array to the value of calling defualtValue as a
    //  function using the current index as an argument
  }else{
    //going to need an empty array I am going to call it result
    for (let i = 0; i < length; i++) {
      result.push(defaultValue);
    }
  }
  return result;
};
  //since I am working with an array I am going to need a forloop.
  //I am going to need to push values to that array. Every element will be set to
  //defaultValue and the length of the array is set by the length parameter which
  //will change depending on what value length is set to.
  //use instanceOf to determine find out if thats the case
  //if it is
  //  set elements in the array to the value of calling defualtValue as a
  //  function using the current index as an argument
  //if it's not
  //  push the defaultValue onto the end of the array
  //  pushing a value creates a new element in the array and stores that value in the element


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

const addMethod = function (propertyName, method, obj) {
  if(obj == null){  //if the object is unset
    let newObj = {};   //  create new object
    newObj[propertyName] = method;    //assign the given method to the given propertyName of the new object
    return newObj;
  }else{
    console.log(obj);
    obj[propertyName] = method; //assign the given method to the given propertyName of this object
    return newObj;
    return obj; //  return this object
  }
  //  return this object

};


module.exports = {
  min: min,
  sum: sum,
  newArray: newArray,
  addMethod: addMethod
};
