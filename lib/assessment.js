'use strict';

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
    // var min = function min(nums) {
    //     var length = arguments.length;
    //     for(i=0; i<length;i++){
    //         I don't know the syntax to break this up!
    //         { '0': 10, '1': 12, '2': 14 }
    //         How do I pull out 10 with a key of 0?
    //     }
    //     return arguments;
    // };

    // min(10,12,14)

// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers
var sum = function sum() {
    var total=0;
    var i = 0;
    while(i < arguments.length) {
        total =+ arguments[i] + i + 1;
        i++;
    }
    return total;
};

// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue
var newArray = function newArray(length, defaultValue) {
    i = 0;
    array=[]
    while (i < defaultValue){
        array.push(length);
        i++;
    }
    return array;
};

newArray(2, 10);

// Question 4
// Write a function that returns an array of the specified length
// with all the elements set to the value returned from
// invoking the argument defaultsFunction
// defaultsFunction should be passed the index of the array element to be set
var newArray2 = function newArray2(length, defaultsFunction) {
  // ????
};

// Questions 5
// Write a function that adds or replaces a method on an object
// using the given propertyName
// If the argument obj is unset, create a new object
// The function you write should return
// the object passed in as an argument or the object created
    // var addMethod = function addMethod(propertyName, method, obj) {
    //     I don't understand this question
    // };

    // var human = {
    //     name : "john",
    //     human: true
    // };

    // addMethod(age, hello, pet);


// Used by testing
module.exports = {
  min: min,
  sum: sum,
  newArray: newArray,
  newArray2: newArray2,
  addMethod: addMethod
};
