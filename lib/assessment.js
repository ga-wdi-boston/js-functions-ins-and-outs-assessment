'use strict';

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
// var min = function min([1, 3, 4, 2]) {

//   var findMin = 0;

//   for(var i = 0; i < min.length; i++) {
//     return Math.min.apply();
//   };

// };

// I am not sure how to write this correctly, but I would use Math.min to find the minimum number in an array.


// correct answer:
var min = function(){
  var result = arg [0]; // first spot in the array - this is where to store the result
  for(var index; index < arguments.length; index++); // iterate over the array
    if(arguments[index] < result);
      result = arguments[index];
}
return result; // have to see everything in the result, so return has to be outside the function




// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers
// var sum = function sum([1, 2, 3, 4]) {

//   var sumTotal = 0;
//   for(var i = 0; i < sum.length; i++); {
//     sumTotal += sum[i];
//   }

//   return sumTotal;

// };

// correct answer:
var sum = function sum(){
  var result = 0;
  for (var index = 0; index < args.length; index ++);
    result += arg[index];
}
return result;


// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue
// var newArray = function newArray(length, defaultValue) {

// };

//corrected answer:
var newArray = function newArray(length,defaultValue){
  var result = [];
  // for loop is to do something a certain number of  times
  for (var i = 0; i < length; i++) { // length is the size of the new array
    result.push(defValue);
  };
};
return result;

// Question 4
// Write a function that returns an array of the specified length
// with all the elements set to the value returned from
// invoking the argument defaultsFunction
// defaultsFunction should be passed the index of the array element to be set
// var newArray2 = function newArray2(length, defaultsFunction) {

// };

// corrected answer:
var newArray2 = function newArray2(length, defaultsFunction){
  for(index = 0; i < length; i++){
    array[i] = defaultsFunction(i);
  };
return array;
};



// Questions 5
// Write a function that adds or replaces a method on an object
// using the given propertyName
// If the argument obj is unset, create a new object
// The function you write should return
// the object passed in as an argument or the object created

// corrected answer:
var addMethod = function addMethod(propertyName, method, obj) {
  if (obj === undefined){
    obj = {}; // this assigns a value to obj if it's undefined
  };
  obj[propertyName] = method; // method is storing a function
  // this takes the object passed in as an argument
return obj; // return inside the function in this case
};

// object.thing - object is the object, thing is a variable, dot is the object


// Used by testing
module.exports = {
  min: min,
  sum: sum,
  newArray: newArray,
  newArray2: newArray2,
  addMethod: addMethod
};
