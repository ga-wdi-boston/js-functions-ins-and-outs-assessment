'use strict'

// uncomment all formal parameters before starting
// on questions 3 or 5, i.e. remove the `/*` and `*/`

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
const min = function min (num1, num2) {
  for let( i = 0; i > 0; i--) {result[i] = min[i])

}

}

// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers
const sum = function(num1, num2) {
  return num1 + num2

}

// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue



// Question 4
// Add code to newArray so that if defaultValue is a
// function then the elements in the array will be set
// to the result of invoking defaultValue with the
// element's index as an argument

const newArray = function newArray (/* length, defaultValue */) {
  let result = []

  for let(i = 0; i < newarray.length; i++) {result[i] = newarray[i]

  }
  return result

}
// Questions 5
// Write a function that adds or replaces a method on an object
// using the given propertyName
// If the argument obj is unset, create a new object
// The function you write should return
// the object passed in as an argument or the object created
const addMethod = function addMethod (/* propertyName, method, obj */) {

}

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  newArray: newArray,
  addMethod: addMethod
}
